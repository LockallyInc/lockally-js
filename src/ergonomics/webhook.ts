/**
 * Webhook signature verification.
 *
 * Every delivery carries:
 *
 *     X-Lockally-Signature: t=<unix-seconds>,v1=<hex(hmac_sha256(secret, t + "." + body))>
 *
 * Verifying that by hand is an HMAC, a constant-time compare and a clock
 * window, in that order, and getting any of the three wrong fails quietly:
 * a `===` on the digest leaks timing, a missing window accepts a replay, and
 * re-serialising the body before hashing rejects every real delivery. It is
 * exactly the code an official SDK should remove, and until now none of ours
 * had it.
 *
 * The rules here are pinned against the server that signs the deliveries by
 * a shared fixture, sdk/ergonomics/testdata/webhook-cases.json, generated
 * from internal/webhook. Three of them are not what you would guess:
 *
 *   - The window is ONE-SIDED. Only a timestamp too far in the PAST is
 *     refused. A future one is accepted, so a verifier that rejects it would
 *     drop deliveries the server considers valid.
 *   - Unknown pairs are IGNORED, so a later `v2=` scheme cannot break a
 *     verifier written today.
 *   - The hex is decoded before comparison, so its case does not matter.
 *
 * And the one that breaks most first attempts: THE SECRET IS HEX TEXT AND
 * THE KEY IS THE BYTES IT DECODES TO. `signing_secret` is BYTEA, so the
 * dispatcher signs with 32 raw bytes while the API shows you the hex of
 * them, once, at creation. Signing with the text gives a valid-looking
 * digest that never matches. Pass the `string` you were shown and it is
 * decoded for you; pass a `Uint8Array` and it is used as the key unchanged.
 */

import { createHmac, timingSafeEqual } from "node:crypto";

/** The header carrying the signature. */
export const WEBHOOK_HEADER = "X-Lockally-Signature";

/** How old a timestamp may be before it is refused. Matches the server. */
export const WEBHOOK_MAX_SKEW_SECONDS = 300;

/** Why a delivery was refused. */
export type WebhookFailure = "malformed" | "expired" | "mismatch" | "secret";

/**
 * Thrown by {@link verifyWebhook}. One `catch` refuses the delivery; the
 * `reason` separates a broken header from a forged body from a misconfigured
 * secret, which want different handling and different logging. A "secret"
 * reason is your configuration, not the caller's signature.
 */
export class WebhookVerificationError extends Error {
  readonly reason: WebhookFailure;

  constructor(reason: WebhookFailure, message: string) {
    super(message);
    this.name = "WebhookVerificationError";
    this.reason = reason;
  }
}

export interface VerifyWebhookOptions {
  /** Unix seconds. Injected by tests; defaults to the real clock. */
  now?: number;
  /** Override the replay window. Defaults to the server's 300s. */
  maxSkewSeconds?: number;
}

/**
 * Throws unless `body` was signed with `secret`, as `header` claims.
 *
 * `body` MUST be the raw bytes or exact string as received. Parsing the JSON
 * and stringifying it again changes the bytes, and the signature is over the
 * bytes. In Express that means `express.raw({ type: "application/json" })`,
 * not `express.json()`:
 *
 * ```ts
 * app.post("/webhooks/lockally", express.raw({ type: "application/json" }), (req, res) => {
 *   try {
 *     verifyWebhook(SECRET_FROM_DASHBOARD, req.body, req.header(WEBHOOK_HEADER) ?? "");
 *   } catch {
 *     return res.sendStatus(400);
 *   }
 *   const event = JSON.parse(req.body.toString("utf8")); // safe from here
 * });
 * ```
 *
 * Returns `void` and throws on failure, rather than returning a boolean, so
 * that forgetting to check the result is a 500 and not a silent accept.
 */
export function verifyWebhook(
  secret: string | Uint8Array,
  body: string | Uint8Array,
  header: string,
  options: VerifyWebhookOptions = {},
): void {
  const maxSkew = options.maxSkewSeconds ?? WEBHOOK_MAX_SKEW_SECONDS;
  const key = typeof secret === "string" ? decodeSecret(secret) : secret;
  const { ts, sigHex } = parseSignature(header);

  if (!/^-?\d+$/.test(ts)) {
    throw new WebhookVerificationError("malformed", "t= is not an integer");
  }
  const tsInt = Number(ts);

  const now = options.now ?? Math.floor(Date.now() / 1000);
  // One-sided on purpose: see the note at the top of this file.
  if (now - tsInt > maxSkew) {
    throw new WebhookVerificationError(
      "expired",
      `signature is ${now - tsInt}s old; the window is ${maxSkew}s`,
    );
  }

  if (!/^[0-9a-fA-F]*$/.test(sigHex) || sigHex.length % 2 !== 0) {
    throw new WebhookVerificationError("malformed", "v1= is not hex");
  }
  const sig = Buffer.from(sigHex, "hex");

  const mac = createHmac("sha256", key);
  mac.update(ts);
  mac.update(".");
  mac.update(body);
  const want = mac.digest();

  // timingSafeEqual throws when the lengths differ, which is itself a
  // mismatch rather than an error the caller should see as malformed.
  if (sig.length !== want.length || !timingSafeEqual(sig, want)) {
    throw new WebhookVerificationError("mismatch", "HMAC does not match");
  }
}

function decodeSecret(secretHex: string): Buffer {
  const trimmed = secretHex.trim();
  if (trimmed.length === 0 || trimmed.length % 2 !== 0 || !/^[0-9a-fA-F]+$/.test(trimmed)) {
    throw new WebhookVerificationError(
      "secret",
      "signing secret is not valid hex; pass the string the dashboard showed you, or the decoded bytes",
    );
  }
  return Buffer.from(trimmed, "hex");
}

function parseSignature(header: string): { ts: string; sigHex: string } {
  let ts = "";
  let sigHex = "";
  for (const part of header.split(",")) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf("=");
    if (eq === -1) {
      throw new WebhookVerificationError("malformed", "expected k=v pairs");
    }
    // Unknown keys are skipped rather than refused, so a later scheme does
    // not break a verifier written today.
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (key === "t") ts = value;
    else if (key === "v1") sigHex = value;
  }
  if (!ts || !sigHex) {
    throw new WebhookVerificationError("malformed", "missing t= or v1=");
  }
  return { ts, sigHex };
}
