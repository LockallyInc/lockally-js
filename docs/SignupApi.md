# SignupApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**signup**](SignupApi.md#signupoperation) | **POST** /v1/signup | Sign up a new tenant |



## signup

> V1AdminLoginPost200Response signup(signupRequest)

Sign up a new tenant

### Example

```ts
import {
  Configuration,
  SignupApi,
} from 'lockally';
import type { SignupOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const api = new SignupApi();

  const body = {
    // SignupRequest
    signupRequest: ...,
  } satisfies SignupOperationRequest;

  try {
    const data = await api.signup(body);
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
| **signupRequest** | [SignupRequest](SignupRequest.md) |  | |

### Return type

[**V1AdminLoginPost200Response**](V1AdminLoginPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Tenant created with initial admin and API token. |  -  |
| **400** | Malformed request. |  -  |
| **409** | Slug or email already taken. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

