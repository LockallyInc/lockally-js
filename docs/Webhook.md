
# Webhook


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`url` | string
`events` | Array&lt;string&gt;
`paused` | boolean
`pausedAt` | Date
`lastSuccessAt` | Date
`lastFailureAt` | Date
`consecutiveFailures` | number
`createdAt` | Date
`signingSecret` | string

## Example

```typescript
import type { Webhook } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "url": null,
  "events": null,
  "paused": null,
  "pausedAt": null,
  "lastSuccessAt": null,
  "lastFailureAt": null,
  "consecutiveFailures": null,
  "createdAt": null,
  "signingSecret": null,
} satisfies Webhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Webhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


