
# ThreadMessage


## Properties

Name | Type
------------ | -------------
`id` | string
`direction` | string
`rfcMessageId` | string
`inReplyTo` | string
`subject` | string
`from` | string
`to` | Array&lt;string&gt;
`snippet` | string
`hasAttachments` | boolean
`attachments` | [Array&lt;Attachment&gt;](Attachment.md)
`annotations` | [Annotations](Annotations.md)
`receivedAt` | Date

## Example

```typescript
import type { ThreadMessage } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "direction": null,
  "rfcMessageId": null,
  "inReplyTo": null,
  "subject": null,
  "from": null,
  "to": null,
  "snippet": null,
  "hasAttachments": null,
  "attachments": null,
  "annotations": null,
  "receivedAt": null,
} satisfies ThreadMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


