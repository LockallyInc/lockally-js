# AliasesApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAlias**](AliasesApi.md#createaliasoperation) | **POST** /v1/aliases | Create an alias |
| [**deleteAlias**](AliasesApi.md#deletealias) | **DELETE** /v1/aliases/{address} | Delete an alias |
| [**listAliases**](AliasesApi.md#listaliases) | **GET** /v1/aliases | List aliases |



## createAlias

> Alias createAlias(createAliasRequest)

Create an alias

Creates an email alias. &#x60;alias_address&#x60; must be on a verified tenant-owned domain and must not be the address of an existing mailbox (live, suspended or deleted). &#x60;alias_target&#x60; must be an active mailbox in the same workspace; forwarding to an address Lockally does not host is not supported. The alias delivers as soon as the call returns. 

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from 'lockally';
import type { CreateAliasOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AliasesApi(config);

  const body = {
    // CreateAliasRequest
    createAliasRequest: ...,
  } satisfies CreateAliasOperationRequest;

  try {
    const data = await api.createAlias(body);
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
| **createAliasRequest** | [CreateAliasRequest](CreateAliasRequest.md) |  | |

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
| **409** | Alias address already exists, or is a mailbox\&#39;s own address. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAlias

> deleteAlias(address)

Delete an alias

Hard-delete (no soft-delete window — aliases are cheap to recreate).

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from 'lockally';
import type { DeleteAliasRequest } from 'lockally';

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
  } satisfies DeleteAliasRequest;

  try {
    const data = await api.deleteAlias(body);
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


## listAliases

> ListAliases200Response listAliases()

List aliases

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from 'lockally';
import type { ListAliasesRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AliasesApi(config);

  try {
    const data = await api.listAliases();
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

[**ListAliases200Response**](ListAliases200Response.md)

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

