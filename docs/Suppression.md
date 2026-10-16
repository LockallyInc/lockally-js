
# Suppression


## Properties

Name | Type
------------ | -------------
`email` | string
`reason` | string
`source` | string
`createdAt` | Date

## Example

```typescript
import type { Suppression } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "reason": null,
  "source": null,
  "createdAt": null,
} satisfies Suppression

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Suppression
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


