
# TenantHealthReport

The workspace health snapshot behind the console dashboard. DNS checks are live lookups, so a domain whose DNS cannot be read shows as a warning rather than an error.

## Properties

Name | Type
------------ | -------------
`overallScore` | number
`checks` | [Array&lt;TenantHealthCheck&gt;](TenantHealthCheck.md)
`generatedAt` | Date

## Example

```typescript
import type { TenantHealthReport } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "overallScore": null,
  "checks": null,
  "generatedAt": null,
} satisfies TenantHealthReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantHealthReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


