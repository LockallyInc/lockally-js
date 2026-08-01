
# Calendar


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`name` | string
`color` | string
`ownerEmail` | string
`description` | string
`visibility` | string
`feedUrl` | string
`eventCount` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Calendar } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "name": null,
  "color": null,
  "ownerEmail": null,
  "description": null,
  "visibility": null,
  "feedUrl": null,
  "eventCount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Calendar

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Calendar
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


