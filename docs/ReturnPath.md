
# ReturnPath


## Properties

Name | Type
------------ | -------------
`status` | string
`host` | string
`records` | [Array&lt;DNSRecord&gt;](DNSRecord.md)
`check` | [ReturnPathCheck](ReturnPathCheck.md)
`requestedAt` | Date
`verifiedAt` | Date

## Example

```typescript
import type { ReturnPath } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "host": bounces.acme.com,
  "records": null,
  "check": null,
  "requestedAt": null,
  "verifiedAt": null,
} satisfies ReturnPath

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReturnPath
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


