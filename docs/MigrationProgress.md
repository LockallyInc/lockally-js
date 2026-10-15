
# MigrationProgress


## Properties

Name | Type
------------ | -------------
`migrationId` | string
`status` | string
`totalMailboxes` | number
`completedMailboxes` | number
`failedMailboxes` | number
`totalMessages` | number
`syncedMessages` | number
`failedMessages` | number
`percentComplete` | number
`mailboxes` | [Array&lt;MigrationProgressMailboxesInner&gt;](MigrationProgressMailboxesInner.md)

## Example

```typescript
import type { MigrationProgress } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "migrationId": null,
  "status": null,
  "totalMailboxes": null,
  "completedMailboxes": null,
  "failedMailboxes": null,
  "totalMessages": null,
  "syncedMessages": null,
  "failedMessages": null,
  "percentComplete": null,
  "mailboxes": null,
} satisfies MigrationProgress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MigrationProgress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


