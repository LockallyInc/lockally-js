# DraftsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveDraft**](DraftsApi.md#approvedraft) | **POST** /v1/drafts/{draftID}/approve | Approve a pending draft (human) |
| [**cancelDraft**](DraftsApi.md#canceldraft) | **POST** /v1/drafts/{draftID}/cancel | Withdraw a pending draft |
| [**createConversationDraft**](DraftsApi.md#createconversationdraft) | **POST** /v1/inboxes/{mailbox}/drafts | Propose a new conversation as a draft |
| [**createReplyDraft**](DraftsApi.md#createreplydraft) | **POST** /v1/threads/{threadID}/drafts | Propose a reply as a draft |
| [**getDraft**](DraftsApi.md#getdraft) | **GET** /v1/drafts/{draftID} | Get a draft |
| [**listDrafts**](DraftsApi.md#listdrafts) | **GET** /v1/drafts | List drafts |
| [**rejectDraft**](DraftsApi.md#rejectdraft) | **POST** /v1/drafts/{draftID}/reject | Reject a pending draft (human) |



## approveDraft

> DraftResult approveDraft(draftID)

Approve a pending draft (human)

Sends the draft exactly as reviewed, through the agent stream (loop detector included). Fires draft.approved.

### Example

```ts
import {
  Configuration,
  DraftsApi,
} from 'lockally';
import type { ApproveDraftRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DraftsApi(config);

  const body = {
    // string
    draftID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApproveDraftRequest;

  try {
    const data = await api.approveDraft(body);
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
| **draftID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DraftResult**](DraftResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelDraft

> Draft cancelDraft(draftID)

Withdraw a pending draft

Only the API key that created the draft may cancel it.

### Example

```ts
import {
  Configuration,
  DraftsApi,
} from 'lockally';
import type { CancelDraftRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DraftsApi(config);

  const body = {
    // string
    draftID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CancelDraftRequest;

  try {
    const data = await api.cancelDraft(body);
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
| **draftID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Draft**](Draft.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cancelled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createConversationDraft

> DraftResult createConversationDraft(mailbox, idempotencyKey)

Propose a new conversation as a draft

New-conversation drafts ALWAYS require human approval (policy flag new_thread). Idempotency-Key required.

### Example

```ts
import {
  Configuration,
  DraftsApi,
} from 'lockally';
import type { CreateConversationDraftRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DraftsApi(config);

  const body = {
    // string
    mailbox: mailbox_example,
    // string
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateConversationDraftRequest;

  try {
    const data = await api.createConversationDraft(body);
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

### Return type

[**DraftResult**](DraftResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Draft outcome (pending_approval) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createReplyDraft

> DraftResult createReplyDraft(threadID, idempotencyKey)

Propose a reply as a draft

The safe default over /reply: the deterministic policy engine auto-sends clean in-thread replies and holds anything risky (PII, new recipients, injection-flagged threads, always-approve mailboxes) for human approval. Fires draft.pending_approval when held. Idempotency-Key required.

### Example

```ts
import {
  Configuration,
  DraftsApi,
} from 'lockally';
import type { CreateReplyDraftRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DraftsApi(config);

  const body = {
    // string
    threadID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateReplyDraftRequest;

  try {
    const data = await api.createReplyDraft(body);
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

[**DraftResult**](DraftResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Outcome (sent | pending_approval) with policy_flags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDraft

> Draft getDraft(draftID)

Get a draft

### Example

```ts
import {
  Configuration,
  DraftsApi,
} from 'lockally';
import type { GetDraftRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DraftsApi(config);

  const body = {
    // string
    draftID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDraftRequest;

  try {
    const data = await api.getDraft(body);
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
| **draftID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Draft**](Draft.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Draft |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDrafts

> DraftList listDrafts(status, limit)

List drafts

Filter with ?status&#x3D;pending_approval|sent|rejected|cancelled. Keys see drafts of granted mailboxes; admin sessions see all.

### Example

```ts
import {
  Configuration,
  DraftsApi,
} from 'lockally';
import type { ListDraftsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DraftsApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // number (optional)
    limit: 56,
  } satisfies ListDraftsRequest;

  try {
    const data = await api.listDrafts(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**DraftList**](DraftList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Drafts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rejectDraft

> Draft rejectDraft(draftID)

Reject a pending draft (human)

Body: {\&quot;reason\&quot;: \&quot;...\&quot;} (optional). Fires draft.rejected.

### Example

```ts
import {
  Configuration,
  DraftsApi,
} from 'lockally';
import type { RejectDraftRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DraftsApi(config);

  const body = {
    // string
    draftID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RejectDraftRequest;

  try {
    const data = await api.rejectDraft(body);
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
| **draftID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Draft**](Draft.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rejected |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

