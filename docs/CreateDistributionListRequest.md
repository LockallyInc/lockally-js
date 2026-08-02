
# CreateDistributionListRequest


## Properties

Name | Type
------------ | -------------
`listAddress` | string
`name` | string
`members` | Array&lt;string&gt;

## Example

```typescript
import type { CreateDistributionListRequest } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "listAddress": null,
  "name": null,
  "members": null,
} satisfies CreateDistributionListRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDistributionListRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


