
# MessageStats


## Properties

Name | Type
------------ | -------------
`window` | [MessageStatsWindow](MessageStatsWindow.md)
`domain` | string
`sent` | number
`counts` | [MessageStatsCounts](MessageStatsCounts.md)
`rates` | [MessageStatsRates](MessageStatsRates.md)

## Example

```typescript
import type { MessageStats } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "window": null,
  "domain": null,
  "sent": null,
  "counts": null,
  "rates": null,
} satisfies MessageStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


