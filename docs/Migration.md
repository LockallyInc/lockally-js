
# Migration


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`credentialId` | string
`name` | string
`status` | string
`sourceProvider` | string
`sourceSummary` | string
`settings` | [MigrationSettings](MigrationSettings.md)
`errorMessage` | string
`startedAt` | Date
`completedAt` | Date
`mailboxCount` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Migration } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "credentialId": null,
  "name": null,
  "status": null,
  "sourceProvider": null,
  "sourceSummary": null,
  "settings": null,
  "errorMessage": null,
  "startedAt": null,
  "completedAt": null,
  "mailboxCount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Migration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Migration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


