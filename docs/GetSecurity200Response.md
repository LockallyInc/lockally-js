
# GetSecurity200Response


## Properties

Name | Type
------------ | -------------
`overallStatus` | string
`stats` | [Array&lt;GetSecurity200ResponseStatsInner&gt;](GetSecurity200ResponseStatsInner.md)
`alerts` | [Array&lt;GetSecurity200ResponseAlertsInner&gt;](GetSecurity200ResponseAlertsInner.md)

## Example

```typescript
import type { GetSecurity200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "overallStatus": null,
  "stats": null,
  "alerts": null,
} satisfies GetSecurity200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSecurity200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


