# AddOnsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateAddOn**](AddOnsApi.md#activateaddon) | **POST** /v1/add-ons/{name}/activate | Activate an add-on |
| [**cancelAddOn**](AddOnsApi.md#canceladdon) | **POST** /v1/add-ons/{name}/cancel | Cancel an add-on |
| [**getAddOnStatus**](AddOnsApi.md#getaddonstatus) | **GET** /v1/add-ons/{name} | Get add-on status |
| [**listAddOns**](AddOnsApi.md#listaddons) | **GET** /v1/add-ons | List add-ons |



## activateAddOn

> ActivateAddOn200Response activateAddOn(name)

Activate an add-on

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from 'lockally';
import type { ActivateAddOnRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // string | Add-on key
    name: name_example,
  } satisfies ActivateAddOnRequest;

  try {
    const data = await api.activateAddOn(body);
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
| **name** | `string` | Add-on key | [Defaults to `undefined`] |

### Return type

[**ActivateAddOn200Response**](ActivateAddOn200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Add-on activated. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelAddOn

> cancelAddOn(name)

Cancel an add-on

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from 'lockally';
import type { CancelAddOnRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // string | Add-on key
    name: name_example,
  } satisfies CancelAddOnRequest;

  try {
    const data = await api.cancelAddOn(body);
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
| **name** | `string` | Add-on key | [Defaults to `undefined`] |

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
| **204** | No content |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAddOnStatus

> GetAddOnStatus200Response getAddOnStatus(name)

Get add-on status

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from 'lockally';
import type { GetAddOnStatusRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // string | Add-on key
    name: name_example,
  } satisfies GetAddOnStatusRequest;

  try {
    const data = await api.getAddOnStatus(body);
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
| **name** | `string` | Add-on key | [Defaults to `undefined`] |

### Return type

[**GetAddOnStatus200Response**](GetAddOnStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Add-on eligibility and activation state. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAddOns

> ListAddOns200Response listAddOns()

List add-ons

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from 'lockally';
import type { ListAddOnsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AddOnsApi(config);

  try {
    const data = await api.listAddOns();
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

[**ListAddOns200Response**](ListAddOns200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Available add-ons and their activation state. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

