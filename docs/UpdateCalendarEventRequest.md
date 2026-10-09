
# UpdateCalendarEventRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`location` | string
`startsAt` | Date
`endsAt` | Date
`allDay` | boolean

## Example

```typescript
import type { UpdateCalendarEventRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "location": null,
  "startsAt": null,
  "endsAt": null,
  "allDay": null,
} satisfies UpdateCalendarEventRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCalendarEventRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


