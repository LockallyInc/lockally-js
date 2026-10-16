
# BillingStatus


## Properties

Name | Type
------------ | -------------
`plan` | string
`displayName` | string
`mode` | string
`rateCapPerMin` | number
`monthlyIncludedSends` | number
`msgsThisPeriod` | number
`status` | string
`priceNairaPerSeat` | number
`subscribedAt` | Date
`currentPeriodEnd` | Date
`createdAt` | Date
`sendUnitsBalance` | number
`sendUnitsNextExpiry` | Date
`unitBundles` | [Array&lt;UnitBundle&gt;](UnitBundle.md)
`catalog` | [Array&lt;PlanCatalogEntry&gt;](PlanCatalogEntry.md)

## Example

```typescript
import type { BillingStatus } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "plan": null,
  "displayName": null,
  "mode": null,
  "rateCapPerMin": null,
  "monthlyIncludedSends": null,
  "msgsThisPeriod": null,
  "status": null,
  "priceNairaPerSeat": null,
  "subscribedAt": null,
  "currentPeriodEnd": null,
  "createdAt": null,
  "sendUnitsBalance": null,
  "sendUnitsNextExpiry": null,
  "unitBundles": null,
  "catalog": null,
} satisfies BillingStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


