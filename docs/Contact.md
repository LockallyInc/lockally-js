
# Contact


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`name` | string
`email` | string
`phone` | string
`company` | string
`notes` | string
`contactType` | string
`source` | string
`department` | string
`role` | string
`status` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Contact } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "name": null,
  "email": null,
  "phone": null,
  "company": null,
  "notes": null,
  "contactType": null,
  "source": null,
  "department": null,
  "role": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Contact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Contact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


