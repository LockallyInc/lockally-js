// The one call almost every integration makes, without the ceremony.
//
// The generated client is a faithful translation of the spec, which means
// sending looks like this:
//
//   const api = new SendApi(new Configuration({ accessToken: key }));
//   await api.sendEmail({
//     idempotencyKey: crypto.randomUUID(),
//     sendEmailRequest: { from, to, subject, text },
//   });
//
// Every part of that is correct and none of it is what anybody wants to read
// in a quickstart. This wraps it, and only it: one class, one method, no
// second client to keep in step with the generator.

import { LockallyApiError } from "./errors";

/** The message. Mirrors SendEmailRequest, which the generator owns. */
export interface SendMessage {
  from: string;
  to: string | string[];
  subject?: string;
  text?: string;
  html?: string;
  cc?: string | string[];
  bcc?: string | string[];
  replyTo?: string | string[];
  replyToName?: string;
  templateId?: string;
  variables?: Record<string, string>;
  headers?: Record<string, string>;
  attachments?: Array<{ filename: string; contentBase64: string; contentType?: string }>;
  tags?: string[];
  sendAt?: string;
  unsubscribe?: boolean;
}

export interface SendOptions {
  /**
   * The idempotency key. Supply one.
   *
   * It is REQUIRED by the API, so when it is omitted this generates a UUID to
   * keep the call working. That is a convenience, not a default to rely on: a
   * generated key is new on every call, so a retry through this method sends a
   * SECOND message rather than replaying the first. The key has to identify
   * the message, which only the caller knows.
   */
  idempotencyKey?: string;
}

export interface SendResult {
  id: string;
  messageId: string;
  status: "queued" | "delivered" | "suppressed" | string;
  warning?: string;
}

export interface LockallyOptions {
  /** Defaults to https://api.lockally.com */
  baseUrl?: string;
  /** Injected in tests; defaults to global fetch. */
  fetch?: typeof globalThis.fetch;
}

const DEFAULT_BASE = "https://api.lockally.com";

function list(v: string | string[] | undefined): string[] | undefined {
  if (v === undefined) return undefined;
  return Array.isArray(v) ? v : [v];
}

/** camelCase in, snake_case out, because the wire format is the spec's. */
function toWire(m: SendMessage): Record<string, unknown> {
  const body: Record<string, unknown> = {
    from: m.from,
    to: list(m.to),
    subject: m.subject,
    text: m.text,
    html: m.html,
    cc: list(m.cc),
    bcc: list(m.bcc),
    reply_to: list(m.replyTo),
    reply_to_name: m.replyToName,
    template_id: m.templateId,
    variables: m.variables,
    headers: m.headers,
    tags: m.tags,
    send_at: m.sendAt,
    unsubscribe: m.unsubscribe,
    attachments: m.attachments?.map((a) => ({
      filename: a.filename,
      content_base64: a.contentBase64,
      content_type: a.contentType,
    })),
  };
  for (const k of Object.keys(body)) if (body[k] === undefined) delete body[k];
  return body;
}

export class Lockally {
  readonly #key: string;
  readonly #baseUrl: string;
  readonly #fetch: typeof globalThis.fetch;

  constructor(apiKey: string, options: LockallyOptions = {}) {
    if (!apiKey) throw new Error("lockally: an API key is required");
    this.#key = apiKey;
    this.#baseUrl = (options.baseUrl ?? DEFAULT_BASE).replace(/\/$/, "");
    this.#fetch = options.fetch ?? globalThis.fetch;
  }

  /**
   * Send one message.
   *
   * Returns on 200 as well as 202. A 200 means nothing was queued, either
   * because every recipient was suppressed or because the key was a test key,
   * and both are successes. Branch on `status`, never on the status code.
   */
  async send(message: SendMessage, options: SendOptions = {}): Promise<SendResult> {
    const key = options.idempotencyKey ?? crypto.randomUUID();
    const res = await this.#fetch(`${this.#baseUrl}/v1/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.#key}`,
        "Content-Type": "application/json",
        "Idempotency-Key": key,
      },
      body: JSON.stringify(toWire(message)),
    });

    const text = await res.text();
    let body: any = undefined;
    try {
      body = text ? JSON.parse(text) : undefined;
    } catch {
      // A non-JSON body on an error path is itself the diagnostic: nginx
      // answers 413 as HTML when the payload is over its own ceiling.
    }

    if (!res.ok) {
      throw new LockallyApiError({
        status: res.status,
        code: body?.code,
        message: body?.title ?? `lockally: HTTP ${res.status}`,
        requestId: body?.request_id ?? res.headers.get("x-request-id") ?? undefined,
        body,
      });
    }

    return {
      id: body?.id,
      messageId: body?.message_id,
      status: body?.status,
      warning: body?.warning,
    };
  }
}
