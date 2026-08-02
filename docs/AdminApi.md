# AdminApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AdminLoginPost**](AdminApi.md#v1adminloginpostoperation) | **POST** /v1/admin/login | Tenant-admin email+password login |
| [**v1AdminLogoutPost**](AdminApi.md#v1adminlogoutpost) | **POST** /v1/admin/logout | Invalidate the current admin session |
| [**v1AdminMeGet**](AdminApi.md#v1adminmeget) | **GET** /v1/admin/me | Get the current admin + tenant |



## v1AdminLoginPost

> V1AdminLoginPost200Response v1AdminLoginPost(v1AdminLoginPostRequest)

Tenant-admin email+password login

Exchanges an admin\&#39;s email + password for a session token. The web console at &#x60;app.lockally.com&#x60; posts this on form submission and stores the returned token in an httpOnly cookie.  **No enumeration leak.** Wrong-email and wrong-password both return the same 401 with title \&quot;Invalid credentials\&quot;. The argon2id verify runs even on lookup miss (well, structurally — the lookup fails fast but the response shape is constant) so timing leaks are bounded.  Tokens are prefixed &#x60;adm_sess_&#x60; and valid for 7 days. Use as the &#x60;Authorization: Bearer&#x60; value on all subsequent calls. 

### Example

```ts
import {
  Configuration,
  AdminApi,
} from 'lockally';
import type { V1AdminLoginPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const api = new AdminApi();

  const body = {
    // V1AdminLoginPostRequest
    v1AdminLoginPostRequest: ...,
  } satisfies V1AdminLoginPostOperationRequest;

  try {
    const data = await api.v1AdminLoginPost(body);
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
| **v1AdminLoginPostRequest** | [V1AdminLoginPostRequest](V1AdminLoginPostRequest.md) |  | |

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
| **200** | Authenticated. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AdminLogoutPost

> v1AdminLogoutPost()

Invalidate the current admin session

Deletes the session row from the database. Idempotent — calling logout on an already-invalid token returns 204 anyway. 

### Example

```ts
import {
  Configuration,
  AdminApi,
} from 'lockally';
import type { V1AdminLogoutPostRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

  try {
    const data = await api.v1AdminLogoutPost();
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

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Logged out. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AdminMeGet

> V1AdminMeGet200Response v1AdminMeGet()

Get the current admin + tenant

Returns the admin profile + tenant for the session token presented in &#x60;Authorization: Bearer&#x60;. Used by the web console\&#39;s layout load function to populate the sidebar.  Returns 403 if called with an API key (lk_live_*) bearer — admin context only exists for session tokens. 

### Example

```ts
import {
  Configuration,
  AdminApi,
} from 'lockally';
import type { V1AdminMeGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

  try {
    const data = await api.v1AdminMeGet();
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

[**V1AdminMeGet200Response**](V1AdminMeGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Admin + tenant. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

