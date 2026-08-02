
# GetIntegrationsSummary200Response


## Properties

Name | Type
------------ | -------------
`apiRequestsToday` | number
`activeApiKeys` | number
`apiKeys` | [Array&lt;GetIntegrationsSummary200ResponseApiKeysInner&gt;](GetIntegrationsSummary200ResponseApiKeysInner.md)
`webhookFailures` | number
`webhooksTotal` | number
`webhooks` | [Array&lt;GetIntegrationsSummary200ResponseWebhooksInner&gt;](GetIntegrationsSummary200ResponseWebhooksInner.md)
`generatedAt` | Date

## Example

```typescript
import type { GetIntegrationsSummary200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "apiRequestsToday": null,
  "activeApiKeys": null,
  "apiKeys": null,
  "webhookFailures": null,
  "webhooksTotal": null,
  "webhooks": null,
  "generatedAt": null,
} satisfies GetIntegrationsSummary200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetIntegrationsSummary200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


