
# PolicyFlags

Why a draft was held. A key is absent when that check passed. The set is closed: a flag added to the policy engine must be added here too, or typed clients will drop it. 

## Properties

Name | Type
------------ | -------------
`alwaysApprove` | boolean
`injectionRisk` | boolean
`newRecipient` | Array&lt;string&gt;
`newThread` | boolean
`pii` | Array&lt;string&gt;
`recipientCount` | number

## Example

```typescript
import type { PolicyFlags } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "alwaysApprove": null,
  "injectionRisk": null,
  "newRecipient": null,
  "newThread": null,
  "pii": null,
  "recipientCount": null,
} satisfies PolicyFlags

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyFlags
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


