
# GetDirectoryStats200Response


## Properties

Name | Type
------------ | -------------
`totalContacts` | number
`internalUsers` | number
`externalContacts` | number
`syncedContacts` | number
`sharedLists` | number
`directoryGroups` | number

## Example

```typescript
import type { GetDirectoryStats200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "totalContacts": null,
  "internalUsers": null,
  "externalContacts": null,
  "syncedContacts": null,
  "sharedLists": null,
  "directoryGroups": null,
} satisfies GetDirectoryStats200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDirectoryStats200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


