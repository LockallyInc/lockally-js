
# Message


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

## Example

```typescript
import type { Message } from 'lockally'

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
} satisfies Message

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Message
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


