
# V1ApiKeysPost201Response


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`prefix` | string
`scopes` | Array&lt;string&gt;
`label` | string
`lastUsedAt` | Date
`revokedAt` | Date
`createdAt` | Date
`secret` | string

## Example

```typescript
import type { V1ApiKeysPost201Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "prefix": fbl73bhj,
  "scopes": null,
  "label": ci-pipeline,
  "lastUsedAt": null,
  "revokedAt": null,
  "createdAt": null,
  "secret": lk_live_fbl73bhj_sfvqy7y757cnvu33bgqdpyrrhq3tyyf3,
} satisfies V1ApiKeysPost201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1ApiKeysPost201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


