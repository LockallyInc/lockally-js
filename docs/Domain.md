
# Domain


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`domain` | string
`verificationToken` | string
`verified` | boolean
`verifiedAt` | Date
`dkimSelector` | string
`dkimPublicRecord` | string
`createdAt` | Date
`records` | [Array&lt;DNSRecord&gt;](DNSRecord.md)

## Example

```typescript
import type { Domain } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "domain": acme.com,
  "verificationToken": lkv-zyj4p5qbv6i4rjm7s3wrrkr3jzo3lrvy,
  "verified": null,
  "verifiedAt": null,
  "dkimSelector": lockally,
  "dkimPublicRecord": v=DKIM1; k=rsa; p=MIIBIjAN...,
  "createdAt": null,
  "records": null,
} satisfies Domain

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Domain
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


