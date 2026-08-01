
# VacationResponder


## Properties

Name | Type
------------ | -------------
`mailboxEmail` | string
`enabled` | boolean
`params` | [VacationParams](VacationParams.md)
`script` | string
`syncedAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { VacationResponder } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "mailboxEmail": null,
  "enabled": null,
  "params": null,
  "script": null,
  "syncedAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies VacationResponder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VacationResponder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


