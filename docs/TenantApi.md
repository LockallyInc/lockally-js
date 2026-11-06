# TenantApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTenant**](TenantApi.md#gettenant) | **GET** /v1/tenant | Get the calling tenant |
| [**getTrackingPolicy**](TenantApi.md#gettrackingpolicy) | **GET** /v1/tracking | Get the engagement tracking policy |
| [**getUsage**](TenantApi.md#getusage) | **GET** /v1/usage | Usage snapshot |
| [**updateTrackingPolicy**](TenantApi.md#updatetrackingpolicyoperation) | **PUT** /v1/tracking | Update the engagement tracking policy |



## getTenant

> Tenant getTenant()

Get the calling tenant

Returns the tenant the presented API key belongs to.

### Example

```ts
import {
  Configuration,
  TenantApi,
} from 'lockally';
import type { GetTenantRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantApi(config);

  try {
    const data = await api.getTenant();
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

[**Tenant**](Tenant.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant info |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTrackingPolicy

> TrackingPolicy getTrackingPolicy()

Get the engagement tracking policy

Whether open and click tracking are enabled for this account. **Both are off until switched on**, and an account that has never set a policy reads as off rather than as an error.  &#x60;configured&#x60; reports whether this deployment holds a signing secret. Without one no tracking token can be minted or verified, so tracking cannot work however the flags are set, and a caller seeing &#x60;track_opens: true&#x60; with nothing arriving deserves to know why. 

### Example

```ts
import {
  Configuration,
  TenantApi,
} from 'lockally';
import type { GetTrackingPolicyRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantApi(config);

  try {
    const data = await api.getTrackingPolicy();
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

[**TrackingPolicy**](TrackingPolicy.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The policy. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsage

> GetUsage200Response getUsage()

Usage snapshot

Returns the tenant\&#39;s current usage + cap consumption. Designed for poll-based alerting on the integrator side (e.g. \&quot;warn when daily quota is 80% used\&quot;). Computed live on request, so there is no cache, so callers should poll at most once per minute. 

### Example

```ts
import {
  Configuration,
  TenantApi,
} from 'lockally';
import type { GetUsageRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantApi(config);

  try {
    const data = await api.getUsage();
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

[**GetUsage200Response**](GetUsage200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usage snapshot |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTrackingPolicy

> TrackingPolicy updateTrackingPolicy(updateTrackingPolicyRequest)

Update the engagement tracking policy

Enables or disables tracking for the account. Send either flag or both; an omitted flag is left unchanged rather than reset.  **Enabling this changes what Lockally collects about your recipients**, who have no relationship with us. You are the controller for them. What is collected is a user-agent string, a timestamp, and for a click the destination URL: **no IP address**, ever. The change is written to your audit log. 

### Example

```ts
import {
  Configuration,
  TenantApi,
} from 'lockally';
import type { UpdateTrackingPolicyOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantApi(config);

  const body = {
    // UpdateTrackingPolicyRequest
    updateTrackingPolicyRequest: ...,
  } satisfies UpdateTrackingPolicyOperationRequest;

  try {
    const data = await api.updateTrackingPolicy(body);
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
| **updateTrackingPolicyRequest** | [UpdateTrackingPolicyRequest](UpdateTrackingPolicyRequest.md) |  | |

### Return type

[**TrackingPolicy**](TrackingPolicy.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated policy. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

