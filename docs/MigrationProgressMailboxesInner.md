
# MigrationProgressMailboxesInner


## Properties

Name | Type
------------ | -------------
`sourceEmail` | string
`destEmail` | string
`status` | string
`sourceMessageCount` | number
`syncedMessageCount` | number
`failedMessageCount` | number
`percentComplete` | number

## Example

```typescript
import type { MigrationProgressMailboxesInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "sourceEmail": null,
  "destEmail": null,
  "status": null,
  "sourceMessageCount": null,
  "syncedMessageCount": null,
  "failedMessageCount": null,
  "percentComplete": null,
} satisfies MigrationProgressMailboxesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MigrationProgressMailboxesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


