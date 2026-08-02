
# GetIntegrationsSummary200ResponseWebhooksInner


## Properties

Name | Type
------------ | -------------
`url` | string
`paused` | boolean
`consecutiveFailures` | number
`lastFailureAt` | Date

## Example

```typescript
import type { GetIntegrationsSummary200ResponseWebhooksInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "paused": null,
  "consecutiveFailures": null,
  "lastFailureAt": null,
} satisfies GetIntegrationsSummary200ResponseWebhooksInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetIntegrationsSummary200ResponseWebhooksInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


