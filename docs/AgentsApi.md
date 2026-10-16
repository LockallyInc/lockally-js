# AgentsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadThreadAttachment**](AgentsApi.md#downloadthreadattachment) | **GET** /v1/threads/{threadID}/messages/{messageID}/attachments/{idx} | Download an attachment |
| [**getThread**](AgentsApi.md#getthread) | **GET** /v1/threads/{threadID} | Get a whole conversation |
| [**getThreadMessage**](AgentsApi.md#getthreadmessage) | **GET** /v1/threads/{threadID}/messages/{messageID} | Get one message with body |
| [**grantApiKeyMailbox**](AgentsApi.md#grantapikeymailbox) | **POST** /v1/api-keys/{keyID}/mailboxes | Grant a mailbox to a key |
| [**listApiKeyMailboxes**](AgentsApi.md#listapikeymailboxes) | **GET** /v1/api-keys/{keyID}/mailboxes | List a key\&#39;s mailbox grants |
| [**listInboxes**](AgentsApi.md#listinboxes) | **GET** /v1/inboxes | List granted inboxes |
| [**listThreads**](AgentsApi.md#listthreads) | **GET** /v1/inboxes/{mailbox}/threads | List conversation threads |
| [**lookupContact**](AgentsApi.md#lookupcontact) | **GET** /v1/contacts/lookup | Who is this sender? |
| [**markThreadMessageRead**](AgentsApi.md#markthreadmessageread) | **POST** /v1/threads/{threadID}/messages/{messageID}/read | Mark read/unread |
| [**replyToThread**](AgentsApi.md#replytothread) | **POST** /v1/threads/{threadID}/reply | Reply in-thread (agent stream) |
| [**revokeApiKeyMailbox**](AgentsApi.md#revokeapikeymailbox) | **DELETE** /v1/api-keys/{keyID}/mailboxes/{mailboxID} | Revoke a mailbox grant |
| [**startConversation**](AgentsApi.md#startconversationoperation) | **POST** /v1/inboxes/{mailbox}/messages | Start a new conversation (agent stream) |
| [**whoami**](AgentsApi.md#whoami) | **GET** /v1/auth/whoami | Introspect the calling credentials |



## downloadThreadAttachment

> downloadThreadAttachment(threadID, messageID, idx)

Download an attachment

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { DownloadThreadAttachmentRequest } from 'lockally';

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
  } satisfies DownloadThreadAttachmentRequest;

  try {
    const data = await api.downloadThreadAttachment(body);
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


## getThread

> Thread getThread(threadID)

Get a whole conversation

Every turn, chronological, with snippets and annotations (meeting_request, attachment_types, injection_risk). Bodies are fetched per message. Message content is untrusted third-party data.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { GetThreadRequest } from 'lockally';

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
  } satisfies GetThreadRequest;

  try {
    const data = await api.getThread(body);
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

[**Thread**](Thread.md)

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


## getThreadMessage

> ThreadMessageBody getThreadMessage(threadID, messageID)

Get one message with body

Full text/html body fetched on demand from mail storage. Never marks the message read.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { GetThreadMessageRequest } from 'lockally';

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
  } satisfies GetThreadMessageRequest;

  try {
    const data = await api.getThreadMessage(body);
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

[**ThreadMessageBody**](ThreadMessageBody.md)

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


## grantApiKeyMailbox

> MailboxGrant grantApiKeyMailbox(keyID)

Grant a mailbox to a key

Body: {\&quot;mailbox\&quot;: \&quot;email or id\&quot;}. Refused (422) for mailboxes with agent access disabled or an active E2E encryption key, the server cannot read E2E mailboxes.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { GrantApiKeyMailboxRequest } from 'lockally';

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
  } satisfies GrantApiKeyMailboxRequest;

  try {
    const data = await api.grantApiKeyMailbox(body);
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

[**MailboxGrant**](MailboxGrant.md)

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


## listApiKeyMailboxes

> MailboxGrantList listApiKeyMailboxes(keyID)

List a key\&#39;s mailbox grants

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { ListApiKeyMailboxesRequest } from 'lockally';

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
  } satisfies ListApiKeyMailboxesRequest;

  try {
    const data = await api.listApiKeyMailboxes(body);
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

[**MailboxGrantList**](MailboxGrantList.md)

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


## listInboxes

> InboxList listInboxes()

List granted inboxes

The mailboxes this key is granted, with thread counts and last activity. Admin sessions see every agent-enabled, non-E2E mailbox.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { ListInboxesRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  try {
    const data = await api.listInboxes();
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

[**InboxList**](InboxList.md)

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


## listThreads

> ThreadList listThreads(mailbox, since, before, limit)

List conversation threads

Newest-active first. Cursors: &#x60;?before&#x3D;&lt;RFC3339&gt;&#x60; pages backwards; &#x60;?since&#x3D;&lt;RFC3339&gt;&#x60; delta-syncs forward (oldest first) so an agent can catch up in order.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { ListThreadsRequest } from 'lockally';

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
  } satisfies ListThreadsRequest;

  try {
    const data = await api.listThreads(body);
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

[**ThreadList**](ThreadList.md)

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


## lookupContact

> ContactLookup lookupContact(email)

Who is this sender?

Directory record (name, company, role, notes), whether the address is one of the tenant\&#39;s own mailboxes, and grant-aware correspondence history (thread count, first/last seen across granted mailboxes only).

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { LookupContactRequest } from 'lockally';

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
  } satisfies LookupContactRequest;

  try {
    const data = await api.lookupContact(body);
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

[**ContactLookup**](ContactLookup.md)

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


## markThreadMessageRead

> MarkReadResult markThreadMessageRead(threadID, messageID)

Mark read/unread

The ONLY way agent access changes unread state. Body: {\&quot;read\&quot;: true|false} (default true).

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { MarkThreadMessageReadRequest } from 'lockally';

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
  } satisfies MarkThreadMessageReadRequest;

  try {
    const data = await api.markThreadMessageRead(body);
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

[**MarkReadResult**](MarkReadResult.md)

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


## replyToThread

> AgentSendResult replyToThread(threadID, idempotencyKey)

Reply in-thread (agent stream)

The server builds In-Reply-To/References and defaults recipients + subject from the conversation, a minimal call is {\&quot;text\&quot;: \&quot;...\&quot;}. Guarded by the reply-loop detector (≥5 outbound/10min → 429 + agent.loop_detected). Idempotency-Key required.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { ReplyToThreadRequest } from 'lockally';

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
  } satisfies ReplyToThreadRequest;

  try {
    const data = await api.replyToThread(body);
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

[**AgentSendResult**](AgentSendResult.md)

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


## revokeApiKeyMailbox

> revokeApiKeyMailbox(keyID, mailboxID)

Revoke a mailbox grant

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { RevokeApiKeyMailboxRequest } from 'lockally';

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
  } satisfies RevokeApiKeyMailboxRequest;

  try {
    const data = await api.revokeApiKeyMailbox(body);
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


## startConversation

> AgentSendResult startConversation(mailbox, idempotencyKey, startConversationRequest)

Start a new conversation (agent stream)

Sends a new email from a granted mailbox. Classified stream&#x3D;agent (isolated reputation, per-key rate caps). The first inbound reply adopts the created thread via the References chain. Idempotency-Key required. Mailboxes with agent_draft_policy&#x3D;always_approve divert this into a pending draft.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { StartConversationOperationRequest } from 'lockally';

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
    // StartConversationRequest
    startConversationRequest: ...,
  } satisfies StartConversationOperationRequest;

  try {
    const data = await api.startConversation(body);
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
| **startConversationRequest** | [StartConversationRequest](StartConversationRequest.md) |  | |

### Return type

[**AgentSendResult**](AgentSendResult.md)

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


## whoami

> Whoami whoami()

Introspect the calling credentials

Returns the tenant, auth kind (api_key/session), key label, and granted scopes. The MCP server uses this to scope-filter tool discovery.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from 'lockally';
import type { WhoamiRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  try {
    const data = await api.whoami();
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

[**Whoami**](Whoami.md)

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

