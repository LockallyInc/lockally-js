
# MessageDetail

A single message with the content captured at send time. Returned only by GET /v1/messages/{id} (the list stays summary-only). Attachments are not returned. 

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`messageId` | string
`sender` | string
`recipients` | Array&lt;string&gt;
`subject` | string
`status` | string
`queuedAt` | Date
`updatedAt` | Date
`bounceReason` | string
`sizeBytes` | number
`from` | string
`to` | Array&lt;string&gt;
`cc` | Array&lt;string&gt;
`bcc` | Array&lt;string&gt;
`text` | string
`html` | string
`headers` | { [key: string]: string; }

## Example

```typescript
import type { MessageDetail } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "messageId": null,
  "sender": null,
  "recipients": null,
  "subject": null,
  "status": null,
  "queuedAt": null,
  "updatedAt": null,
  "bounceReason": null,
  "sizeBytes": null,
  "from": null,
  "to": null,
  "cc": null,
  "bcc": null,
  "text": null,
  "html": null,
  "headers": null,
} satisfies MessageDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


