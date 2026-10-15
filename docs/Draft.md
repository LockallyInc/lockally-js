
# Draft


## Properties

Name | Type
------------ | -------------
`id` | string
`mailboxId` | string
`mailbox` | string
`threadId` | string
`to` | Array&lt;string&gt;
`cc` | Array&lt;string&gt;
`subject` | string
`bodyText` | string
`status` | string
`policyFlags` | { [key: string]: any; }
`reviewedAt` | Date
`sentMessageId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Draft } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mailboxId": null,
  "mailbox": null,
  "threadId": null,
  "to": null,
  "cc": null,
  "subject": null,
  "bodyText": null,
  "status": null,
  "policyFlags": null,
  "reviewedAt": null,
  "sentMessageId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Draft

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Draft
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


