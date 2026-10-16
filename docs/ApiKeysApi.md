# ApiKeysApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApiKey**](ApiKeysApi.md#createapikeyoperation) | **POST** /v1/api-keys | Create an API key |
| [**listApiKeys**](ApiKeysApi.md#listapikeys) | **GET** /v1/api-keys | List API keys |
| [**revokeApiKey**](ApiKeysApi.md#revokeapikey) | **DELETE** /v1/api-keys/{id} | Revoke an API key |



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

> ListApiKeys200Response listApiKeys()

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

  try {
    const data = await api.listApiKeys();
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

