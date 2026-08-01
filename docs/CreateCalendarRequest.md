
# CreateCalendarRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`color` | string
`ownerEmail` | string
`description` | string
`visibility` | string

## Example

```typescript
import type { CreateCalendarRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "color": null,
  "ownerEmail": null,
  "description": null,
  "visibility": null,
} satisfies CreateCalendarRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCalendarRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


