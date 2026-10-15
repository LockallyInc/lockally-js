# BillingApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBillingCheckout**](BillingApi.md#createbillingcheckoutoperation) | **POST** /v1/billing/checkout | Create a plan checkout session |
| [**createUnitsCheckout**](BillingApi.md#createunitscheckoutoperation) | **POST** /v1/billing/units/checkout | Create a send-units checkout session |
| [**getBilling**](BillingApi.md#getbilling) | **GET** /v1/billing | Get billing status |



## createBillingCheckout

> CreateBillingCheckout200Response createBillingCheckout(createBillingCheckoutRequest)

Create a plan checkout session

### Example

```ts
import {
  Configuration,
  BillingApi,
} from 'lockally';
import type { CreateBillingCheckoutOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  const body = {
    // CreateBillingCheckoutRequest
    createBillingCheckoutRequest: ...,
  } satisfies CreateBillingCheckoutOperationRequest;

  try {
    const data = await api.createBillingCheckout(body);
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
| **createBillingCheckoutRequest** | [CreateBillingCheckoutRequest](CreateBillingCheckoutRequest.md) |  | |

### Return type

[**CreateBillingCheckout200Response**](CreateBillingCheckout200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout URL for payment. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUnitsCheckout

> CreateUnitsCheckout200Response createUnitsCheckout(createUnitsCheckoutRequest)

Create a send-units checkout session

### Example

```ts
import {
  Configuration,
  BillingApi,
} from 'lockally';
import type { CreateUnitsCheckoutOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  const body = {
    // CreateUnitsCheckoutRequest
    createUnitsCheckoutRequest: ...,
  } satisfies CreateUnitsCheckoutOperationRequest;

  try {
    const data = await api.createUnitsCheckout(body);
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
| **createUnitsCheckoutRequest** | [CreateUnitsCheckoutRequest](CreateUnitsCheckoutRequest.md) |  | |

### Return type

[**CreateUnitsCheckout200Response**](CreateUnitsCheckout200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout URL for the selected unit bundle. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **503** | Service is temporarily unable to handle the request (e.g. database unreachable). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBilling

> BillingStatus getBilling()

Get billing status

### Example

```ts
import {
  Configuration,
  BillingApi,
} from 'lockally';
import type { GetBillingRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  try {
    const data = await api.getBilling();
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

[**BillingStatus**](BillingStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current billing status. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

