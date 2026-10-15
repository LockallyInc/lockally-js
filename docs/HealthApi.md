# HealthApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthCheck**](HealthApi.md#healthcheck) | **GET** /healthz | Liveness check |



## healthCheck

> HealthCheck200Response healthCheck()

Liveness check

Returns 200 if the process is up and the database pings cleanly. No authentication required.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from 'lockally';
import type { HealthCheckRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthCheck();
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

[**HealthCheck200Response**](HealthCheck200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Healthy |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

