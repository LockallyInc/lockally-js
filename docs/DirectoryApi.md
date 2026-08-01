# DirectoryApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDirectoryActivity**](DirectoryApi.md#getdirectoryactivity) | **GET** /v1/directory-activity | Get recent directory activity |
| [**getDirectoryPermissions**](DirectoryApi.md#getdirectorypermissions) | **GET** /v1/directory-permissions | Get directory permission settings |
| [**getDirectoryStats**](DirectoryApi.md#getdirectorystats) | **GET** /v1/directory-stats | Get directory statistics |
| [**getGALSettings**](DirectoryApi.md#getgalsettings) | **GET** /v1/gal-settings | Get Global Address List settings |
| [**rebuildGALIndex**](DirectoryApi.md#rebuildgalindex) | **POST** /v1/gal-settings/rebuild-index | Rebuild the GAL search index |
| [**syncGAL**](DirectoryApi.md#syncgal) | **POST** /v1/gal-settings/sync | Sync GAL with external directory sources |
| [**updateDirectoryPermissions**](DirectoryApi.md#updatedirectorypermissionsoperation) | **PATCH** /v1/directory-permissions | Update directory permission settings |
| [**updateGALSettings**](DirectoryApi.md#updategalsettingsoperation) | **PATCH** /v1/gal-settings | Update GAL settings |



## getDirectoryActivity

> GetDirectoryActivity200Response getDirectoryActivity()

Get recent directory activity

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { GetDirectoryActivityRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  try {
    const data = await api.getDirectoryActivity();
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

[**GetDirectoryActivity200Response**](GetDirectoryActivity200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recent directory activity |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDirectoryPermissions

> DirectoryPermissions getDirectoryPermissions()

Get directory permission settings

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { GetDirectoryPermissionsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  try {
    const data = await api.getDirectoryPermissions();
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

[**DirectoryPermissions**](DirectoryPermissions.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Directory permissions |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDirectoryStats

> GetDirectoryStats200Response getDirectoryStats()

Get directory statistics

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { GetDirectoryStatsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  try {
    const data = await api.getDirectoryStats();
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

[**GetDirectoryStats200Response**](GetDirectoryStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Directory statistics |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGALSettings

> GALSettings getGALSettings()

Get Global Address List settings

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { GetGALSettingsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  try {
    const data = await api.getGALSettings();
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

[**GALSettings**](GALSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GAL settings |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rebuildGALIndex

> GALSettings rebuildGALIndex()

Rebuild the GAL search index

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { RebuildGALIndexRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  try {
    const data = await api.rebuildGALIndex();
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

[**GALSettings**](GALSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GAL settings after index rebuild |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncGAL

> GALSettings syncGAL()

Sync GAL with external directory sources

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { SyncGALRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  try {
    const data = await api.syncGAL();
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

[**GALSettings**](GALSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GAL settings after sync |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDirectoryPermissions

> DirectoryPermissions updateDirectoryPermissions(updateDirectoryPermissionsRequest)

Update directory permission settings

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { UpdateDirectoryPermissionsOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  const body = {
    // UpdateDirectoryPermissionsRequest
    updateDirectoryPermissionsRequest: ...,
  } satisfies UpdateDirectoryPermissionsOperationRequest;

  try {
    const data = await api.updateDirectoryPermissions(body);
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
| **updateDirectoryPermissionsRequest** | [UpdateDirectoryPermissionsRequest](UpdateDirectoryPermissionsRequest.md) |  | |

### Return type

[**DirectoryPermissions**](DirectoryPermissions.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Directory permissions updated |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGALSettings

> GALSettings updateGALSettings(updateGALSettingsRequest)

Update GAL settings

### Example

```ts
import {
  Configuration,
  DirectoryApi,
} from 'lockally';
import type { UpdateGALSettingsOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DirectoryApi(config);

  const body = {
    // UpdateGALSettingsRequest
    updateGALSettingsRequest: ...,
  } satisfies UpdateGALSettingsOperationRequest;

  try {
    const data = await api.updateGALSettings(body);
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
| **updateGALSettingsRequest** | [UpdateGALSettingsRequest](UpdateGALSettingsRequest.md) |  | |

### Return type

[**GALSettings**](GALSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GAL settings updated |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

