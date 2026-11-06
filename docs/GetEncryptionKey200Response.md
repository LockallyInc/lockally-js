
# GetEncryptionKey200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`email` | string
`publicKey` | string
`encryptedPrivateKey` | string
`kdfParams` | object
`version` | number
`createdAt` | Date
`rotatedAt` | Date
`hasRecovery` | boolean
`recoverySetAt` | Date
`recoveryBlob` | string

## Example

```typescript
import type { GetEncryptionKey200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "publicKey": null,
  "encryptedPrivateKey": null,
  "kdfParams": null,
  "version": null,
  "createdAt": null,
  "rotatedAt": null,
  "hasRecovery": null,
  "recoverySetAt": null,
  "recoveryBlob": null,
} satisfies GetEncryptionKey200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEncryptionKey200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


