
# Admin


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`email` | string
`displayName` | string
`role` | string
`lastLoginAt` | Date
`createdAt` | Date

## Example

```typescript
import type { Admin } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "email": null,
  "displayName": null,
  "role": null,
  "lastLoginAt": null,
  "createdAt": null,
} satisfies Admin

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Admin
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


