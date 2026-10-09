
# CalendarEvent


## Properties

Name | Type
------------ | -------------
`id` | string
`calendarId` | string
`tenantId` | string
`uid` | string
`title` | string
`description` | string
`location` | string
`startsAt` | Date
`endsAt` | Date
`allDay` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { CalendarEvent } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "calendarId": null,
  "tenantId": null,
  "uid": null,
  "title": null,
  "description": null,
  "location": null,
  "startsAt": null,
  "endsAt": null,
  "allDay": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies CalendarEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CalendarEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


