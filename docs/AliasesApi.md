# AliasesApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AliasesAddressDelete**](AliasesApi.md#v1aliasesaddressdelete) | **DELETE** /v1/aliases/{address} | Delete an alias |
| [**v1AliasesGet**](AliasesApi.md#v1aliasesget) | **GET** /v1/aliases | List aliases |
| [**v1AliasesPost**](AliasesApi.md#v1aliasespostoperation) | **POST** /v1/aliases | Create an alias |



## v1AliasesAddressDelete

> v1AliasesAddressDelete(address)

Delete an alias

Hard-delete (no soft-delete window — aliases are cheap to recreate).

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from 'lockally';
import type { V1AliasesAddressDeleteRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AliasesApi(config);

  const body = {
    // string
    address: address_example,
  } satisfies V1AliasesAddressDeleteRequest;

  try {
    const data = await api.v1AliasesAddressDelete(body);
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
| **address** | `string` |  | [Defaults to `undefined`] |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AliasesGet

> V1AliasesGet200Response v1AliasesGet()

List aliases

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from 'lockally';
import type { V1AliasesGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AliasesApi(config);

  try {
    const data = await api.v1AliasesGet();
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

[**V1AliasesGet200Response**](V1AliasesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alias list. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AliasesPost

> Alias v1AliasesPost(v1AliasesPostRequest)

Create an alias

Creates an email alias. &#x60;alias_address&#x60; must be on a verified tenant-owned domain. &#x60;alias_target&#x60; can be any email — intra-tenant or external (forwarding to a Gmail account is a legitimate use). 

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from 'lockally';
import type { V1AliasesPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AliasesApi(config);

  const body = {
    // V1AliasesPostRequest
    v1AliasesPostRequest: ...,
  } satisfies V1AliasesPostOperationRequest;

  try {
    const data = await api.v1AliasesPost(body);
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
| **v1AliasesPostRequest** | [V1AliasesPostRequest](V1AliasesPostRequest.md) |  | |

### Return type

[**Alias**](Alias.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Alias created. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **409** | Alias address already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

