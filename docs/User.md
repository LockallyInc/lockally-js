
# User


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`email` | string
`firstName` | string
`lastName` | string
`title` | string
`department` | string
`status` | string
`createdAt` | Date
`updatedAt` | Date
`mailboxCount` | number

## Example

```typescript
import type { User } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "email": null,
  "firstName": null,
  "lastName": null,
  "title": null,
  "department": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
  "mailboxCount": null,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


