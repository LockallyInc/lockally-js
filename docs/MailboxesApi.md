# MailboxesApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addSharedMember**](MailboxesApi.md#addsharedmemberoperation) | **POST** /v1/mailboxes/{email}/members | Add a shared mailbox member |
| [**createMailbox**](MailboxesApi.md#createmailboxoperation) | **POST** /v1/mailboxes | Create a mailbox |
| [**deleteMailbox**](MailboxesApi.md#deletemailbox) | **DELETE** /v1/mailboxes/{email} | Soft-delete a mailbox |
| [**deleteVacationResponder**](MailboxesApi.md#deletevacationresponder) | **DELETE** /v1/mailboxes/{email}/vacation | Remove the vacation responder |
| [**downloadMailboxExport**](MailboxesApi.md#downloadmailboxexport) | **GET** /v1/mailboxes/{email}/export/download | Download a previously-issued mailbox export |
| [**exportMailbox**](MailboxesApi.md#exportmailbox) | **POST** /v1/mailboxes/{email}/export | Request a mailbox export |
| [**getMailbox**](MailboxesApi.md#getmailbox) | **GET** /v1/mailboxes/{email} | Get a mailbox |
| [**getVacationResponder**](MailboxesApi.md#getvacationresponder) | **GET** /v1/mailboxes/{email}/vacation | Get the vacation responder |
| [**listMailboxes**](MailboxesApi.md#listmailboxes) | **GET** /v1/mailboxes | List mailboxes |
| [**listSharedMembers**](MailboxesApi.md#listsharedmembers) | **GET** /v1/mailboxes/{email}/members | List shared mailbox members |
| [**listVacationResponders**](MailboxesApi.md#listvacationresponders) | **GET** /v1/vacation | List all vacation responders |
| [**removeSharedMember**](MailboxesApi.md#removesharedmember) | **DELETE** /v1/mailboxes/{email}/members/{memberEmail} | Remove a shared mailbox member |
| [**setVacationResponder**](MailboxesApi.md#setvacationresponderoperation) | **PUT** /v1/mailboxes/{email}/vacation | Set the vacation responder |
| [**updateMailbox**](MailboxesApi.md#updatemailboxoperation) | **PATCH** /v1/mailboxes/{email} | Update a mailbox |



## addSharedMember

> SharedMember addSharedMember(email, addSharedMemberRequest)

Add a shared mailbox member

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { AddSharedMemberOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
    // AddSharedMemberRequest
    addSharedMemberRequest: ...,
  } satisfies AddSharedMemberOperationRequest;

  try {
    const data = await api.addSharedMember(body);
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
| **addSharedMemberRequest** | [AddSharedMemberRequest](AddSharedMemberRequest.md) |  | |

### Return type

[**SharedMember**](SharedMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Member added. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |
| **409** | Already a member of this mailbox. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createMailbox

> Mailbox createMailbox(createMailboxRequest)

Create a mailbox

Creates a mailbox on a tenant-verified domain. If &#x60;password&#x60; is omitted, lockally generates a 16-char password and returns it in the response — shown once.  **Gate.** The mailbox\&#39;s domain must already be registered AND verified for this tenant (via &#x60;/v1/domains&#x60; + &#x60;/v1/domains/{domain}/verify&#x60;).  **Idempotent.** Re-posting the same email returns the existing mailbox UNTOUCHED — password is NOT regenerated. To change a password, use PATCH instead. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { CreateMailboxOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // CreateMailboxRequest
    createMailboxRequest: ...,
  } satisfies CreateMailboxOperationRequest;

  try {
    const data = await api.createMailbox(body);
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
| **createMailboxRequest** | [CreateMailboxRequest](CreateMailboxRequest.md) |  | |

### Return type

[**Mailbox**](Mailbox.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mailbox already existed for this tenant (idempotent). |  -  |
| **201** | Mailbox created. &#x60;password&#x60; is in the response ONLY if generated. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **409** | Email claimed by another tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMailbox

> deleteMailbox(email)

Soft-delete a mailbox

Sets &#x60;soft_deleted_at &#x3D; now()&#x60; and &#x60;hard_delete_after &#x3D; now() + 90d&#x60; per design D25. A background sweep (planned) will hard-delete after the window. The mailbox is also disabled immediately. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { DeleteMailboxRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies DeleteMailboxRequest;

  try {
    const data = await api.deleteMailbox(body);
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

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Soft-deleted. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteVacationResponder

> deleteVacationResponder(email)

Remove the vacation responder

Idempotent — 204 whether or not a row existed.

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { DeleteVacationResponderRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies DeleteVacationResponderRequest;

  try {
    const data = await api.deleteVacationResponder(body);
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadMailboxExport

> Blob downloadMailboxExport(email, token)

Download a previously-issued mailbox export

Public endpoint (no Authorization header). Validates the one-shot token from the URL, marks it used, and streams an mbox file. Second GET with the same token returns 404 — tokens are single-use. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { DownloadMailboxExportRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const api = new MailboxesApi();

  const body = {
    // string
    email: email_example,
    // string
    token: token_example,
  } satisfies DownloadMailboxExportRequest;

  try {
    const data = await api.downloadMailboxExport(body);
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
| **token** | `string` |  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/mbox`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | mbox stream. |  -  |
| **400** | Malformed request. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Token not found, already used, or expired. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportMailbox

> ExportMailbox201Response exportMailbox(email)

Request a mailbox export

Issues a one-shot \&quot;presigned\&quot; download URL for the mailbox\&#39;s content in mbox format. The URL works without an Authorization header — the token in the query string is the authz. TTL is 5 minutes; the token is consumed on first GET.  **v1 caveat:** the synthesized mbox only contains outbound mail (from &#x60;lockally.messages&#x60;). v2 swaps in Stalwart\&#39;s export primitive for full inbox + folder structure + flags. The endpoint contract stays unchanged.  **Scope changed:** this used to accept &#x60;mailboxes:read&#x60;. It takes any mailbox in the tenant and returns that mailbox\&#39;s mail, so it now requires &#x60;tenant:admin&#x60;, matching &#x60;POST /v1/ediscovery/export&#x60;. A key scoped &#x60;mailboxes:read&#x60; gets 403 and has to be reissued; admin console sessions are unaffected. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { ExportMailboxRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies ExportMailboxRequest;

  try {
    const data = await api.exportMailbox(body);
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

[**ExportMailbox201Response**](ExportMailbox201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Export token issued. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMailbox

> Mailbox getMailbox(email)

Get a mailbox

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { GetMailboxRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies GetMailboxRequest;

  try {
    const data = await api.getMailbox(body);
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

[**Mailbox**](Mailbox.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mailbox info. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVacationResponder

> VacationResponder getVacationResponder(email)

Get the vacation responder

Returns the stored vacation rule or 404 if none is set.

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { GetVacationResponderRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies GetVacationResponderRequest;

  try {
    const data = await api.getVacationResponder(body);
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

[**VacationResponder**](VacationResponder.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Vacation responder. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMailboxes

> ListMailboxes200Response listMailboxes(limit)

List mailboxes

Returns mailboxes under the calling tenant — active and soft-deleted. &#x60;?limit&#x3D;N&#x60; between 1 and 200 (default 50). 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { ListMailboxesRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // number (optional)
    limit: 56,
  } satisfies ListMailboxesRequest;

  try {
    const data = await api.listMailboxes(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**ListMailboxes200Response**](ListMailboxes200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mailbox list. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSharedMembers

> ListSharedMembers200Response listSharedMembers(email)

List shared mailbox members

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { ListSharedMembersRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies ListSharedMembersRequest;

  try {
    const data = await api.listSharedMembers(body);
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

[**ListSharedMembers200Response**](ListSharedMembers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Members of the shared mailbox. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listVacationResponders

> ListVacationResponders200Response listVacationResponders()

List all vacation responders

Returns every vacation responder for the calling tenant.

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { ListVacationRespondersRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  try {
    const data = await api.listVacationResponders();
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

[**ListVacationResponders200Response**](ListVacationResponders200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeSharedMember

> removeSharedMember(email, memberEmail)

Remove a shared mailbox member

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { RemoveSharedMemberRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
    // string
    memberEmail: memberEmail_example,
  } satisfies RemoveSharedMemberRequest;

  try {
    const data = await api.removeSharedMember(body);
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
| **memberEmail** | `string` |  | [Defaults to `undefined`] |

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


## setVacationResponder

> VacationResponder setVacationResponder(email, setVacationResponderRequest)

Set the vacation responder

Upsert — same endpoint creates or replaces the rule. Clears &#x60;synced_at&#x60;; the rule is staged on lockally until a sync worker pushes it to the mail server. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { SetVacationResponderOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
    // SetVacationResponderRequest
    setVacationResponderRequest: ...,
  } satisfies SetVacationResponderOperationRequest;

  try {
    const data = await api.setVacationResponder(body);
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
| **setVacationResponderRequest** | [SetVacationResponderRequest](SetVacationResponderRequest.md) |  | |

### Return type

[**VacationResponder**](VacationResponder.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Saved. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMailbox

> Mailbox updateMailbox(email, updateMailboxRequest)

Update a mailbox

Supply at least one of &#x60;password&#x60;, &#x60;quota_bytes&#x60;, &#x60;disabled&#x60;. Returns the updated mailbox. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { UpdateMailboxOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // string
    email: email_example,
    // UpdateMailboxRequest
    updateMailboxRequest: ...,
  } satisfies UpdateMailboxOperationRequest;

  try {
    const data = await api.updateMailbox(body);
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
| **updateMailboxRequest** | [UpdateMailboxRequest](UpdateMailboxRequest.md) |  | |

### Return type

[**Mailbox**](Mailbox.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated mailbox. |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

