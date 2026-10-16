
# Thread


## Properties

Name | Type
------------ | -------------
`thread` | [ThreadSummary](ThreadSummary.md)
`mailbox` | string
`messages` | [Array&lt;ThreadMessage&gt;](ThreadMessage.md)

## Example

```typescript
import type { Thread } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "thread": null,
  "mailbox": null,
  "messages": null,
} satisfies Thread

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Thread
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


