
# AiConfig


## Properties

Name | Type
------------ | -------------
`mode` | string
`model` | string
`byokKeyHint` | string
`unitsBalance` | number
`unitsAvailable` | boolean

## Example

```typescript
import type { AiConfig } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "mode": null,
  "model": null,
  "byokKeyHint": null,
  "unitsBalance": null,
  "unitsAvailable": null,
} satisfies AiConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


