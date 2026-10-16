
# MailboxGrant


## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`mailboxId` | string
`mailbox` | string
`createdAt` | Date

## Example

```typescript
import type { MailboxGrant } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "mailboxId": null,
  "mailbox": null,
  "createdAt": null,
} satisfies MailboxGrant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailboxGrant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


