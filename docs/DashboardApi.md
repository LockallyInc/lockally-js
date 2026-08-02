# DashboardApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAuditSummary**](DashboardApi.md#getauditsummary) | **GET** /v1/audit-summary | Audit summary for the dashboard |
| [**getDomainsStatus**](DashboardApi.md#getdomainsstatus) | **GET** /v1/domains/status | Domain health status for the dashboard |
| [**getIntegrationsSummary**](DashboardApi.md#getintegrationssummary) | **GET** /v1/integrations-summary | Integrations summary for the dashboard |
| [**getSecurity**](DashboardApi.md#getsecurity) | **GET** /v1/security | Security overview for the dashboard |
| [**getStorage**](DashboardApi.md#getstorage) | **GET** /v1/storage | Storage usage for the dashboard |
| [**getTenantHealth**](DashboardApi.md#gettenanthealth) | **GET** /v1/health | Full tenant health report |
| [**getUserInsights**](DashboardApi.md#getuserinsights) | **GET** /v1/user-insights | User insights for the dashboard |



## getAuditSummary

> GetAuditSummary200Response getAuditSummary()

Audit summary for the dashboard

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'lockally';
import type { GetAuditSummaryRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.getAuditSummary();
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

[**GetAuditSummary200Response**](GetAuditSummary200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audit summary |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDomainsStatus

> GetDomainsStatus200Response getDomainsStatus()

Domain health status for the dashboard

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'lockally';
import type { GetDomainsStatusRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.getDomainsStatus();
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

[**GetDomainsStatus200Response**](GetDomainsStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domain health status |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIntegrationsSummary

> GetIntegrationsSummary200Response getIntegrationsSummary()

Integrations summary for the dashboard

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'lockally';
import type { GetIntegrationsSummaryRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.getIntegrationsSummary();
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

[**GetIntegrationsSummary200Response**](GetIntegrationsSummary200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Integrations summary |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSecurity

> GetSecurity200Response getSecurity()

Security overview for the dashboard

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'lockally';
import type { GetSecurityRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.getSecurity();
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

[**GetSecurity200Response**](GetSecurity200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Security overview |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStorage

> GetStorage200Response getStorage()

Storage usage for the dashboard

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'lockally';
import type { GetStorageRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.getStorage();
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

[**GetStorage200Response**](GetStorage200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Storage usage |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTenantHealth

> object getTenantHealth()

Full tenant health report

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'lockally';
import type { GetTenantHealthRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.getTenantHealth();
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

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Full tenant health report |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserInsights

> GetUserInsights200Response getUserInsights()

User insights for the dashboard

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from 'lockally';
import type { GetUserInsightsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.getUserInsights();
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

[**GetUserInsights200Response**](GetUserInsights200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User insights |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

