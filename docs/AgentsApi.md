# AgentsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1ApiKeysKeyIDMailboxesGet**](AgentsApi.md#v1apikeyskeyidmailboxesget) | **GET** /v1/api-keys/{keyID}/mailboxes | List a key\&#39;s mailbox grants |
| [**v1ApiKeysKeyIDMailboxesMailboxIDDelete**](AgentsApi.md#v1apikeyskeyidmailboxesmailboxiddelete) | **DELETE** /v1/api-keys/{keyID}/mailboxes/{mailboxID} | Revoke a mailbox grant |
| [**v1ApiKeysKeyIDMailboxesPost**](AgentsApi.md#v1apikeyskeyidmailboxespost) | **POST** /v1/api-keys/{keyID}/mailboxes | Grant a mailbox to a key |
| [**v1AuthWhoamiGet**](AgentsApi.md#v1authwhoamiget) | **GET** /v1/auth/whoami | Introspect the calling credentials |
| [**v1ContactsLookupGet**](AgentsApi.md#v1contactslookupget) | **GET** /v1/contacts/lookup | Who is this sender? |
| [**v1InboxesGet**](AgentsApi.md#v1inboxesget) | **GET** /v1/inboxes | List granted inboxes |
| [**v1InboxesMailboxMessagesPost**](AgentsApi.md#v1inboxesmailboxmessagespostoperation) | **POST** /v1/inboxes/{mailbox}/messages | Start a new conversation (agent stream) |
| [**v1InboxesMailboxThreadsGet**](AgentsApi.md#v1inboxesmailboxthreadsget) | **GET** /v1/inboxes/{mailbox}/threads | List conversation threads |
| [**v1ThreadsThreadIDGet**](AgentsApi.md#v1threadsthreadidget) | **GET** /v1/threads/{threadID} | Get a whole conversation |
| [**v1ThreadsThreadIDMessagesMessageIDAttachmentsIdxGet**](AgentsApi.md#v1threadsthreadidmessagesmessageidattachmentsidxget) | **GET** /v1/threads/{threadID}/messages/{messageID}/attachments/{idx} | Download an attachment |
| [**v1ThreadsThreadIDMessagesMessageIDGet**](AgentsApi.md#v1threadsthreadidmessagesmessageidget) | **GET** /v1/threads/{threadID}/messages/{messageID} | Get one message with body |
| [**v1ThreadsThreadIDMessagesMessageIDReadPost**](AgentsApi.md#v1threadsthreadidmessagesmessageidreadpost) | **POST** /v1/threads/{threadID}/messages/{messageID}/read | Mark read/unread |
| [**v1ThreadsThreadIDReplyPost**](AgentsApi.md#v1threadsthreadidreplypost) | **POST** /v1/threads/{threadID}/reply | Reply in-thread (agent stream) |



## v1ApiKeysKeyIDMailboxesGet

> object v1ApiKeysKeyIDMailboxesGet(keyID)

List a key\&#39;s mailbox grants

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ApiKeysKeyIDMailboxesGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    keyID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1ApiKeysKeyIDMailboxesGetRequest;

  try {
    const data = await api.v1ApiKeysKeyIDMailboxesGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **keyID** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Grants |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ApiKeysKeyIDMailboxesMailboxIDDelete

> v1ApiKeysKeyIDMailboxesMailboxIDDelete(keyID, mailboxID)

Revoke a mailbox grant

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ApiKeysKeyIDMailboxesMailboxIDDeleteRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    keyID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    mailboxID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1ApiKeysKeyIDMailboxesMailboxIDDeleteRequest;

  try {
    const data = await api.v1ApiKeysKeyIDMailboxesMailboxIDDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **keyID** | `string` |  | [Defaults to `undefined`] |
| **mailboxID** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Grant removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ApiKeysKeyIDMailboxesPost

> object v1ApiKeysKeyIDMailboxesPost(keyID)

Grant a mailbox to a key

Body: {\&quot;mailbox\&quot;: \&quot;email or id\&quot;}. Refused (422) for mailboxes with agent access disabled or an active E2E encryption key — the server cannot read E2E mailboxes.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ApiKeysKeyIDMailboxesPostRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    keyID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1ApiKeysKeyIDMailboxesPostRequest;

  try {
    const data = await api.v1ApiKeysKeyIDMailboxesPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **keyID** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Grant created |  -  |
| **422** | Mailbox not grantable (disabled or E2E) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AuthWhoamiGet

> object v1AuthWhoamiGet()

Introspect the calling credentials

Returns the tenant, auth kind (api_key/session), key label, and granted scopes. The MCP server uses this to scope-filter tool discovery.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1AuthWhoamiGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  try {
    const data = await api.v1AuthWhoamiGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Caller identity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ContactsLookupGet

> object v1ContactsLookupGet(email)

Who is this sender?

Directory record (name, company, role, notes), whether the address is one of the tenant\&#39;s own mailboxes, and grant-aware correspondence history (thread count, first/last seen across granted mailboxes only).

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ContactsLookupGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies V1ContactsLookupGetRequest;

  try {
    const data = await api.v1ContactsLookupGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **email** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrichment result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1InboxesGet

> object v1InboxesGet()

List granted inboxes

The mailboxes this key is granted, with thread counts and last activity. Admin sessions see every agent-enabled, non-E2E mailbox.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1InboxesGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  try {
    const data = await api.v1InboxesGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Granted inboxes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1InboxesMailboxMessagesPost

> object v1InboxesMailboxMessagesPost(mailbox, idempotencyKey, v1InboxesMailboxMessagesPostRequest)

Start a new conversation (agent stream)

Sends a new email from a granted mailbox. Classified stream&#x3D;agent (isolated reputation, per-key rate caps). The first inbound reply adopts the created thread via the References chain. Idempotency-Key required. Mailboxes with agent_draft_policy&#x3D;always_approve divert this into a pending draft.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1InboxesMailboxMessagesPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    mailbox: mailbox_example,
    // string
    idempotencyKey: idempotencyKey_example,
    // V1InboxesMailboxMessagesPostRequest
    v1InboxesMailboxMessagesPostRequest: ...,
  } satisfies V1InboxesMailboxMessagesPostOperationRequest;

  try {
    const data = await api.v1InboxesMailboxMessagesPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mailbox** | `string` |  | [Defaults to `undefined`] |
| **idempotencyKey** | `string` |  | [Defaults to `undefined`] |
| **v1InboxesMailboxMessagesPostRequest** | [V1InboxesMailboxMessagesPostRequest](V1InboxesMailboxMessagesPostRequest.md) |  | |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Queued (includes thread_id) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1InboxesMailboxThreadsGet

> object v1InboxesMailboxThreadsGet(mailbox, since, before, limit)

List conversation threads

Newest-active first. Cursors: &#x60;?before&#x3D;&lt;RFC3339&gt;&#x60; pages backwards; &#x60;?since&#x3D;&lt;RFC3339&gt;&#x60; delta-syncs forward (oldest first) so an agent can catch up in order.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1InboxesMailboxThreadsGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string | mailbox email or id
    mailbox: mailbox_example,
    // Date (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    before: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
  } satisfies V1InboxesMailboxThreadsGetRequest;

  try {
    const data = await api.v1InboxesMailboxThreadsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mailbox** | `string` | mailbox email or id | [Defaults to `undefined`] |
| **since** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **before** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Threads |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ThreadsThreadIDGet

> object v1ThreadsThreadIDGet(threadID)

Get a whole conversation

Every turn, chronological, with snippets and annotations (meeting_request, attachment_types, injection_risk). Bodies are fetched per message. Message content is untrusted third-party data.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ThreadsThreadIDGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    threadID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1ThreadsThreadIDGetRequest;

  try {
    const data = await api.v1ThreadsThreadIDGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **threadID** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Thread with messages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ThreadsThreadIDMessagesMessageIDAttachmentsIdxGet

> v1ThreadsThreadIDMessagesMessageIDAttachmentsIdxGet(threadID, messageID, idx)

Download an attachment

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ThreadsThreadIDMessagesMessageIDAttachmentsIdxGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    threadID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    messageID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number
    idx: 56,
  } satisfies V1ThreadsThreadIDMessagesMessageIDAttachmentsIdxGetRequest;

  try {
    const data = await api.v1ThreadsThreadIDMessagesMessageIDAttachmentsIdxGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **threadID** | `string` |  | [Defaults to `undefined`] |
| **messageID** | `string` |  | [Defaults to `undefined`] |
| **idx** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Attachment content (streamed) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ThreadsThreadIDMessagesMessageIDGet

> object v1ThreadsThreadIDMessagesMessageIDGet(threadID, messageID)

Get one message with body

Full text/html body fetched on demand from mail storage. Never marks the message read.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ThreadsThreadIDMessagesMessageIDGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    threadID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    messageID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1ThreadsThreadIDMessagesMessageIDGetRequest;

  try {
    const data = await api.v1ThreadsThreadIDMessagesMessageIDGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **threadID** | `string` |  | [Defaults to `undefined`] |
| **messageID** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message with body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ThreadsThreadIDMessagesMessageIDReadPost

> object v1ThreadsThreadIDMessagesMessageIDReadPost(threadID, messageID)

Mark read/unread

The ONLY way agent access changes unread state. Body: {\&quot;read\&quot;: true|false} (default true).

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ThreadsThreadIDMessagesMessageIDReadPostRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    threadID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    messageID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1ThreadsThreadIDMessagesMessageIDReadPostRequest;

  try {
    const data = await api.v1ThreadsThreadIDMessagesMessageIDReadPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **threadID** | `string` |  | [Defaults to `undefined`] |
| **messageID** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New read state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1ThreadsThreadIDReplyPost

> object v1ThreadsThreadIDReplyPost(threadID, idempotencyKey)

Reply in-thread (agent stream)

The server builds In-Reply-To/References and defaults recipients + subject from the conversation — a minimal call is {\&quot;text\&quot;: \&quot;...\&quot;}. Guarded by the reply-loop detector (≥5 outbound/10min → 429 + agent.loop_detected). Idempotency-Key required.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { V1ThreadsThreadIDReplyPostRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    threadID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    idempotencyKey: idempotencyKey_example,
  } satisfies V1ThreadsThreadIDReplyPostRequest;

  try {
    const data = await api.v1ThreadsThreadIDReplyPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **threadID** | `string` |  | [Defaults to `undefined`] |
| **idempotencyKey** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Queued |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

