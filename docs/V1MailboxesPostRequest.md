
# V1MailboxesPostRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`password` | string
`quotaBytes` | number

## Example

```typescript
import type { V1MailboxesPostRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "email": alice@acme.com,
  "password": null,
  "quotaBytes": null,
} satisfies V1MailboxesPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1MailboxesPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


