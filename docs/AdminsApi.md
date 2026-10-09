# AdminsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AdminsGet**](AdminsApi.md#v1adminsget) | **GET** /v1/admins | List tenant admins |
| [**v1AdminsIdDelete**](AdminsApi.md#v1adminsiddelete) | **DELETE** /v1/admins/{id} | Delete an admin |
| [**v1AdminsIdPatch**](AdminsApi.md#v1adminsidpatchoperation) | **PATCH** /v1/admins/{id} | Update an admin |
| [**v1AdminsPost**](AdminsApi.md#v1adminspostoperation) | **POST** /v1/admins | Invite a new admin |



## v1AdminsGet

> V1AdminsGet200Response v1AdminsGet()

List tenant admins

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { V1AdminsGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminsApi(config);

  try {
    const data = await api.v1AdminsGet();
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

[**V1AdminsGet200Response**](V1AdminsGet200Response.md)

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


## v1AdminsIdDelete

> v1AdminsIdDelete(id)

Delete an admin

Hard-delete. Cascade-drops the admin\&#39;s sessions (immediate revocation). Same safety rails as PATCH disabled&#x3D;true. 

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { V1AdminsIdDeleteRequest } from 'lockally';

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
  } satisfies V1AdminsIdDeleteRequest;

  try {
    const data = await api.v1AdminsIdDelete(body);
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


## v1AdminsIdPatch

> AdminFull v1AdminsIdPatch(id, v1AdminsIdPatchRequest)

Update an admin

Supply at least one of &#x60;password&#x60;, &#x60;display_name&#x60;, &#x60;role&#x60;, &#x60;disabled&#x60;.  **Safety rails.** A session bearer (adm_sess_*) cannot disable itself — use another admin or an API key (which bypasses the self-rail). Disabling the last active admin returns 409 to prevent orphaning the tenant from its console. 

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { V1AdminsIdPatchOperationRequest } from 'lockally';

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
    // V1AdminsIdPatchRequest
    v1AdminsIdPatchRequest: ...,
  } satisfies V1AdminsIdPatchOperationRequest;

  try {
    const data = await api.v1AdminsIdPatch(body);
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
| **v1AdminsIdPatchRequest** | [V1AdminsIdPatchRequest](V1AdminsIdPatchRequest.md) |  | |

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


## v1AdminsPost

> AdminFull v1AdminsPost(v1AdminsPostRequest)

Invite a new admin

Creates a new tenant admin. If &#x60;password&#x60; is omitted, lockally generates a 16-char password and returns it ONCE in the response. Email is case-insensitive and unique per tenant. 

### Example

```ts
import {
  Configuration,
  AdminsApi,
} from 'lockally';
import type { V1AdminsPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminsApi(config);

  const body = {
    // V1AdminsPostRequest
    v1AdminsPostRequest: ...,
  } satisfies V1AdminsPostOperationRequest;

  try {
    const data = await api.v1AdminsPost(body);
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
| **v1AdminsPostRequest** | [V1AdminsPostRequest](V1AdminsPostRequest.md) |  | |

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

