
# ReturnPathCheck

Present after a verify call.

## Properties

Name | Type
------------ | -------------
`mx` | boolean
`spf` | boolean

## Example

```typescript
import type { ReturnPathCheck } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "mx": null,
  "spf": null,
} satisfies ReturnPathCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReturnPathCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


