
# MessageStatsRates


## Properties

Name | Type
------------ | -------------
`delivered` | number
`bounced` | number
`deferred` | number
`complaint` | number

## Example

```typescript
import type { MessageStatsRates } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "delivered": null,
  "bounced": null,
  "deferred": null,
  "complaint": null,
} satisfies MessageStatsRates

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageStatsRates
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


