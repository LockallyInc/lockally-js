
# Classification


## Properties

Name | Type
------------ | -------------
`intent` | string
`urgency` | string
`summary` | string
`suggestedAction` | string

## Example

```typescript
import type { Classification } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "intent": null,
  "urgency": null,
  "summary": null,
  "suggestedAction": null,
} satisfies Classification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Classification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


