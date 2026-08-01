
# AuditEvent


## Properties

Name | Type
------------ | -------------
`email` | string
`eventType` | string
`detail` | string
`ip` | string
`time` | Date

## Example

```typescript
import type { AuditEvent } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "eventType": null,
  "detail": null,
  "ip": null,
  "time": null,
} satisfies AuditEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


