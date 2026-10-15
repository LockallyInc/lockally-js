# EncryptionApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**batchLookupPublicKeys**](EncryptionApi.md#batchlookuppublickeys) | **GET** /v1/encryption/keys/lookup | Batch-lookup public keys by email |
| [**createEncryptionKey**](EncryptionApi.md#createencryptionkeyoperation) | **POST** /v1/encryption/keys | Upload an encryption key pair |
| [**createEncryptionRecovery**](EncryptionApi.md#createencryptionrecoveryoperation) | **POST** /v1/encryption/recovery | Store an encryption recovery blob |
| [**getEncryptionKey**](EncryptionApi.md#getencryptionkey) | **GET** /v1/encryption/keys/{email} | Get encryption key for a mailbox |
| [**rotateEncryptionKey**](EncryptionApi.md#rotateencryptionkeyoperation) | **POST** /v1/encryption/keys/rotate | Rotate an encryption key |



## batchLookupPublicKeys

> BatchLookupPublicKeys200Response batchLookupPublicKeys(emails)

Batch-lookup public keys by email

### Example

```ts
import {
  Configuration,
  EncryptionApi,
} from 'lockally';
import type { BatchLookupPublicKeysRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EncryptionApi(config);

  const body = {
    // string | Comma-separated list of email addresses
    emails: emails_example,
  } satisfies BatchLookupPublicKeysRequest;

  try {
    const data = await api.batchLookupPublicKeys(body);
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
| **emails** | `string` | Comma-separated list of email addresses | [Defaults to `undefined`] |

### Return type

[**BatchLookupPublicKeys200Response**](BatchLookupPublicKeys200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Public keys for requested emails |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createEncryptionKey

> CreateEncryptionKey201Response createEncryptionKey(createEncryptionKeyRequest)

Upload an encryption key pair

### Example

```ts
import {
  Configuration,
  EncryptionApi,
} from 'lockally';
import type { CreateEncryptionKeyOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EncryptionApi(config);

  const body = {
    // CreateEncryptionKeyRequest
    createEncryptionKeyRequest: ...,
  } satisfies CreateEncryptionKeyOperationRequest;

  try {
    const data = await api.createEncryptionKey(body);
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
| **createEncryptionKeyRequest** | [CreateEncryptionKeyRequest](CreateEncryptionKeyRequest.md) |  | |

### Return type

[**CreateEncryptionKey201Response**](CreateEncryptionKey201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Key pair stored |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createEncryptionRecovery

> createEncryptionRecovery(createEncryptionRecoveryRequest)

Store an encryption recovery blob

### Example

```ts
import {
  Configuration,
  EncryptionApi,
} from 'lockally';
import type { CreateEncryptionRecoveryOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EncryptionApi(config);

  const body = {
    // CreateEncryptionRecoveryRequest
    createEncryptionRecoveryRequest: ...,
  } satisfies CreateEncryptionRecoveryOperationRequest;

  try {
    const data = await api.createEncryptionRecovery(body);
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
| **createEncryptionRecoveryRequest** | [CreateEncryptionRecoveryRequest](CreateEncryptionRecoveryRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Recovery blob stored |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEncryptionKey

> GetEncryptionKey200Response getEncryptionKey(email)

Get encryption key for a mailbox

### Example

```ts
import {
  Configuration,
  EncryptionApi,
} from 'lockally';
import type { GetEncryptionKeyRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EncryptionApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies GetEncryptionKeyRequest;

  try {
    const data = await api.getEncryptionKey(body);
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
| **email** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetEncryptionKey200Response**](GetEncryptionKey200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Encryption key details |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateEncryptionKey

> rotateEncryptionKey(rotateEncryptionKeyRequest)

Rotate an encryption key

### Example

```ts
import {
  Configuration,
  EncryptionApi,
} from 'lockally';
import type { RotateEncryptionKeyOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EncryptionApi(config);

  const body = {
    // RotateEncryptionKeyRequest
    rotateEncryptionKeyRequest: ...,
  } satisfies RotateEncryptionKeyOperationRequest;

  try {
    const data = await api.rotateEncryptionKey(body);
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
| **rotateEncryptionKeyRequest** | [RotateEncryptionKeyRequest](RotateEncryptionKeyRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Key rotated |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

