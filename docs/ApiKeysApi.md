# ApiKeysApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApiKey**](ApiKeysApi.md#createapikeyoperation) | **POST** /v1/api-keys | Create an API key |
| [**listApiKeys**](ApiKeysApi.md#listapikeys) | **GET** /v1/api-keys | List API keys |
| [**revokeApiKey**](ApiKeysApi.md#revokeapikey) | **DELETE** /v1/api-keys/{id} | Revoke an API key |
| [**rotateApiKey**](ApiKeysApi.md#rotateapikeyoperation) | **POST** /v1/api-keys/{id}/rotate | Rotate an API key |
| [**updateApiKey**](ApiKeysApi.md#updateapikeyoperation) | **PATCH** /v1/api-keys/{id} | Update an API key |



## createApiKey

> CreateApiKey201Response createApiKey(createApiKeyRequest)

Create an API key

Provisions a fresh API key for the calling tenant.  **The full &#x60;secret&#x60; is included in this response ONLY**, store it immediately. The cleartext secret is not recoverable from the argon2id hash kept server-side; rotate by creating a new key and revoking the old one. 

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from 'lockally';
import type { CreateApiKeyOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // CreateApiKeyRequest
    createApiKeyRequest: ...,
  } satisfies CreateApiKeyOperationRequest;

  try {
    const data = await api.createApiKey(body);
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
| **createApiKeyRequest** | [CreateApiKeyRequest](CreateApiKeyRequest.md) |  | |

### Return type

[**CreateApiKey201Response**](CreateApiKey201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Key created, &#x60;secret&#x60; is in the response and shown only here. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listApiKeys

> ListApiKeys200Response listApiKeys(sort, order)

List API keys

Returns all API keys (active and revoked) belonging to the calling tenant. The &#x60;secret&#x60; is **never** returned, only prefix + metadata. 

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from 'lockally';
import type { ListApiKeysRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // 'label' | 'created_at' | 'last_used_at' | 'expires_at' | Field to order by. This list holds tens of rows per account, so every column is offered and none needs an index. (optional)
    sort: sort_example,
    // 'asc' | 'desc' | Defaults to desc for the default field and asc for any other. Always tie-broken on id, so the order is total. (optional)
    order: order_example,
  } satisfies ListApiKeysRequest;

  try {
    const data = await api.listApiKeys(body);
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
| **sort** | `label`, `created_at`, `last_used_at`, `expires_at` | Field to order by. This list holds tens of rows per account, so every column is offered and none needs an index. | [Optional] [Defaults to `&#39;created_at&#39;`] [Enum: label, created_at, last_used_at, expires_at] |
| **order** | `asc`, `desc` | Defaults to desc for the default field and asc for any other. Always tie-broken on id, so the order is total. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**ListApiKeys200Response**](ListApiKeys200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key list |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeApiKey

> revokeApiKey(id)

Revoke an API key

Soft-deletes (sets &#x60;revoked_at&#x60;) on the named key. The row stays for audit purposes; the key no longer authenticates.  You **cannot revoke the key currently being used** to make this call, that would lock you out. Use a different &#x60;tenant:admin&#x60; key. 

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from 'lockally';
import type { RevokeApiKeyRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RevokeApiKeyRequest;

  try {
    const data = await api.revokeApiKey(body);
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
| **204** | Revoked. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Refused, key is the one in use for this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateApiKey

> CreateApiKey201Response rotateApiKey(id, rotateApiKeyRequest)

Rotate an API key

Issues a successor key and puts a short expiry on this one, so **both work until the overlap ends**. That window is the point: without it, rotation is revocation with extra steps and every caller has to swap credentials in the same instant.  The successor inherits this key\&#39;s scopes, its label (the label names the integration, and the integration has not changed) and its test flag. Its full &#x60;secret&#x60; is in this response and nowhere else.  The response\&#39;s &#x60;expires_at&#x60; is the **predecessor\&#39;s** deadline, so you can see from the rotation itself how long you have to cut over.  A key that has already been rotated cannot be rotated again: chaining overlaps would leave several live keys for one integration, which is the opposite of the intent. Rotate the successor instead. 

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from 'lockally';
import type { RotateApiKeyOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // RotateApiKeyRequest (optional)
    rotateApiKeyRequest: ...,
  } satisfies RotateApiKeyOperationRequest;

  try {
    const data = await api.rotateApiKey(body);
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
| **rotateApiKeyRequest** | [RotateApiKeyRequest](RotateApiKeyRequest.md) |  | [Optional] |

### Return type

[**CreateApiKey201Response**](CreateApiKey201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The successor key. Its &#x60;secret&#x60; is shown only here; &#x60;expires_at&#x60; is the predecessor\&#39;s deadline. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | The key is revoked, or was already rotated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateApiKey

> APIKey updateApiKey(id, updateApiKeyRequest)

Update an API key

Changes a key\&#39;s label, scopes or expiry in place, without reissuing the secret.  **Every field is optional and absent means unchanged.** Renaming a key does not clear its expiry. For &#x60;expires_at&#x60; there are three distinct requests: omit the field to leave the expiry alone, send a timestamp to set one, and send an explicit &#x60;null&#x60; to remove one.  Scopes are replaced wholesale, not merged. This endpoint does not restrict which scopes you may grant, because &#x60;POST /v1/api-keys&#x60; never has either: a key with &#x60;tenant:admin&#x60; can already mint a key with any scope, so &#x60;tenant:admin&#x60; is root-equivalent for key management.  A revoked key cannot be updated. 

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from 'lockally';
import type { UpdateApiKeyOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateApiKeyRequest
    updateApiKeyRequest: ...,
  } satisfies UpdateApiKeyOperationRequest;

  try {
    const data = await api.updateApiKey(body);
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
| **updateApiKeyRequest** | [UpdateApiKeyRequest](UpdateApiKeyRequest.md) |  | |

### Return type

[**APIKey**](APIKey.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated key. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | The key is revoked and cannot be changed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

