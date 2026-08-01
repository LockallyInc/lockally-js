
# GetCalendarSecurity200ResponseDelegatedAccessInner


## Properties

Name | Type
------------ | -------------
`calendarId` | string
`calendarName` | string
`userEmail` | string
`role` | string
`grantedAt` | Date

## Example

```typescript
import type { GetCalendarSecurity200ResponseDelegatedAccessInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "calendarId": null,
  "calendarName": null,
  "userEmail": null,
  "role": null,
  "grantedAt": null,
} satisfies GetCalendarSecurity200ResponseDelegatedAccessInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCalendarSecurity200ResponseDelegatedAccessInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


