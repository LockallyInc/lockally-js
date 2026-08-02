
# ContactList


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`name` | string
`description` | string
`visibility` | string
`memberCount` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ContactList } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "name": null,
  "description": null,
  "visibility": null,
  "memberCount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ContactList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


