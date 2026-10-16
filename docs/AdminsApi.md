# AdminsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAdmin**](AdminsApi.md#deleteadmin) | **DELETE** /v1/admins/{id} | Delete an admin |
| [**inviteAdmin**](AdminsApi.md#inviteadminoperation) | **POST** /v1/admins | Invite a new admin |
| [**listAdmins**](AdminsApi.md#listadmins) | **GET** /v1/admins | List tenant admins |
| [**updateAdmin**](AdminsApi.md#updateadminoperation) | **PATCH** /v1/admins/{id} | Update an admin |



## deleteAdmin

> deleteAdmin(id)

Delete an admin

Hard-delete. Cascade-drops the admin\&#39;s sessions (immediate revocation). Same safety rails as PATCH disabled&#x3D;true. 

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { DeleteAdminRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteAdminRequest;

  try {
    const data = await api.deleteAdmin(body);
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
| **204** | Deleted. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Self-delete on session bearer, or last-admin safeguard. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## inviteAdmin

> AdminFull inviteAdmin(inviteAdminRequest)

Invite a new admin

Creates a new tenant admin. If &#x60;password&#x60; is omitted, lockally generates a 16-char password and returns it ONCE in the response. Email is case-insensitive and unique per tenant. 

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { InviteAdminOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminsApi(config);

  const body = {
    // InviteAdminRequest
    inviteAdminRequest: ...,
  } satisfies InviteAdminOperationRequest;

  try {
    const data = await api.inviteAdmin(body);
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
| **inviteAdminRequest** | [InviteAdminRequest](InviteAdminRequest.md) |  | |

### Return type

[**AdminFull**](AdminFull.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created. &#x60;password&#x60; populated ONLY if generated. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **409** | Email already an admin on this tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAdmins

> ListAdmins200Response listAdmins()

List tenant admins

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { ListAdminsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminsApi(config);

  try {
    const data = await api.listAdmins();
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

[**ListAdmins200Response**](ListAdmins200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Admin list. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAdmin

> AdminFull updateAdmin(id, updateAdminRequest)

Update an admin

Supply at least one of &#x60;password&#x60;, &#x60;display_name&#x60;, &#x60;role&#x60;, &#x60;disabled&#x60;.  **Safety rails.** A session bearer (adm_sess_*) cannot disable itself, use another admin or an API key (which bypasses the self-rail). Disabling the last active admin returns 409 to prevent orphaning the tenant from its console. 

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { UpdateAdminOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateAdminRequest
    updateAdminRequest: ...,
  } satisfies UpdateAdminOperationRequest;

  try {
    const data = await api.updateAdmin(body);
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
| **updateAdminRequest** | [UpdateAdminRequest](UpdateAdminRequest.md) |  | |

### Return type

[**AdminFull**](AdminFull.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated admin. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Self-disable on session bearer, or last-admin safeguard. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

