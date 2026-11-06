
# MigrationDomainDNS

Each record is `healthy`, `warning` or `critical`, or empty when it could not be checked.

## Properties

Name | Type
------------ | -------------
`domain` | string
`mx` | string
`spf` | string
`dkim` | string
`dmarc` | string

## Example

```typescript
import type { MigrationDomainDNS } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "domain": null,
  "mx": null,
  "spf": null,
  "dkim": null,
  "dmarc": null,
} satisfies MigrationDomainDNS

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MigrationDomainDNS
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


