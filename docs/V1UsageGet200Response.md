
# V1UsageGet200Response


## Properties

Name | Type
------------ | -------------
`mailboxesActive` | number
`mailboxesTotal` | number
`domainsVerified` | number
`domainsTotal` | number
`messagesSentLast60s` | number
`messagesSentTodayUtc` | number
`messagesSentLast30d` | number
`bytesStored` | number
`rateCapPerMin` | number
`dailyMsgQuota` | number
`webhooksTotal` | number
`webhooksPaused` | number
`generatedAt` | Date

## Example

```typescript
import type { V1UsageGet200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "mailboxesActive": null,
  "mailboxesTotal": null,
  "domainsVerified": null,
  "domainsTotal": null,
  "messagesSentLast60s": null,
  "messagesSentTodayUtc": null,
  "messagesSentLast30d": null,
  "bytesStored": null,
  "rateCapPerMin": null,
  "dailyMsgQuota": null,
  "webhooksTotal": null,
  "webhooksPaused": null,
  "generatedAt": null,
} satisfies V1UsageGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UsageGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


