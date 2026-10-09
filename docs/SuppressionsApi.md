# SuppressionsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1SuppressionsEmailDelete**](SuppressionsApi.md#v1suppressionsemaildelete) | **DELETE** /v1/suppressions/{email} | Remove a suppression |
| [**v1SuppressionsEmailGet**](SuppressionsApi.md#v1suppressionsemailget) | **GET** /v1/suppressions/{email} | Check whether an address is suppressed |
| [**v1SuppressionsGet**](SuppressionsApi.md#v1suppressionsget) | **GET** /v1/suppressions | List suppressed recipients |
| [**v1SuppressionsPost**](SuppressionsApi.md#v1suppressionspostoperation) | **POST** /v1/suppressions | Add a suppression |



## v1SuppressionsEmailDelete

> v1SuppressionsEmailDelete(email)

Remove a suppression

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { V1SuppressionsEmailDeleteRequest } from 'lockally';

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
  } satisfies V1SuppressionsEmailDeleteRequest;

  try {
    const data = await api.v1SuppressionsEmailDelete(body);
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


## v1SuppressionsEmailGet

> Suppression v1SuppressionsEmailGet(email)

Check whether an address is suppressed

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { V1SuppressionsEmailGetRequest } from 'lockally';

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
  } satisfies V1SuppressionsEmailGetRequest;

  try {
    const data = await api.v1SuppressionsEmailGet(body);
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


## v1SuppressionsGet

> V1SuppressionsGet200Response v1SuppressionsGet(reason, cursor, limit)

List suppressed recipients

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { V1SuppressionsGetRequest } from 'lockally';

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
  } satisfies V1SuppressionsGetRequest;

  try {
    const data = await api.v1SuppressionsGet(body);
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

[**V1SuppressionsGet200Response**](V1SuppressionsGet200Response.md)

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


## v1SuppressionsPost

> Suppression v1SuppressionsPost(v1SuppressionsPostRequest)

Add a suppression

### Example

```ts
import {
  Configuration,
  SuppressionsApi,
} from 'lockally';
import type { V1SuppressionsPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionsApi(config);

  const body = {
    // V1SuppressionsPostRequest
    v1SuppressionsPostRequest: ...,
  } satisfies V1SuppressionsPostOperationRequest;

  try {
    const data = await api.v1SuppressionsPost(body);
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
| **v1SuppressionsPostRequest** | [V1SuppressionsPostRequest](V1SuppressionsPostRequest.md) |  | |

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

