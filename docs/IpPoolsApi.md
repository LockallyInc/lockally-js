# IpPoolsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDedicatedIPRequest**](IpPoolsApi.md#creatededicatediprequestoperation) | **POST** /v1/dedicated-ip-requests | Request a dedicated IP |
| [**getIPAssignment**](IpPoolsApi.md#getipassignment) | **GET** /v1/ip-assignment | Get current IP assignment |
| [**listDedicatedIPRequests**](IpPoolsApi.md#listdedicatediprequests) | **GET** /v1/dedicated-ip-requests | List dedicated IP requests |



## createDedicatedIPRequest

> DedicatedIPRequest createDedicatedIPRequest(createDedicatedIPRequestRequest)

Request a dedicated IP

### Example

```ts
import {
  Configuration,
  IpPoolsApi,
} from 'lockally';
import type { CreateDedicatedIPRequestOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IpPoolsApi(config);

  const body = {
    // CreateDedicatedIPRequestRequest
    createDedicatedIPRequestRequest: ...,
  } satisfies CreateDedicatedIPRequestOperationRequest;

  try {
    const data = await api.createDedicatedIPRequest(body);
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
| **createDedicatedIPRequestRequest** | [CreateDedicatedIPRequestRequest](CreateDedicatedIPRequestRequest.md) |  | |

### Return type

[**DedicatedIPRequest**](DedicatedIPRequest.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Dedicated IP request submitted. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **409** | A pending request already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIPAssignment

> GetIPAssignment200Response getIPAssignment()

Get current IP assignment

### Example

```ts
import {
  Configuration,
  IpPoolsApi,
} from 'lockally';
import type { GetIPAssignmentRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IpPoolsApi(config);

  try {
    const data = await api.getIPAssignment();
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

[**GetIPAssignment200Response**](GetIPAssignment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The tenant\&#39;s current outbound IP assignment. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDedicatedIPRequests

> ListDedicatedIPRequests200Response listDedicatedIPRequests()

List dedicated IP requests

### Example

```ts
import {
  Configuration,
  IpPoolsApi,
} from 'lockally';
import type { ListDedicatedIPRequestsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IpPoolsApi(config);

  try {
    const data = await api.listDedicatedIPRequests();
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

[**ListDedicatedIPRequests200Response**](ListDedicatedIPRequests200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dedicated IP request history. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

