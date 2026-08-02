
# CreateMigrationCredentialRequest


## Properties

Name | Type
------------ | -------------
`provider` | string
`label` | string
`credentials` | [CreateMigrationCredentialRequestCredentials](CreateMigrationCredentialRequestCredentials.md)

## Example

```typescript
import type { CreateMigrationCredentialRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "label": null,
  "credentials": null,
} satisfies CreateMigrationCredentialRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateMigrationCredentialRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


