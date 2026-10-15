
# RotateEncryptionKeyRequest


## Properties

Name | Type
------------ | -------------
`mailboxEmail` | string
`encryptedPrivateKey` | string
`kdfParams` | object

## Example

```typescript
import type { RotateEncryptionKeyRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "mailboxEmail": null,
  "encryptedPrivateKey": null,
  "kdfParams": null,
} satisfies RotateEncryptionKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RotateEncryptionKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


