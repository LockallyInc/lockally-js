
# GetDomainsStatus200ResponseDomainsInner


## Properties

Name | Type
------------ | -------------
`domain` | string
`verified` | boolean
`checks` | [Array&lt;GetDomainsStatus200ResponseDomainsInnerChecksInner&gt;](GetDomainsStatus200ResponseDomainsInnerChecksInner.md)

## Example

```typescript
import type { GetDomainsStatus200ResponseDomainsInner } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "domain": null,
  "verified": null,
  "checks": null,
} satisfies GetDomainsStatus200ResponseDomainsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDomainsStatus200ResponseDomainsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


