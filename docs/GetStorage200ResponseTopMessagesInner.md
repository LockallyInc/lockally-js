
# GetStorage200ResponseTopMessagesInner


## Properties

Name | Type
------------ | -------------
`sender` | string
`subject` | string
`sizeBytes` | number
`filenames` | Array&lt;string&gt;
`queuedAt` | Date

## Example

```typescript
import type { GetStorage200ResponseTopMessagesInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "sender": null,
  "subject": null,
  "sizeBytes": null,
  "filenames": null,
  "queuedAt": null,
} satisfies GetStorage200ResponseTopMessagesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStorage200ResponseTopMessagesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


