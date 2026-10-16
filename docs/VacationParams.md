
# VacationParams


## Properties

Name | Type
------------ | -------------
`subject` | string
`body` | string
`startsAt` | Date
`endsAt` | Date

## Example

```typescript
import type { VacationParams } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "subject": Out of office until June 5,
  "body": Hi! I'm away until June 5. For urgent matters please contact ...,
  "startsAt": null,
  "endsAt": null,
} satisfies VacationParams

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VacationParams
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


