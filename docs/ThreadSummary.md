
# ThreadSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`subject` | string
`participants` | Array&lt;string&gt;
`messageCount` | number
`lastMessageAt` | Date
`lastDirection` | string

## Example

```typescript
import type { ThreadSummary } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "subject": null,
  "participants": null,
  "messageCount": null,
  "lastMessageAt": null,
  "lastDirection": null,
} satisfies ThreadSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


