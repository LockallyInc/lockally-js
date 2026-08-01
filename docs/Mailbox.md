
# Mailbox


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`domainId` | string
`email` | string
`quotaBytes` | number
`disabled` | boolean
`disabledAt` | Date
`softDeletedAt` | Date
`hardDeleteAfter` | Date
`createdAt` | Date
`password` | string

## Example

```typescript
import type { Mailbox } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "domainId": null,
  "email": null,
  "quotaBytes": null,
  "disabled": null,
  "disabledAt": null,
  "softDeletedAt": null,
  "hardDeleteAfter": null,
  "createdAt": null,
  "password": null,
} satisfies Mailbox

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Mailbox
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


