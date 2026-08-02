# DomainsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1DomainsDomainDelete**](DomainsApi.md#v1domainsdomaindelete) | **DELETE** /v1/domains/{domain} | Delete a domain |
| [**v1DomainsDomainGet**](DomainsApi.md#v1domainsdomainget) | **GET** /v1/domains/{domain} | Get a domain |
| [**v1DomainsDomainVerifyPost**](DomainsApi.md#v1domainsdomainverifypost) | **POST** /v1/domains/{domain}/verify | Force-poll DNS verification |
| [**v1DomainsGet**](DomainsApi.md#v1domainsget) | **GET** /v1/domains | List domains |
| [**v1DomainsPost**](DomainsApi.md#v1domainspostoperation) | **POST** /v1/domains | Register a domain |



## v1DomainsDomainDelete

> v1DomainsDomainDelete(domain)

Delete a domain

Removes the domain registration. Refuses with 409 if any mailbox is still attached — delete the mailboxes first. 

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from 'lockally';
import type { V1DomainsDomainDeleteRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // string
    domain: domain_example,
  } satisfies V1DomainsDomainDeleteRequest;

  try {
    const data = await api.v1DomainsDomainDelete(body);
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
| **domain** | `string` |  | [Defaults to `undefined`] |

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
| **409** | Domain still has mailboxes attached. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DomainsDomainGet

> Domain v1DomainsDomainGet(domain)

Get a domain

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from 'lockally';
import type { V1DomainsDomainGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // string
    domain: domain_example,
  } satisfies V1DomainsDomainGetRequest;

  try {
    const data = await api.v1DomainsDomainGet(body);
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
| **domain** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Domain**](Domain.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domain record including the DNS instructions to publish. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DomainsDomainVerifyPost

> Domain v1DomainsDomainVerifyPost(domain)

Force-poll DNS verification

Synchronously checks the &#x60;_lockally-verify.&lt;domain&gt;&#x60; TXT record against the stored verification token. Returns 200 either way: the returned &#x60;verified&#x60; boolean tells you whether DNS now confirms. Caller polls until &#x60;verified: true&#x60;. In v2 a background worker auto-polls and fires a &#x60;domain.verified&#x60; webhook. 

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from 'lockally';
import type { V1DomainsDomainVerifyPostRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // string
    domain: domain_example,
  } satisfies V1DomainsDomainVerifyPostRequest;

  try {
    const data = await api.v1DomainsDomainVerifyPost(body);
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
| **domain** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Domain**](Domain.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current domain state (possibly newly verified). |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **502** | Upstream DNS error (timeout, server unreachable). Retry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DomainsGet

> V1DomainsGet200Response v1DomainsGet()

List domains

Returns every domain registered under the calling tenant.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from 'lockally';
import type { V1DomainsGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  try {
    const data = await api.v1DomainsGet();
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

[**V1DomainsGet200Response**](V1DomainsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domain list |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DomainsPost

> Domain v1DomainsPost(v1DomainsPostRequest)

Register a domain

Registers a new domain for the calling tenant. Generates a DKIM keypair and verification token. Returns DNS instructions the tenant must publish under their own DNS (verification TXT, SPF include, DKIM TXT, MX records to &#x60;mx1&#x60;/&#x60;mx2.lockally.com&#x60;, DMARC seed).  **Idempotent** — re-posting the same domain returns the existing record with the same DKIM keys and token (regenerating would break the tenant\&#39;s published DNS). Returns 200 on idempotent hit, 201 on first create.  Returns 409 if the domain is already claimed by a different tenant. 

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from 'lockally';
import type { V1DomainsPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // V1DomainsPostRequest
    v1DomainsPostRequest: ...,
  } satisfies V1DomainsPostOperationRequest;

  try {
    const data = await api.v1DomainsPost(body);
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
| **v1DomainsPostRequest** | [V1DomainsPostRequest](V1DomainsPostRequest.md) |  | |

### Return type

[**Domain**](Domain.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domain already registered to the calling tenant (idempotent). |  -  |
| **201** | Domain created. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **409** | Domain claimed by another tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

