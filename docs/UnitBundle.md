
# UnitBundle


## Properties

Name | Type
------------ | -------------
`key` | string
`units` | number
`displayName` | string
`priceNaira` | number
`displayPrice` | string

## Example

```typescript
import type { UnitBundle } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "units": null,
  "displayName": null,
  "priceNaira": null,
  "displayPrice": null,
} satisfies UnitBundle

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnitBundle
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


