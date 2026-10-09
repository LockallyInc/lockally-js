
# MigrationMailbox


## Properties

Name | Type
------------ | -------------
`id` | string
`migrationId` | string
`tenantId` | string
`sourceEmail` | string
`destEmail` | string
`destMailboxId` | string
`status` | string
`sourceMessageCount` | number
`syncedMessageCount` | number
`failedMessageCount` | number
`sourceSizeBytes` | number
`syncedSizeBytes` | number
`lastSyncedUid` | string
`lastSyncedAt` | Date
`errorMessage` | string
`startedAt` | Date
`completedAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { MigrationMailbox } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "migrationId": null,
  "tenantId": null,
  "sourceEmail": null,
  "destEmail": null,
  "destMailboxId": null,
  "status": null,
  "sourceMessageCount": null,
  "syncedMessageCount": null,
  "failedMessageCount": null,
  "sourceSizeBytes": null,
  "syncedSizeBytes": null,
  "lastSyncedUid": null,
  "lastSyncedAt": null,
  "errorMessage": null,
  "startedAt": null,
  "completedAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies MigrationMailbox

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MigrationMailbox
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


