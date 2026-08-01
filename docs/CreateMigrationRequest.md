
# CreateMigrationRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`credentialId` | string
`sourceProvider` | string
`settings` | [MigrationSettings](MigrationSettings.md)

## Example

```typescript
import type { CreateMigrationRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "credentialId": null,
  "sourceProvider": null,
  "settings": null,
} satisfies CreateMigrationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateMigrationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


