# DistributionListsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDistributionList**](DistributionListsApi.md#createdistributionlistoperation) | **POST** /v1/distribution-lists | Create a distribution list |
| [**deleteDistributionList**](DistributionListsApi.md#deletedistributionlist) | **DELETE** /v1/distribution-lists/{address} | Delete a distribution list |
| [**getDistributionList**](DistributionListsApi.md#getdistributionlist) | **GET** /v1/distribution-lists/{address} | Get a distribution list |
| [**listDistributionLists**](DistributionListsApi.md#listdistributionlists) | **GET** /v1/distribution-lists | List distribution lists |
| [**replaceDistributionListMembers**](DistributionListsApi.md#replacedistributionlistmembersoperation) | **PUT** /v1/distribution-lists/{address}/members | Replace distribution list members |



## createDistributionList

> DistributionListDetail createDistributionList(createDistributionListRequest)

Create a distribution list

### Example

```ts
import {
  Configuration,
  DistributionListsApi,
} from 'lockally';
import type { CreateDistributionListOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DistributionListsApi(config);

  const body = {
    // CreateDistributionListRequest
    createDistributionListRequest: ...,
  } satisfies CreateDistributionListOperationRequest;

  try {
    const data = await api.createDistributionList(body);
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
| **createDistributionListRequest** | [CreateDistributionListRequest](CreateDistributionListRequest.md) |  | |

### Return type

[**DistributionListDetail**](DistributionListDetail.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Distribution list created. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **409** | List address already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDistributionList

> deleteDistributionList(address)

Delete a distribution list

### Example

```ts
import {
  Configuration,
  DistributionListsApi,
} from 'lockally';
import type { DeleteDistributionListRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DistributionListsApi(config);

  const body = {
    // string | Distribution list email address
    address: address_example,
  } satisfies DeleteDistributionListRequest;

  try {
    const data = await api.deleteDistributionList(body);
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
| **address** | `string` | Distribution list email address | [Defaults to `undefined`] |

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


## getDistributionList

> DistributionListDetail getDistributionList(address)

Get a distribution list

### Example

```ts
import {
  Configuration,
  DistributionListsApi,
} from 'lockally';
import type { GetDistributionListRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DistributionListsApi(config);

  const body = {
    // string | Distribution list email address
    address: address_example,
  } satisfies GetDistributionListRequest;

  try {
    const data = await api.getDistributionList(body);
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
| **address** | `string` | Distribution list email address | [Defaults to `undefined`] |

### Return type

[**DistributionListDetail**](DistributionListDetail.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Distribution list with full member list. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDistributionLists

> ListDistributionLists200Response listDistributionLists()

List distribution lists

### Example

```ts
import {
  Configuration,
  DistributionListsApi,
} from 'lockally';
import type { ListDistributionListsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DistributionListsApi(config);

  try {
    const data = await api.listDistributionLists();
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

[**ListDistributionLists200Response**](ListDistributionLists200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | All distribution lists for the tenant. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceDistributionListMembers

> ReplaceDistributionListMembers200Response replaceDistributionListMembers(address, replaceDistributionListMembersRequest)

Replace distribution list members

### Example

```ts
import {
  Configuration,
  DistributionListsApi,
} from 'lockally';
import type { ReplaceDistributionListMembersOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DistributionListsApi(config);

  const body = {
    // string | Distribution list email address
    address: address_example,
    // ReplaceDistributionListMembersRequest
    replaceDistributionListMembersRequest: ...,
  } satisfies ReplaceDistributionListMembersOperationRequest;

  try {
    const data = await api.replaceDistributionListMembers(body);
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
| **address** | `string` | Distribution list email address | [Defaults to `undefined`] |
| **replaceDistributionListMembersRequest** | [ReplaceDistributionListMembersRequest](ReplaceDistributionListMembersRequest.md) |  | |

### Return type

[**ReplaceDistributionListMembers200Response**](ReplaceDistributionListMembers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated member list. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

