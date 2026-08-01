
# V1AliasesPostRequest


## Properties

Name | Type
------------ | -------------
`aliasAddress` | string
`aliasTarget` | string

## Example

```typescript
import type { V1AliasesPostRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "aliasAddress": support@acme.com,
  "aliasTarget": alice@acme.com,
} satisfies V1AliasesPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1AliasesPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


