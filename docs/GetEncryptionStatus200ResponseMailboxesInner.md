
# GetEncryptionStatus200ResponseMailboxesInner


## Properties

Name | Type
------------ | -------------
`email` | string
`hasKey` | boolean
`keyCreatedAt` | Date
`hasRecovery` | boolean
`recoverySetAt` | Date

## Example

```typescript
import type { GetEncryptionStatus200ResponseMailboxesInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "hasKey": null,
  "keyCreatedAt": null,
  "hasRecovery": null,
  "recoverySetAt": null,
} satisfies GetEncryptionStatus200ResponseMailboxesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEncryptionStatus200ResponseMailboxesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


