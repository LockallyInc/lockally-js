
# Tenant


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`displayName` | string
`status` | string
`plan` | string
`rateCapPerMin` | number
`dailyMsgQuota` | number
`adminEmail` | string
`createdAt` | Date
`suspendedAt` | Date
`closedAt` | Date
`hardDeleteAfter` | Date

## Example

```typescript
import type { Tenant } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": workgrid,
  "displayName": WorkGrid,
  "status": null,
  "plan": starter,
  "rateCapPerMin": 1,
  "dailyMsgQuota": 1000,
  "adminEmail": null,
  "createdAt": null,
  "suspendedAt": null,
  "closedAt": null,
  "hardDeleteAfter": null,
} satisfies Tenant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Tenant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


