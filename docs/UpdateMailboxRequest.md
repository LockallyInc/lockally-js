
# UpdateMailboxRequest


## Properties

Name | Type
------------ | -------------
`password` | string
`quotaBytes` | number
`disabled` | boolean

## Example

```typescript
import type { UpdateMailboxRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "password": null,
  "quotaBytes": null,
  "disabled": null,
} satisfies UpdateMailboxRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateMailboxRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


