
# InviteAdminRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`password` | string
`displayName` | string
`role` | string

## Example

```typescript
import type { InviteAdminRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "password": null,
  "displayName": null,
  "role": null,
} satisfies InviteAdminRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteAdminRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


