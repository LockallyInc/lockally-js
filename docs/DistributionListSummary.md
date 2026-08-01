
# DistributionListSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`listAddress` | string
`name` | string
`createdAt` | Date
`memberCount` | number

## Example

```typescript
import type { DistributionListSummary } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "listAddress": null,
  "name": null,
  "createdAt": null,
  "memberCount": null,
} satisfies DistributionListSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DistributionListSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


