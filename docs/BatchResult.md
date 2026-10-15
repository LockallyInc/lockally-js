
# BatchResult


## Properties

Name | Type
------------ | -------------
`index` | number
`id` | string
`messageId` | string
`status` | string
`error` | string

## Example

```typescript
import type { BatchResult } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "id": null,
  "messageId": null,
  "status": null,
  "error": null,
} satisfies BatchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


