# SendApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1MessagesGet**](SendApi.md#v1messagesget) | **GET** /v1/messages | List outbound messages |
| [**v1MessagesIdDelete**](SendApi.md#v1messagesiddelete) | **DELETE** /v1/messages/{id} | Cancel a scheduled send |
| [**v1MessagesIdGet**](SendApi.md#v1messagesidget) | **GET** /v1/messages/{id} | Get message status |
| [**v1MessagesStatsGet**](SendApi.md#v1messagesstatsget) | **GET** /v1/messages/stats | Aggregate delivery stats |
| [**v1SendBatchPost**](SendApi.md#v1sendbatchpostoperation) | **POST** /v1/send/batch | Send a batch of emails |
| [**v1SendPost**](SendApi.md#v1sendpostoperation) | **POST** /v1/send | Send an email |



## v1MessagesGet

> V1MessagesGet200Response v1MessagesGet(status, sender, q, since, cursor, limit)

List outbound messages

Returns recent outbound messages for the calling tenant, sorted newest first. Backs the send-status pill in the SvelteKit /sends view and the outbound search box. 

### Example

```ts
import {
  Configuration,
  SendApi,
} from 'lockally';
import type { V1MessagesGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendApi(config);

  const body = {
    // 'queued' | 'sending' | 'delivered' | 'bounced' | 'deferred' | 'complaint' (optional)
    status: status_example,
    // string | Exact match against the `from` mailbox. (optional)
    sender: sender_example,
    // string | Free-text search across subject + sender. (optional)
    q: q_example,
    // Date | Only messages queued at or after this RFC 3339 instant. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // string | queued_at of the prior page boundary. Pass back the `next_cursor` returned by the previous call. (optional)
    cursor: cursor_example,
    // number (optional)
    limit: 56,
  } satisfies V1MessagesGetRequest;

  try {
    const data = await api.v1MessagesGet(body);
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
| **status** | `queued`, `sending`, `delivered`, `bounced`, `deferred`, `complaint` |  | [Optional] [Defaults to `undefined`] [Enum: queued, sending, delivered, bounced, deferred, complaint] |
| **sender** | `string` | Exact match against the &#x60;from&#x60; mailbox. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Free-text search across subject + sender. | [Optional] [Defaults to `undefined`] |
| **since** | `Date` | Only messages queued at or after this RFC 3339 instant. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | queued_at of the prior page boundary. Pass back the &#x60;next_cursor&#x60; returned by the previous call. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**V1MessagesGet200Response**](V1MessagesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of messages + optional next-page cursor. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1MessagesIdDelete

> v1MessagesIdDelete(id)

Cancel a scheduled send

Cancels a still-scheduled message (future queued_at). Already sending/sent → 409.

### Example

```ts
import {
  Configuration,
  SendApi,
} from 'lockally';
import type { V1MessagesIdDeleteRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1MessagesIdDeleteRequest;

  try {
    const data = await api.v1MessagesIdDelete(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Cancelled. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Not cancellable (already sending or sent). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1MessagesIdGet

> MessageDetail v1MessagesIdGet(id)

Get message status

### Example

```ts
import {
  Configuration,
  SendApi,
} from 'lockally';
import type { V1MessagesIdGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1MessagesIdGetRequest;

  try {
    const data = await api.v1MessagesIdGet(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**MessageDetail**](MessageDetail.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message record with the content captured at send time. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1MessagesStatsGet

> MessageStats v1MessagesStatsGet(from, to, domain)

Aggregate delivery stats

Counts by delivery outcome (delivered/bounced/deferred/complaint) plus rates over a window, from the delivery-event store. Privacy-first: this reflects what receiving servers reported, NOT whether a human opened the mail — Lockally does no open/click tracking. 

### Example

```ts
import {
  Configuration,
  SendApi,
} from 'lockally';
import type { V1MessagesStatsGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendApi(config);

  const body = {
    // Date | Window start (default 7 days ago). (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date | Window end (default now). (optional)
    to: 2013-10-20T19:20:30+01:00,
    // string | Filter by sender domain. (optional)
    domain: domain_example,
  } satisfies V1MessagesStatsGetRequest;

  try {
    const data = await api.v1MessagesStatsGet(body);
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
| **from** | `Date` | Window start (default 7 days ago). | [Optional] [Defaults to `undefined`] |
| **to** | `Date` | Window end (default now). | [Optional] [Defaults to `undefined`] |
| **domain** | `string` | Filter by sender domain. | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageStats**](MessageStats.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stats. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1SendBatchPost

> V1SendBatchPost200Response v1SendBatchPost(idempotencyKey, v1SendBatchPostRequest)

Send a batch of emails

Sends up to 500 messages in one call. Each is validated and enqueued independently — a bad message fails only its own slot (partial success, HTTP 200). One &#x60;Idempotency-Key&#x60; header covers the batch; per-message keys are derived as &#x60;&lt;key&gt;:&lt;index&gt;&#x60;. 

### Example

```ts
import {
  Configuration,
  SendApi,
} from 'lockally';
import type { V1SendBatchPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendApi(config);

  const body = {
    // string
    idempotencyKey: idempotencyKey_example,
    // V1SendBatchPostRequest
    v1SendBatchPostRequest: ...,
  } satisfies V1SendBatchPostOperationRequest;

  try {
    const data = await api.v1SendBatchPost(body);
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
| **idempotencyKey** | `string` |  | [Defaults to `undefined`] |
| **v1SendBatchPostRequest** | [V1SendBatchPostRequest](V1SendBatchPostRequest.md) |  | |

### Return type

[**V1SendBatchPost200Response**](V1SendBatchPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Per-message results (partial success). |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1SendPost

> V1SendPost202Response v1SendPost(idempotencyKey, v1SendPostRequest)

Send an email

Submits an email for delivery via lockally. Returns 202 immediately once the message is accepted into lockally\&#39;s queue; the actual SMTP submission to the recipient is async. Track delivery via &#x60;GET /v1/messages/{id}&#x60; or webhook subscriptions for &#x60;delivery.delivered&#x60; / &#x60;delivery.bounced&#x60; / &#x60;delivery.complaint&#x60;.  **Idempotency-Key required.** Per design L7 — any unique string per send, 24-hour dedupe window. Repeated calls with the same key return byte-exact the original response and do NOT create a duplicate message.  **Sender authorisation.** &#x60;from&#x60; must be a non-disabled mailbox owned by the calling tenant on a verified domain. Sending from aliases is not yet supported.  **Rate cap.** Per-tenant &#x60;rate_cap_per_min&#x60; (returned on &#x60;/v1/tenant&#x60;) is enforced — 429 with &#x60;Retry-After: 60&#x60; once tripped.  **Recipient warning.** Over 25 total recipients (To+Cc+Bcc) sets a &#x60;warning&#x60; field in the response — large fan-outs queue noticeably at scale. Hard cap is 100/send. 

### Example

```ts
import {
  Configuration,
  SendApi,
} from 'lockally';
import type { V1SendPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendApi(config);

  const body = {
    // string
    idempotencyKey: idempotencyKey_example,
    // V1SendPostRequest
    v1SendPostRequest: ...,
  } satisfies V1SendPostOperationRequest;

  try {
    const data = await api.v1SendPost(body);
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
| **idempotencyKey** | `string` |  | [Defaults to `undefined`] |
| **v1SendPostRequest** | [V1SendPostRequest](V1SendPostRequest.md) |  | |

### Return type

[**V1SendPost202Response**](V1SendPost202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Queued. |  * Idempotent-Replay - \&quot;true\&quot; when the response is replayed from the idempotency cache. <br>  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **429** | Per-tenant rate cap exceeded. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

