
# GetIPAssignment200Response


## Properties

Name | Type
------------ | -------------
`poolName` | string
`poolKind` | string
`dedicatedIp` | string
`assignedAt` | Date
`reason` | string

## Example

```typescript
import type { GetIPAssignment200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "poolName": null,
  "poolKind": null,
  "dedicatedIp": null,
  "assignedAt": null,
  "reason": null,
} satisfies GetIPAssignment200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetIPAssignment200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


