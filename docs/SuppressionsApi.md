# SuppressionsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSuppression**](SuppressionsApi.md#createsuppressionoperation) | **POST** /v1/suppressions | Add a suppression |
| [**deleteSuppression**](SuppressionsApi.md#deletesuppression) | **DELETE** /v1/suppressions/{email} | Remove a suppression |
| [**getSuppression**](SuppressionsApi.md#getsuppression) | **GET** /v1/suppressions/{email} | Check whether an address is suppressed |
| [**listSuppressions**](SuppressionsApi.md#listsuppressions) | **GET** /v1/suppressions | List suppressed recipients |



## createSuppression

> Suppression createSuppression(createSuppressionRequest)

Add a suppression

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { CreateSuppressionOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // CreateSuppressionRequest
    createSuppressionRequest: ...,
  } satisfies CreateSuppressionOperationRequest;

  try {
    const data = await api.createSuppression(body);
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
| **createSuppressionRequest** | [CreateSuppressionRequest](CreateSuppressionRequest.md) |  | |

### Return type

[**Suppression**](Suppression.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Added. |  -  |
| **400** | Malformed request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSuppression

> deleteSuppression(email)

Remove a suppression

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { DeleteSuppressionRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies DeleteSuppressionRequest;

  try {
    const data = await api.deleteSuppression(body);
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

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Removed. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSuppression

> Suppression getSuppression(email)

Check whether an address is suppressed

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { GetSuppressionRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies GetSuppressionRequest;

  try {
    const data = await api.getSuppression(body);
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

[**Suppression**](Suppression.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppressed. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSuppressions

> ListSuppressions200Response listSuppressions(reason, cursor, limit)

List suppressed recipients

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { ListSuppressionsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // 'unsubscribe' | 'complaint' | 'bounce' | 'manual' (optional)
    reason: reason_example,
    // string (optional)
    cursor: cursor_example,
    // number (optional)
    limit: 56,
  } satisfies ListSuppressionsRequest;

  try {
    const data = await api.listSuppressions(body);
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
| **reason** | `unsubscribe`, `complaint`, `bounce`, `manual` |  | [Optional] [Defaults to `undefined`] [Enum: unsubscribe, complaint, bounce, manual] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**ListSuppressions200Response**](ListSuppressions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppressions. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

