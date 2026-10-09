# WebhooksApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1WebhooksGet**](WebhooksApi.md#v1webhooksget) | **GET** /v1/webhooks | List webhooks |
| [**v1WebhooksIdDelete**](WebhooksApi.md#v1webhooksiddelete) | **DELETE** /v1/webhooks/{id} | Delete a webhook |
| [**v1WebhooksIdPatch**](WebhooksApi.md#v1webhooksidpatchoperation) | **PATCH** /v1/webhooks/{id} | Update a webhook |
| [**v1WebhooksPost**](WebhooksApi.md#v1webhookspostoperation) | **POST** /v1/webhooks | Create a webhook |



## v1WebhooksGet

> V1WebhooksGet200Response v1WebhooksGet()

List webhooks

Returns the calling tenant\&#39;s webhook subscriptions. Never returns the signing secret — only metadata. 

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'lockally';
import type { V1WebhooksGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  try {
    const data = await api.v1WebhooksGet();
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

[**V1WebhooksGet200Response**](V1WebhooksGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook list. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1WebhooksIdDelete

> v1WebhooksIdDelete(id)

Delete a webhook

Hard-delete; cascades to &#x60;webhook_deliveries&#x60; history.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'lockally';
import type { V1WebhooksIdDeleteRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V1WebhooksIdDeleteRequest;

  try {
    const data = await api.v1WebhooksIdDelete(body);
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
| **204** | Deleted. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1WebhooksIdPatch

> Webhook v1WebhooksIdPatch(id, v1WebhooksIdPatchRequest)

Update a webhook

Supply at least one of &#x60;url&#x60;, &#x60;events&#x60;, &#x60;paused&#x60;. Setting &#x60;paused&#x60; to &#x60;false&#x60; ALSO resets &#x60;consecutive_failures&#x60; to 0 — re-arms the 50-failure auto-pause counter. 

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'lockally';
import type { V1WebhooksIdPatchOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // V1WebhooksIdPatchRequest
    v1WebhooksIdPatchRequest: ...,
  } satisfies V1WebhooksIdPatchOperationRequest;

  try {
    const data = await api.v1WebhooksIdPatch(body);
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
| **v1WebhooksIdPatchRequest** | [V1WebhooksIdPatchRequest](V1WebhooksIdPatchRequest.md) |  | |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated webhook. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1WebhooksPost

> Webhook v1WebhooksPost(v1WebhooksPostRequest)

Create a webhook

Subscribes a URL to one or more event types. Returns the &#x60;signing_secret&#x60; ONCE in the response — store it immediately. The dispatcher signs every outbound POST per design L3:      X-Lockally-Signature: t&#x3D;&lt;unix&gt;,v1&#x3D;&lt;hex(hmac_sha256(secret, t + \&quot;.\&quot; + body))&gt;  Verify on your end using HMAC-SHA256 with a 5-minute timestamp window (replay protection). A reference verifier ships in [internal/webhook](https://github.com/ucheigwedinma/lockally/blob/main/internal/webhook/sign.go).  Event names: see the [event catalogue](https://github.com/ucheigwedinma/lockally/blob/main/docs/v1-design.md#64-webhook-event-catalogue-v1). 

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'lockally';
import type { V1WebhooksPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // V1WebhooksPostRequest
    v1WebhooksPostRequest: ...,
  } satisfies V1WebhooksPostOperationRequest;

  try {
    const data = await api.v1WebhooksPost(body);
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
| **v1WebhooksPostRequest** | [V1WebhooksPostRequest](V1WebhooksPostRequest.md) |  | |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created. &#x60;signing_secret&#x60; is in the response ONLY here. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

