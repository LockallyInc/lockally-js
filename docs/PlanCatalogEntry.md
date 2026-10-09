
# PlanCatalogEntry


## Properties

Name | Type
------------ | -------------
`name` | string
`displayName` | string
`description` | string
`priceNairaPerSeat` | number
`rateCapPerMin` | number
`monthlyIncludedSends` | number
`hasSharedMailboxes` | boolean
`hasSendUnits` | boolean
`hasAiUnits` | boolean
`hasE2eEncryption` | boolean

## Example

```typescript
import type { PlanCatalogEntry } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "displayName": null,
  "description": null,
  "priceNairaPerSeat": null,
  "rateCapPerMin": null,
  "monthlyIncludedSends": null,
  "hasSharedMailboxes": null,
  "hasSendUnits": null,
  "hasAiUnits": null,
  "hasE2eEncryption": null,
} satisfies PlanCatalogEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanCatalogEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


