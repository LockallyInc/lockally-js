
# Annotations

Signals computed at ingest, before an agent sees the message. A key is absent when its check did not fire. 

## Properties

Name | Type
------------ | -------------
`attachmentTypes` | Array&lt;string&gt;
`meetingRequest` | boolean
`injectionRisk` | [InjectionRisk](InjectionRisk.md)

## Example

```typescript
import type { Annotations } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "attachmentTypes": null,
  "meetingRequest": null,
  "injectionRisk": null,
} satisfies Annotations

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Annotations
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


