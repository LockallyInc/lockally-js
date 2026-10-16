
# ContactLookupHistory

Correspondence history, limited to the mailboxes this key is granted.

## Properties

Name | Type
------------ | -------------
`threadCount` | number
`firstSeen` | Date
`lastSeen` | Date

## Example

```typescript
import type { ContactLookupHistory } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "threadCount": null,
  "firstSeen": null,
  "lastSeen": null,
} satisfies ContactLookupHistory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactLookupHistory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


