
# UpdateGALSettingsRequest


## Properties

Name | Type
------------ | -------------
`galEnabled` | boolean
`hideFromDirectory` | boolean
`departmentGrouping` | boolean
`searchVisibility` | string
`includeExternalContacts` | boolean

## Example

```typescript
import type { UpdateGALSettingsRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "galEnabled": null,
  "hideFromDirectory": null,
  "departmentGrouping": null,
  "searchVisibility": null,
  "includeExternalContacts": null,
} satisfies UpdateGALSettingsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateGALSettingsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


