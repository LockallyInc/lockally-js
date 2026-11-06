# ContactsApi

All URIs are relative to *https://api.lockally.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkUpsertExternalContacts**](ContactsApi.md#bulkupsertexternalcontactsoperation) | **PUT** /v1/contacts/external/{system} | Create or update up to 500 contacts by their ids in another system |
| [**createContact**](ContactsApi.md#createcontactoperation) | **POST** /v1/contacts | Create a contact |
| [**deleteContact**](ContactsApi.md#deletecontact) | **DELETE** /v1/contacts/{id} | Delete a contact |
| [**deleteExternalContact**](ContactsApi.md#deleteexternalcontact) | **DELETE** /v1/contacts/external/{system}/{external_id} | Delete a contact by its id in another system |
| [**getContact**](ContactsApi.md#getcontact) | **GET** /v1/contacts/{id} | Get a contact |
| [**getContactLists**](ContactsApi.md#getcontactlists) | **GET** /v1/contacts/{id}/lists | Get lists a contact belongs to |
| [**getExternalContact**](ContactsApi.md#getexternalcontact) | **GET** /v1/contacts/external/{system}/{external_id} | Get a contact by its id in another system |
| [**listContacts**](ContactsApi.md#listcontacts) | **GET** /v1/contacts | List contacts |
| [**updateContact**](ContactsApi.md#updatecontactoperation) | **PATCH** /v1/contacts/{id} | Update a contact |
| [**upsertExternalContact**](ContactsApi.md#upsertexternalcontact) | **PUT** /v1/contacts/external/{system}/{external_id} | Create or update a contact by its id in another system |



## bulkUpsertExternalContacts

> BulkUpsertExternalContacts200Response bulkUpsertExternalContacts(system, bulkUpsertExternalContactsRequest)

Create or update up to 500 contacts by their ids in another system

For a sync. Each row stands alone: a bad row is reported in &#x60;results&#x60; with its index and the rest are stored, so the response is 200 whenever the request itself is well formed. Read &#x60;failed&#x60; and &#x60;results&#x60;. Two rows with the same &#x60;external_id&#x60; in one request are refused (the later one), because which is current cannot be known. Rerunning the same payload updates rather than duplicates.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { BulkUpsertExternalContactsOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string
    system: system_example,
    // BulkUpsertExternalContactsRequest
    bulkUpsertExternalContactsRequest: ...,
  } satisfies BulkUpsertExternalContactsOperationRequest;

  try {
    const data = await api.bulkUpsertExternalContacts(body);
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
| **system** | `string` |  | [Defaults to `undefined`] |
| **bulkUpsertExternalContactsRequest** | [BulkUpsertExternalContactsRequest](BulkUpsertExternalContactsRequest.md) |  | |

### Return type

[**BulkUpsertExternalContacts200Response**](BulkUpsertExternalContacts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Per-row results |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createContact

> Contact createContact(createContactRequest)

Create a contact

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { CreateContactOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // CreateContactRequest
    createContactRequest: ...,
  } satisfies CreateContactOperationRequest;

  try {
    const data = await api.createContact(body);
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
| **createContactRequest** | [CreateContactRequest](CreateContactRequest.md) |  | |

### Return type

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Contact created |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteContact

> deleteContact(id)

Delete a contact

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { DeleteContactRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteContactRequest;

  try {
    const data = await api.deleteContact(body);
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
| **204** | Contact deleted |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteExternalContact

> deleteExternalContact(system, externalId)

Delete a contact by its id in another system

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { DeleteExternalContactRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Your label for the system the record comes from, for example `salesforce`, `hubspot` or `odoo`. 1 to 64 characters: lowercase letters, digits, dot, underscore or hyphen (upper case is folded).
    system: system_example,
    // string | The record\'s id in that system, kept exactly as given (case matters). 1 to 255 characters, no spaces. URL-encode it.
    externalId: externalId_example,
  } satisfies DeleteExternalContactRequest;

  try {
    const data = await api.deleteExternalContact(body);
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
| **system** | `string` | Your label for the system the record comes from, for example &#x60;salesforce&#x60;, &#x60;hubspot&#x60; or &#x60;odoo&#x60;. 1 to 64 characters: lowercase letters, digits, dot, underscore or hyphen (upper case is folded). | [Defaults to `undefined`] |
| **externalId** | `string` | The record\&#39;s id in that system, kept exactly as given (case matters). 1 to 255 characters, no spaces. URL-encode it. | [Defaults to `undefined`] |

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
| **204** | Contact deleted |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContact

> Contact getContact(id)

Get a contact

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { GetContactRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetContactRequest;

  try {
    const data = await api.getContact(body);
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

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact details |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContactLists

> GetContactLists200Response getContactLists(id)

Get lists a contact belongs to

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { GetContactListsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetContactListsRequest;

  try {
    const data = await api.getContactLists(body);
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

[**GetContactLists200Response**](GetContactLists200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lists containing this contact |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExternalContact

> Contact getExternalContact(system, externalId)

Get a contact by its id in another system

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { GetExternalContactRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Your label for the system the record comes from, for example `salesforce`, `hubspot` or `odoo`. 1 to 64 characters: lowercase letters, digits, dot, underscore or hyphen (upper case is folded).
    system: system_example,
    // string | The record\'s id in that system, kept exactly as given (case matters). 1 to 255 characters, no spaces. URL-encode it.
    externalId: externalId_example,
  } satisfies GetExternalContactRequest;

  try {
    const data = await api.getExternalContact(body);
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
| **system** | `string` | Your label for the system the record comes from, for example &#x60;salesforce&#x60;, &#x60;hubspot&#x60; or &#x60;odoo&#x60;. 1 to 64 characters: lowercase letters, digits, dot, underscore or hyphen (upper case is folded). | [Defaults to `undefined`] |
| **externalId** | `string` | The record\&#39;s id in that system, kept exactly as given (case matters). 1 to 255 characters, no spaces. URL-encode it. | [Defaults to `undefined`] |

### Return type

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact details |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listContacts

> ListContacts200Response listContacts(q, type, department, status, source)

List contacts

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { ListContactsRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Free-text search across name, email, company (optional)
    q: q_example,
    // string | Filter by contact_type (optional)
    type: type_example,
    // string | Filter by department (optional)
    department: department_example,
    // string | Filter by status (optional)
    status: status_example,
    // string | Filter by source (optional)
    source: source_example,
  } satisfies ListContactsRequest;

  try {
    const data = await api.listContacts(body);
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
| **q** | `string` | Free-text search across name, email, company | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Filter by contact_type | [Optional] [Defaults to `undefined`] |
| **department** | `string` | Filter by department | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by status | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter by source | [Optional] [Defaults to `undefined`] |

### Return type

[**ListContacts200Response**](ListContacts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of contacts |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContact

> Contact updateContact(id, updateContactRequest)

Update a contact

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { UpdateContactOperationRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateContactRequest
    updateContactRequest: ...,
  } satisfies UpdateContactOperationRequest;

  try {
    const data = await api.updateContact(body);
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
| **updateContactRequest** | [UpdateContactRequest](UpdateContactRequest.md) |  | |

### Return type

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact updated |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |
| **404** | Resource not found under the calling tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertExternalContact

> Contact upsertExternalContact(system, externalId, externalContactInput)

Create or update a contact by its id in another system

Idempotent: the path is the identity, so sending the same request twice cannot create a second contact, and you never need to store our id. Returns 201 when the contact was created and 200 when it already existed. The body is the full representation: a field you leave out is cleared. Email is an ordinary attribute, not a key, so changing it updates the same contact. &#x60;mailboxes:write&#x60; is also accepted.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from 'lockally';
import type { UpsertExternalContactRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | Your label for the system the record comes from, for example `salesforce`, `hubspot` or `odoo`. 1 to 64 characters: lowercase letters, digits, dot, underscore or hyphen (upper case is folded).
    system: system_example,
    // string | The record\'s id in that system, kept exactly as given (case matters). 1 to 255 characters, no spaces. URL-encode it.
    externalId: externalId_example,
    // ExternalContactInput
    externalContactInput: ...,
  } satisfies UpsertExternalContactRequest;

  try {
    const data = await api.upsertExternalContact(body);
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
| **system** | `string` | Your label for the system the record comes from, for example &#x60;salesforce&#x60;, &#x60;hubspot&#x60; or &#x60;odoo&#x60;. 1 to 64 characters: lowercase letters, digits, dot, underscore or hyphen (upper case is folded). | [Defaults to `undefined`] |
| **externalId** | `string` | The record\&#39;s id in that system, kept exactly as given (case matters). 1 to 255 characters, no spaces. URL-encode it. | [Defaults to `undefined`] |
| **externalContactInput** | [ExternalContactInput](ExternalContactInput.md) |  | |

### Return type

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The contact already existed and was updated |  -  |
| **201** | The contact was created |  -  |
| **400** | Malformed request. |  -  |
| **401** | Missing, malformed, or invalid API key. |  -  |
| **403** | API key lacks the required scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

