
# SimulatedInbound


## Properties

Name | Type
------------ | -------------
`simulated` | boolean
`indexed` | boolean
`threadId` | string
`messageId` | string
`rfcMessageId` | string
`annotations` | [Annotations](Annotations.md)

## Example

```typescript
import type { SimulatedInbound } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "simulated": null,
  "indexed": null,
  "threadId": null,
  "messageId": null,
  "rfcMessageId": null,
  "annotations": null,
} satisfies SimulatedInbound

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SimulatedInbound
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


