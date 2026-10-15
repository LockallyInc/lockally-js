
# ThreadList


## Properties

Name | Type
------------ | -------------
`mailbox` | string
`threads` | [Array&lt;ThreadSummary&gt;](ThreadSummary.md)

## Example

```typescript
import type { ThreadList } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "mailbox": null,
  "threads": null,
} satisfies ThreadList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


