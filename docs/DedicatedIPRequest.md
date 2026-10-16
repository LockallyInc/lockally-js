
# DedicatedIPRequest


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`status` | string
`note` | string
`adminNote` | string
`createdAt` | Date
`resolvedAt` | Date

## Example

```typescript
import type { DedicatedIPRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "status": null,
  "note": null,
  "adminNote": null,
  "createdAt": null,
  "resolvedAt": null,
} satisfies DedicatedIPRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DedicatedIPRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


