
# Whoami


## Properties

Name | Type
------------ | -------------
`tenant` | [WhoamiTenant](WhoamiTenant.md)
`scopes` | Array&lt;string&gt;
`auth` | string
`key` | [WhoamiKey](WhoamiKey.md)

## Example

```typescript
import type { Whoami } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "tenant": null,
  "scopes": null,
  "auth": null,
  "key": null,
} satisfies Whoami

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Whoami
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


