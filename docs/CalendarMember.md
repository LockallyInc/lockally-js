
# CalendarMember


## Properties

Name | Type
------------ | -------------
`id` | string
`calendarId` | string
`tenantId` | string
`userEmail` | string
`role` | string
`createdAt` | Date

## Example

```typescript
import type { CalendarMember } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "calendarId": null,
  "tenantId": null,
  "userEmail": null,
  "role": null,
  "createdAt": null,
} satisfies CalendarMember

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CalendarMember
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


