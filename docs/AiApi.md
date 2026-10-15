# AiApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**classifyThread**](AiApi.md#classifythread) | **POST** /v1/threads/{threadID}/classify | LLM-classify a thread |
| [**createAiUnitsCheckout**](AiApi.md#createaiunitscheckout) | **POST** /v1/billing/ai-units/checkout | Buy prepaid AI units |
| [**getAiConfig**](AiApi.md#getaiconfig) | **GET** /v1/ai-config | Read the tenant\&#39;s AI configuration |
| [**updateAiConfig**](AiApi.md#updateaiconfig) | **PUT** /v1/ai-config | Configure the AI tier |



## classifyThread

> ThreadClassification classifyThread(threadID, refresh)

LLM-classify a thread

Returns {intent, urgency, summary, suggested_action} via the tenant\&#39;s AI tier (BYOK or prepaid units — see /v1/ai-config). Cached per thread state: unchanged threads return the cache free; ?refresh&#x3D;true forces a re-run. A failed model call charges nothing. 402 when the AI tier is off.

### Example

```ts
import {
  Configuration,
  AiApi,
} from 'lockally';
import type { ClassifyThreadRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AiApi(config);

  const body = {
    // string
    threadID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean (optional)
    refresh: true,
  } satisfies ClassifyThreadRequest;

  try {
    const data = await api.classifyThread(body);
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
| **threadID** | `string` |  | [Defaults to `undefined`] |
| **refresh** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ThreadClassification**](ThreadClassification.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Classification |  -  |
| **402** | AI tier not enabled / out of units |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAiUnitsCheckout

> CreateAiUnitsCheckout200Response createAiUnitsCheckout()

Buy prepaid AI units

Body: {\&quot;bundle\&quot;: \&quot;100|500|2000\&quot;}. One classification &#x3D; one unit; bundles expire after 6 months. Admin session required. 503 until Paystack billing is configured.

### Example

```ts
import {
  Configuration,
  AiApi,
} from 'lockally';
import type { CreateAiUnitsCheckoutRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AiApi(config);

  try {
    const data = await api.createAiUnitsCheckout();
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

[**CreateAiUnitsCheckout200Response**](CreateAiUnitsCheckout200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paystack authorization URL for the selected AI unit bundle. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAiConfig

> AiConfig getAiConfig()

Read the tenant\&#39;s AI configuration

Mode (off/byok/units), model, masked key hint, AI-unit balance, whether the units tier is available on this deployment.

### Example

```ts
import {
  Configuration,
  AiApi,
} from 'lockally';
import type { GetAiConfigRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AiApi(config);

  try {
    const data = await api.getAiConfig();
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

[**AiConfig**](AiConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | AI config |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAiConfig

> AiConfigUpdate updateAiConfig()

Configure the AI tier

Body: {\&quot;mode\&quot;: \&quot;off|byok|units\&quot;, \&quot;model\&quot;: \&quot;...\&quot;, \&quot;anthropic_key\&quot;: \&quot;sk-ant-...\&quot;}. BYOK keys are stored AES-256-GCM encrypted; the cleartext is never returned. Omit anthropic_key to keep the stored one.

### Example

```ts
import {
  Configuration,
  AiApi,
} from 'lockally';
import type { UpdateAiConfigRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AiApi(config);

  try {
    const data = await api.updateAiConfig();
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

[**AiConfigUpdate**](AiConfigUpdate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Applied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

