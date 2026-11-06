
# CreateApiKeyRequest


## Properties

Name | Type
------------ | -------------
`label` | string
`scopes` | Array&lt;string&gt;
`test` | boolean
`expiresAt` | Date

## Example

```typescript
import type { CreateApiKeyRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "label": ci-pipeline,
  "scopes": null,
  "test": null,
  "expiresAt": null,
} satisfies CreateApiKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateApiKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


