
# MigrationSettings


## Properties

Name | Type
------------ | -------------
`maxConcurrentMailboxes` | number
`maxConcurrentMessages` | number
`sourceRateLimit` | number
`batchSize` | number
`skipFolders` | Array&lt;string&gt;

## Example

```typescript
import type { MigrationSettings } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "maxConcurrentMailboxes": null,
  "maxConcurrentMessages": null,
  "sourceRateLimit": null,
  "batchSize": null,
  "skipFolders": null,
} satisfies MigrationSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MigrationSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


