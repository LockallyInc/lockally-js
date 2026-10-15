
# GetCalendarOverview200Response


## Properties

Name | Type
------------ | -------------
`totalCalendars` | number
`activeCalendars` | number
`sharedCalendars` | number
`eventsThisMonth` | number
`upcomingOrgEvents` | number
`bookableResources` | number
`accessGranted` | number
`accessOrgWide` | number
`activity` | [Array&lt;GetCalendarOverview200ResponseActivityInner&gt;](GetCalendarOverview200ResponseActivityInner.md)

## Example

```typescript
import type { GetCalendarOverview200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "totalCalendars": null,
  "activeCalendars": null,
  "sharedCalendars": null,
  "eventsThisMonth": null,
  "upcomingOrgEvents": null,
  "bookableResources": null,
  "accessGranted": null,
  "accessOrgWide": null,
  "activity": null,
} satisfies GetCalendarOverview200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCalendarOverview200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


