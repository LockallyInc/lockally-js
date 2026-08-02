
# GALSettings


## Properties

Name | Type
------------ | -------------
`tenantId` | string
`galEnabled` | boolean
`hideFromDirectory` | boolean
`departmentGrouping` | boolean
`searchVisibility` | string
`includeExternalContacts` | boolean
`lastIndexRebuiltAt` | Date
`lastSyncedAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { GALSettings } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "tenantId": null,
  "galEnabled": null,
  "hideFromDirectory": null,
  "departmentGrouping": null,
  "searchVisibility": null,
  "includeExternalContacts": null,
  "lastIndexRebuiltAt": null,
  "lastSyncedAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies GALSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GALSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


