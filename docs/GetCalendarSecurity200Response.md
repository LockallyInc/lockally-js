
# GetCalendarSecurity200Response


## Properties

Name | Type
------------ | -------------
`totalCalendars` | number
`publicCalendars` | number
`privateCalendars` | number
`totalMembers` | number
`delegatedAccess` | [Array&lt;GetCalendarSecurity200ResponseDelegatedAccessInner&gt;](GetCalendarSecurity200ResponseDelegatedAccessInner.md)
`publicCalendarList` | [Array&lt;GetCalendarSecurity200ResponsePublicCalendarListInner&gt;](GetCalendarSecurity200ResponsePublicCalendarListInner.md)
`alerts` | [Array&lt;GetCalendarSecurity200ResponseAlertsInner&gt;](GetCalendarSecurity200ResponseAlertsInner.md)
`externalSharing` | [GetCalendarSecurity200ResponseExternalSharing](GetCalendarSecurity200ResponseExternalSharing.md)

## Example

```typescript
import type { GetCalendarSecurity200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "totalCalendars": null,
  "publicCalendars": null,
  "privateCalendars": null,
  "totalMembers": null,
  "delegatedAccess": null,
  "publicCalendarList": null,
  "alerts": null,
  "externalSharing": null,
} satisfies GetCalendarSecurity200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCalendarSecurity200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


