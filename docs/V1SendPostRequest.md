
# V1SendPostRequest


## Properties

Name | Type
------------ | -------------
`from` | string
`to` | Array&lt;string&gt;
`cc` | Array&lt;string&gt;
`bcc` | Array&lt;string&gt;
`subject` | string
`text` | string
`html` | string
`headers` | { [key: string]: string; }
`unsubscribe` | boolean
`templateId` | string
`variables` | { [key: string]: string; }
`sendAt` | Date
`attachments` | [Array&lt;V1SendPostRequestAttachmentsInner&gt;](V1SendPostRequestAttachmentsInner.md)

## Example

```typescript
import type { V1SendPostRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "from": null,
  "to": null,
  "cc": null,
  "bcc": null,
  "subject": null,
  "text": null,
  "html": null,
  "headers": null,
  "unsubscribe": null,
  "templateId": null,
  "variables": null,
  "sendAt": null,
  "attachments": null,
} satisfies V1SendPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1SendPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


