
# DNSRecord


## Properties

Name | Type
------------ | -------------
`type` | string
`name` | string
`value` | string
`ttl` | number
`priority` | number
`purpose` | string

## Example

```typescript
import type { DNSRecord } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "name": null,
  "value": null,
  "ttl": 300,
  "priority": null,
  "purpose": null,
} satisfies DNSRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DNSRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


