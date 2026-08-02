# MailboxesApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addSharedMember**](MailboxesApi.md#addsharedmemberoperation) | **POST** /v1/mailboxes/{email}/members | Add a shared mailbox member |
| [**listSharedMembers**](MailboxesApi.md#listsharedmembers) | **GET** /v1/mailboxes/{email}/members | List shared mailbox members |
| [**removeSharedMember**](MailboxesApi.md#removesharedmember) | **DELETE** /v1/mailboxes/{email}/members/{memberEmail} | Remove a shared mailbox member |
| [**v1MailboxesEmailDelete**](MailboxesApi.md#v1mailboxesemaildelete) | **DELETE** /v1/mailboxes/{email} | Soft-delete a mailbox |
| [**v1MailboxesEmailExportDownloadGet**](MailboxesApi.md#v1mailboxesemailexportdownloadget) | **GET** /v1/mailboxes/{email}/export/download | Download a previously-issued mailbox export |
| [**v1MailboxesEmailExportPost**](MailboxesApi.md#v1mailboxesemailexportpost) | **POST** /v1/mailboxes/{email}/export | Request a mailbox export |
| [**v1MailboxesEmailGet**](MailboxesApi.md#v1mailboxesemailget) | **GET** /v1/mailboxes/{email} | Get a mailbox |
| [**v1MailboxesEmailPatch**](MailboxesApi.md#v1mailboxesemailpatchoperation) | **PATCH** /v1/mailboxes/{email} | Update a mailbox |
| [**v1MailboxesEmailVacationDelete**](MailboxesApi.md#v1mailboxesemailvacationdelete) | **DELETE** /v1/mailboxes/{email}/vacation | Remove the vacation responder |
| [**v1MailboxesEmailVacationGet**](MailboxesApi.md#v1mailboxesemailvacationget) | **GET** /v1/mailboxes/{email}/vacation | Get the vacation responder |
| [**v1MailboxesEmailVacationPut**](MailboxesApi.md#v1mailboxesemailvacationputoperation) | **PUT** /v1/mailboxes/{email}/vacation | Set the vacation responder |
| [**v1MailboxesGet**](MailboxesApi.md#v1mailboxesget) | **GET** /v1/mailboxes | List mailboxes |
| [**v1MailboxesPost**](MailboxesApi.md#v1mailboxespostoperation) | **POST** /v1/mailboxes | Create a mailbox |
| [**v1VacationGet**](MailboxesApi.md#v1vacationget) | **GET** /v1/vacation | List all vacation responders |



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


## v1MailboxesEmailDelete

> v1MailboxesEmailDelete(email)

Soft-delete a mailbox

Sets &#x60;soft_deleted_at &#x3D; now()&#x60; and &#x60;hard_delete_after &#x3D; now() + 90d&#x60; per design D25. A background sweep (planned) will hard-delete after the window. The mailbox is also disabled immediately. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailDeleteRequest } from 'lockally';

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
  } satisfies V1MailboxesEmailDeleteRequest;

  try {
    const data = await api.v1MailboxesEmailDelete(body);
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


## v1MailboxesEmailExportDownloadGet

> Blob v1MailboxesEmailExportDownloadGet(email, token)

Download a previously-issued mailbox export

Public endpoint (no Authorization header). Validates the one-shot token from the URL, marks it used, and streams an mbox file. Second GET with the same token returns 404 — tokens are single-use. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailExportDownloadGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const api = new MailboxesApi();

  const body = {
    // string
    email: email_example,
    // string
    token: token_example,
  } satisfies V1MailboxesEmailExportDownloadGetRequest;

  try {
    const data = await api.v1MailboxesEmailExportDownloadGet(body);
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


## v1MailboxesEmailExportPost

> V1MailboxesEmailExportPost201Response v1MailboxesEmailExportPost(email)

Request a mailbox export

Issues a one-shot \&quot;presigned\&quot; download URL for the mailbox\&#39;s content in mbox format. The URL works without an Authorization header — the token in the query string is the authz. TTL is 5 minutes; the token is consumed on first GET.  **v1 caveat:** the synthesized mbox only contains outbound mail (from &#x60;lockally.messages&#x60;). v2 swaps in Stalwart\&#39;s export primitive for full inbox + folder structure + flags. The endpoint contract stays unchanged. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailExportPostRequest } from 'lockally';

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
  } satisfies V1MailboxesEmailExportPostRequest;

  try {
    const data = await api.v1MailboxesEmailExportPost(body);
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

[**V1MailboxesEmailExportPost201Response**](V1MailboxesEmailExportPost201Response.md)

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


## v1MailboxesEmailGet

> Mailbox v1MailboxesEmailGet(email)

Get a mailbox

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailGetRequest } from 'lockally';

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
  } satisfies V1MailboxesEmailGetRequest;

  try {
    const data = await api.v1MailboxesEmailGet(body);
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


## v1MailboxesEmailPatch

> Mailbox v1MailboxesEmailPatch(email, v1MailboxesEmailPatchRequest)

Update a mailbox

Supply at least one of &#x60;password&#x60;, &#x60;quota_bytes&#x60;, &#x60;disabled&#x60;. Returns the updated mailbox. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailPatchOperationRequest } from 'lockally';

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
    // V1MailboxesEmailPatchRequest
    v1MailboxesEmailPatchRequest: ...,
  } satisfies V1MailboxesEmailPatchOperationRequest;

  try {
    const data = await api.v1MailboxesEmailPatch(body);
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
| **v1MailboxesEmailPatchRequest** | [V1MailboxesEmailPatchRequest](V1MailboxesEmailPatchRequest.md) |  | |

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


## v1MailboxesEmailVacationDelete

> v1MailboxesEmailVacationDelete(email)

Remove the vacation responder

Idempotent — 204 whether or not a row existed.

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailVacationDeleteRequest } from 'lockally';

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
  } satisfies V1MailboxesEmailVacationDeleteRequest;

  try {
    const data = await api.v1MailboxesEmailVacationDelete(body);
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


## v1MailboxesEmailVacationGet

> VacationResponder v1MailboxesEmailVacationGet(email)

Get the vacation responder

Returns the stored vacation rule or 404 if none is set.

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailVacationGetRequest } from 'lockally';

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
  } satisfies V1MailboxesEmailVacationGetRequest;

  try {
    const data = await api.v1MailboxesEmailVacationGet(body);
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


## v1MailboxesEmailVacationPut

> VacationResponder v1MailboxesEmailVacationPut(email, v1MailboxesEmailVacationPutRequest)

Set the vacation responder

Upsert — same endpoint creates or replaces the rule. Clears &#x60;synced_at&#x60;; the rule is staged on lockally until a sync worker pushes it to the mail server. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesEmailVacationPutOperationRequest } from 'lockally';

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
    // V1MailboxesEmailVacationPutRequest
    v1MailboxesEmailVacationPutRequest: ...,
  } satisfies V1MailboxesEmailVacationPutOperationRequest;

  try {
    const data = await api.v1MailboxesEmailVacationPut(body);
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
| **v1MailboxesEmailVacationPutRequest** | [V1MailboxesEmailVacationPutRequest](V1MailboxesEmailVacationPutRequest.md) |  | |

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


## v1MailboxesGet

> V1MailboxesGet200Response v1MailboxesGet(limit)

List mailboxes

Returns mailboxes under the calling tenant — active and soft-deleted. &#x60;?limit&#x3D;N&#x60; between 1 and 200 (default 50). 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesGetRequest } from 'lockally';

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
  } satisfies V1MailboxesGetRequest;

  try {
    const data = await api.v1MailboxesGet(body);
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

[**V1MailboxesGet200Response**](V1MailboxesGet200Response.md)

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


## v1MailboxesPost

> Mailbox v1MailboxesPost(v1MailboxesPostRequest)

Create a mailbox

Creates a mailbox on a tenant-verified domain. If &#x60;password&#x60; is omitted, lockally generates a 16-char password and returns it in the response — shown once.  **Gate.** The mailbox\&#39;s domain must already be registered AND verified for this tenant (via &#x60;/v1/domains&#x60; + &#x60;/v1/domains/{domain}/verify&#x60;).  **Idempotent.** Re-posting the same email returns the existing mailbox UNTOUCHED — password is NOT regenerated. To change a password, use PATCH instead. 

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1MailboxesPostOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  const body = {
    // V1MailboxesPostRequest
    v1MailboxesPostRequest: ...,
  } satisfies V1MailboxesPostOperationRequest;

  try {
    const data = await api.v1MailboxesPost(body);
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
| **v1MailboxesPostRequest** | [V1MailboxesPostRequest](V1MailboxesPostRequest.md) |  | |

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


## v1VacationGet

> V1VacationGet200Response v1VacationGet()

List all vacation responders

Returns every vacation responder for the calling tenant.

### Example

```ts
import {
  Configuration,
  MailboxesApi,
} from 'lockally';
import type { V1VacationGetRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailboxesApi(config);

  try {
    const data = await api.v1VacationGet();
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

[**V1VacationGet200Response**](V1VacationGet200Response.md)

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

