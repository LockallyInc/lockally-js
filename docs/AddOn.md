
# AddOn


## Properties

Name | Type
------------ | -------------
`name` | string
`displayName` | string
`description` | string
`priceNaira` | number
`pricingModel` | string
`active` | boolean

## Example

```typescript
import type { AddOn } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "displayName": null,
  "description": null,
  "priceNaira": null,
  "pricingModel": null,
  "active": null,
} satisfies AddOn

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddOn
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


