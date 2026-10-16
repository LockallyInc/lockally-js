
# GetContactList200Response


## Properties

Name | Type
------------ | -------------
`list` | [ContactList](ContactList.md)
`members` | [Array&lt;GetContactList200ResponseMembersInner&gt;](GetContactList200ResponseMembersInner.md)

## Example

```typescript
import type { GetContactList200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "list": null,
  "members": null,
} satisfies GetContactList200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetContactList200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


