
# BulkUpsertExternalContacts200ResponseResultsInner


## Properties

Name | Type
------------ | -------------
`index` | number
`externalId` | string
`status` | string
`contact` | [Contact](Contact.md)
`error` | string

## Example

```typescript
import type { BulkUpsertExternalContacts200ResponseResultsInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "externalId": null,
  "status": null,
  "contact": null,
  "error": null,
} satisfies BulkUpsertExternalContacts200ResponseResultsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpsertExternalContacts200ResponseResultsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


