# MigrationsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelMigration**](MigrationsApi.md#cancelmigration) | **POST** /v1/migrations/{id}/cancel | Cancel a running migration |
| [**checkMigrationDNS**](MigrationsApi.md#checkmigrationdns) | **GET** /v1/migrations/{id}/dns-check | Check DNS readiness for cutover |
| [**createMigration**](MigrationsApi.md#createmigrationoperation) | **POST** /v1/migrations | Create a migration |
| [**createMigrationCredential**](MigrationsApi.md#createmigrationcredentialoperation) | **POST** /v1/migrations/credentials | Store a migration credential |
| [**deleteMigration**](MigrationsApi.md#deletemigration) | **DELETE** /v1/migrations/{id} | Delete a migration |
| [**deleteMigrationCredential**](MigrationsApi.md#deletemigrationcredential) | **DELETE** /v1/migrations/credentials/{id} | Delete a migration credential |
| [**deltaSyncMigration**](MigrationsApi.md#deltasyncmigration) | **POST** /v1/migrations/{id}/delta-sync | Run a delta sync |
| [**discoverMigration**](MigrationsApi.md#discovermigration) | **POST** /v1/migrations/{id}/discover | Discover source mailboxes |
| [**finalSyncMigration**](MigrationsApi.md#finalsyncmigration) | **POST** /v1/migrations/{id}/final-sync | Run the final sync before cutover |
| [**getMigration**](MigrationsApi.md#getmigration) | **GET** /v1/migrations/{id} | Get a migration |
| [**getMigrationProgress**](MigrationsApi.md#getmigrationprogress) | **GET** /v1/migrations/{id}/progress | Get migration progress |
| [**listMigrationCredentials**](MigrationsApi.md#listmigrationcredentials) | **GET** /v1/migrations/credentials | List migration credentials |
| [**listMigrationEvents**](MigrationsApi.md#listmigrationevents) | **GET** /v1/migrations/{id}/events | List migration events |
| [**listMigrationMailboxes**](MigrationsApi.md#listmigrationmailboxes) | **GET** /v1/migrations/{id}/mailboxes | List migration mailboxes |
| [**listMigrations**](MigrationsApi.md#listmigrations) | **GET** /v1/migrations | List migrations |
| [**mapMigration**](MigrationsApi.md#mapmigrationoperation) | **POST** /v1/migrations/{id}/map | Map source to destination mailboxes |
| [**retryMigration**](MigrationsApi.md#retrymigration) | **POST** /v1/migrations/{id}/retry | Retry a failed or cancelled migration |
| [**startMigration**](MigrationsApi.md#startmigration) | **POST** /v1/migrations/{id}/start | Start the migration |
| [**updateMigration**](MigrationsApi.md#updatemigrationoperation) | **PATCH** /v1/migrations/{id} | Update a migration |
| [**updateMigrationMailbox**](MigrationsApi.md#updatemigrationmailboxoperation) | **PATCH** /v1/migrations/{id}/mailboxes/{mbxId} | Update a migration mailbox |
| [**validateMigration**](MigrationsApi.md#validatemigration) | **POST** /v1/migrations/{id}/validate | Validate migrated data |



## cancelMigration

> DiscoverMigration202Response cancelMigration(id)

Cancel a running migration

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { CancelMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CancelMigrationRequest;

  try {
    const data = await api.cancelMigration(body);
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

[**DiscoverMigration202Response**](DiscoverMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration cancelled |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Cannot cancel migration from its current status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## checkMigrationDNS

> object checkMigrationDNS(id)

Check DNS readiness for cutover

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { CheckMigrationDNSRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CheckMigrationDNSRequest;

  try {
    const data = await api.checkMigrationDNS(body);
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

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DNS readiness check results |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createMigration

> Migration createMigration(createMigrationRequest)

Create a migration

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { CreateMigrationOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // CreateMigrationRequest
    createMigrationRequest: ...,
  } satisfies CreateMigrationOperationRequest;

  try {
    const data = await api.createMigration(body);
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
| **createMigrationRequest** | [CreateMigrationRequest](CreateMigrationRequest.md) |  | |

### Return type

[**Migration**](Migration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Migration created |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createMigrationCredential

> MigrationCredential createMigrationCredential(createMigrationCredentialRequest)

Store a migration credential

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { CreateMigrationCredentialOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // CreateMigrationCredentialRequest
    createMigrationCredentialRequest: ...,
  } satisfies CreateMigrationCredentialOperationRequest;

  try {
    const data = await api.createMigrationCredential(body);
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
| **createMigrationCredentialRequest** | [CreateMigrationCredentialRequest](CreateMigrationCredentialRequest.md) |  | |

### Return type

[**MigrationCredential**](MigrationCredential.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Credential stored |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMigration

> deleteMigration(id)

Delete a migration

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { DeleteMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteMigrationRequest;

  try {
    const data = await api.deleteMigration(body);
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
| **204** | Migration deleted |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Can only delete migrations in draft, completed, failed, or cancelled status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMigrationCredential

> deleteMigrationCredential(id)

Delete a migration credential

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { DeleteMigrationCredentialRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteMigrationCredentialRequest;

  try {
    const data = await api.deleteMigrationCredential(body);
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
| **204** | Credential deleted |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deltaSyncMigration

> StartMigration202Response deltaSyncMigration(id)

Run a delta sync

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { DeltaSyncMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeltaSyncMigrationRequest;

  try {
    const data = await api.deltaSyncMigration(body);
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

[**StartMigration202Response**](StartMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Delta sync started |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Migration is not in staged status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## discoverMigration

> DiscoverMigration202Response discoverMigration(id)

Discover source mailboxes

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { DiscoverMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DiscoverMigrationRequest;

  try {
    const data = await api.discoverMigration(body);
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

[**DiscoverMigration202Response**](DiscoverMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Discovery started |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Migration is not in draft status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## finalSyncMigration

> StartMigration202Response finalSyncMigration(id)

Run the final sync before cutover

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { FinalSyncMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies FinalSyncMigrationRequest;

  try {
    const data = await api.finalSyncMigration(body);
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

[**StartMigration202Response**](StartMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Final sync started |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Migration is not in cutover_pending status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMigration

> Migration getMigration(id)

Get a migration

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { GetMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetMigrationRequest;

  try {
    const data = await api.getMigration(body);
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

[**Migration**](Migration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration details |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMigrationProgress

> MigrationProgress getMigrationProgress(id)

Get migration progress

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { GetMigrationProgressRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetMigrationProgressRequest;

  try {
    const data = await api.getMigrationProgress(body);
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

[**MigrationProgress**](MigrationProgress.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration progress |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMigrationCredentials

> ListMigrationCredentials200Response listMigrationCredentials()

List migration credentials

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { ListMigrationCredentialsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  try {
    const data = await api.listMigrationCredentials();
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

[**ListMigrationCredentials200Response**](ListMigrationCredentials200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Credential list |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMigrationEvents

> ListMigrationEvents200Response listMigrationEvents(id)

List migration events

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { ListMigrationEventsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListMigrationEventsRequest;

  try {
    const data = await api.listMigrationEvents(body);
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

[**ListMigrationEvents200Response**](ListMigrationEvents200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration event list |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMigrationMailboxes

> ListMigrationMailboxes200Response listMigrationMailboxes(id)

List migration mailboxes

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { ListMigrationMailboxesRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListMigrationMailboxesRequest;

  try {
    const data = await api.listMigrationMailboxes(body);
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

[**ListMigrationMailboxes200Response**](ListMigrationMailboxes200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration mailbox list |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMigrations

> ListMigrations200Response listMigrations()

List migrations

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { ListMigrationsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  try {
    const data = await api.listMigrations();
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

[**ListMigrations200Response**](ListMigrations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration list |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mapMigration

> DiscoverMigration202Response mapMigration(id, mapMigrationRequest)

Map source to destination mailboxes

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { MapMigrationOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // MapMigrationRequest
    mapMigrationRequest: ...,
  } satisfies MapMigrationOperationRequest;

  try {
    const data = await api.mapMigration(body);
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
| **mapMigrationRequest** | [MapMigrationRequest](MapMigrationRequest.md) |  | |

### Return type

[**DiscoverMigration202Response**](DiscoverMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mappings applied |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retryMigration

> DiscoverMigration202Response retryMigration(id)

Retry a failed or cancelled migration

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { RetryMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RetryMigrationRequest;

  try {
    const data = await api.retryMigration(body);
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

[**DiscoverMigration202Response**](DiscoverMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration retried |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Migration is not in failed or cancelled status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startMigration

> StartMigration202Response startMigration(id)

Start the migration

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { StartMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StartMigrationRequest;

  try {
    const data = await api.startMigration(body);
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

[**StartMigration202Response**](StartMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Migration started |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Migration is not in mapped or pilot_complete status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMigration

> Migration updateMigration(id, updateMigrationRequest)

Update a migration

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { UpdateMigrationOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateMigrationRequest
    updateMigrationRequest: ...,
  } satisfies UpdateMigrationOperationRequest;

  try {
    const data = await api.updateMigration(body);
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
| **updateMigrationRequest** | [UpdateMigrationRequest](UpdateMigrationRequest.md) |  | |

### Return type

[**Migration**](Migration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Migration updated |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMigrationMailbox

> updateMigrationMailbox(id, mbxId, updateMigrationMailboxRequest)

Update a migration mailbox

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { UpdateMigrationMailboxOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    mbxId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateMigrationMailboxRequest
    updateMigrationMailboxRequest: ...,
  } satisfies UpdateMigrationMailboxOperationRequest;

  try {
    const data = await api.updateMigrationMailbox(body);
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
| **mbxId** | `string` |  | [Defaults to `undefined`] |
| **updateMigrationMailboxRequest** | [UpdateMigrationMailboxRequest](UpdateMigrationMailboxRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Mailbox updated |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateMigration

> StartMigration202Response validateMigration(id)

Validate migrated data

### Example

```ts
import {
  Configuration,
  MigrationsApi,
} from 'lockally';
import type { ValidateMigrationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MigrationsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ValidateMigrationRequest;

  try {
    const data = await api.validateMigration(body);
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

[**StartMigration202Response**](StartMigration202Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Validation started |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Migration is not in final_syncing status. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

