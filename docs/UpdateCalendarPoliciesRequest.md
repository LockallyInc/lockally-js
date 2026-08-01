
# UpdateCalendarPoliciesRequest


## Properties

Name | Type
------------ | -------------
`maxMeetingDurationMins` | number
`workingHoursStart` | string
`workingHoursEnd` | string
`bookingWindowDays` | number
`recurringMeetingLimit` | number
`resourceApprovalMode` | string
`externalInvitesAllowed` | boolean
`externalSharingAllowed` | boolean
`publicLinksEnabled` | boolean

## Example

```typescript
import type { UpdateCalendarPoliciesRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "maxMeetingDurationMins": null,
  "workingHoursStart": null,
  "workingHoursEnd": null,
  "bookingWindowDays": null,
  "recurringMeetingLimit": null,
  "resourceApprovalMode": null,
  "externalInvitesAllowed": null,
  "externalSharingAllowed": null,
  "publicLinksEnabled": null,
} satisfies UpdateCalendarPoliciesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCalendarPoliciesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


