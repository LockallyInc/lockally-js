
# DraftResult


## Properties

Name | Type
------------ | -------------
`draftId` | string
`status` | string
`policyFlags` | [PolicyFlags](PolicyFlags.md)
`threadId` | string
`sent` | [AgentSendResult](AgentSendResult.md)

## Example

```typescript
import type { DraftResult } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "draftId": null,
  "status": null,
  "policyFlags": null,
  "threadId": null,
  "sent": null,
} satisfies DraftResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DraftResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


