
# UpdateResourceRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`capacity` | number
`status` | string

## Example

```typescript
import type { UpdateResourceRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "capacity": null,
  "status": null,
} satisfies UpdateResourceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateResourceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


