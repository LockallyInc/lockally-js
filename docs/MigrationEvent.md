
# MigrationEvent


## Properties

Name | Type
------------ | -------------
`id` | string
`migrationId` | string
`tenantId` | string
`mailboxId` | string
`eventType` | string
`actor` | string
`oldStatus` | string
`newStatus` | string
`detail` | string
`createdAt` | Date

## Example

```typescript
import type { MigrationEvent } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "migrationId": null,
  "tenantId": null,
  "mailboxId": null,
  "eventType": null,
  "actor": null,
  "oldStatus": null,
  "newStatus": null,
  "detail": null,
  "createdAt": null,
} satisfies MigrationEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MigrationEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


