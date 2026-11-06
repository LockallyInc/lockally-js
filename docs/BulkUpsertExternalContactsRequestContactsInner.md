
# BulkUpsertExternalContactsRequestContactsInner


## Properties

Name | Type
------------ | -------------
`email` | string
`name` | string
`phone` | string
`company` | string
`notes` | string
`contactType` | string
`department` | string
`role` | string
`status` | string
`externalId` | string

## Example

```typescript
import type { BulkUpsertExternalContactsRequestContactsInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "name": null,
  "phone": null,
  "company": null,
  "notes": null,
  "contactType": null,
  "department": null,
  "role": null,
  "status": null,
  "externalId": null,
} satisfies BulkUpsertExternalContactsRequestContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpsertExternalContactsRequestContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


