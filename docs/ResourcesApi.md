# ResourcesApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createResource**](ResourcesApi.md#createresourceoperation) | **POST** /v1/resources | Create a resource |
| [**deleteResource**](ResourcesApi.md#deleteresource) | **DELETE** /v1/resources/{id} | Delete a resource |
| [**getResource**](ResourcesApi.md#getresource) | **GET** /v1/resources/{id} | Get a resource |
| [**listResources**](ResourcesApi.md#listresources) | **GET** /v1/resources | List resources |
| [**updateResource**](ResourcesApi.md#updateresourceoperation) | **PATCH** /v1/resources/{id} | Update a resource |



## createResource

> Resource createResource(createResourceRequest)

Create a resource

### Example

```ts
import {
  Configuration,
  ResourcesApi,
} from 'lockally';
import type { CreateResourceOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ResourcesApi(config);

  const body = {
    // CreateResourceRequest
    createResourceRequest: ...,
  } satisfies CreateResourceOperationRequest;

  try {
    const data = await api.createResource(body);
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
| **createResourceRequest** | [CreateResourceRequest](CreateResourceRequest.md) |  | |

### Return type

[**Resource**](Resource.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Resource created |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteResource

> deleteResource(id)

Delete a resource

### Example

```ts
import {
  Configuration,
  ResourcesApi,
} from 'lockally';
import type { DeleteResourceRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ResourcesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteResourceRequest;

  try {
    const data = await api.deleteResource(body);
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
| **204** | No content |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getResource

> Resource getResource(id)

Get a resource

### Example

```ts
import {
  Configuration,
  ResourcesApi,
} from 'lockally';
import type { GetResourceRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ResourcesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetResourceRequest;

  try {
    const data = await api.getResource(body);
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

[**Resource**](Resource.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resource details |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listResources

> ListResources200Response listResources()

List resources

### Example

```ts
import {
  Configuration,
  ResourcesApi,
} from 'lockally';
import type { ListResourcesRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ResourcesApi(config);

  try {
    const data = await api.listResources();
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

[**ListResources200Response**](ListResources200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of resources |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateResource

> Resource updateResource(id, updateResourceRequest)

Update a resource

### Example

```ts
import {
  Configuration,
  ResourcesApi,
} from 'lockally';
import type { UpdateResourceOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ResourcesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateResourceRequest
    updateResourceRequest: ...,
  } satisfies UpdateResourceOperationRequest;

  try {
    const data = await api.updateResource(body);
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
| **updateResourceRequest** | [UpdateResourceRequest](UpdateResourceRequest.md) |  | |

### Return type

[**Resource**](Resource.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resource updated |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

