
# MigrationDNSCheck

Live DNS readiness of the destination domains, for deciding when to cut over. `ready` is true only when every domain\'s MX points at Lockally and its SPF authorises it.

## Properties

Name | Type
------------ | -------------
`ready` | boolean
`domains` | [Array&lt;MigrationDomainDNS&gt;](MigrationDomainDNS.md)

## Example

```typescript
import type { MigrationDNSCheck } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "ready": null,
  "domains": null,
} satisfies MigrationDNSCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MigrationDNSCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


