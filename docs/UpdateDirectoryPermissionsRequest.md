
# UpdateDirectoryPermissionsRequest


## Properties

Name | Type
------------ | -------------
`contactViewAccess` | string
`contactEditAccess` | string
`listManageAccess` | string
`externalSharing` | string

## Example

```typescript
import type { UpdateDirectoryPermissionsRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "contactViewAccess": null,
  "contactEditAccess": null,
  "listManageAccess": null,
  "externalSharing": null,
} satisfies UpdateDirectoryPermissionsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDirectoryPermissionsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


