
# GetDomainsStatus200Response


## Properties

Name | Type
------------ | -------------
`domains` | [Array&lt;GetDomainsStatus200ResponseDomainsInner&gt;](GetDomainsStatus200ResponseDomainsInner.md)
`generatedAt` | Date

## Example

```typescript
import type { GetDomainsStatus200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "domains": null,
  "generatedAt": null,
} satisfies GetDomainsStatus200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDomainsStatus200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


