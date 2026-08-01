
# GetStorage200Response


## Properties

Name | Type
------------ | -------------
`totalBytes` | number
`allocBytes` | number
`perSeatBytes` | number
`topMailboxes` | [Array&lt;GetStorage200ResponseTopMailboxesInner&gt;](GetStorage200ResponseTopMailboxesInner.md)
`topMessages` | [Array&lt;GetStorage200ResponseTopMessagesInner&gt;](GetStorage200ResponseTopMessagesInner.md)
`generatedAt` | Date

## Example

```typescript
import type { GetStorage200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "totalBytes": null,
  "allocBytes": null,
  "perSeatBytes": null,
  "topMailboxes": null,
  "topMessages": null,
  "generatedAt": null,
} satisfies GetStorage200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStorage200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


