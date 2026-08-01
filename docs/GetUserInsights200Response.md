
# GetUserInsights200Response


## Properties

Name | Type
------------ | -------------
`recentlyAdded` | [Array&lt;UserEvent&gt;](UserEvent.md)
`recentlySuspended` | [Array&lt;UserEvent&gt;](UserEvent.md)
`inactive30d` | [Array&lt;UserEvent&gt;](UserEvent.md)
`seatsUsed` | number
`seatsAlloc` | number
`generatedAt` | Date

## Example

```typescript
import type { GetUserInsights200Response } from 'lockally'

// TODO: Update the object below with actual values
const example = {
  "recentlyAdded": null,
  "recentlySuspended": null,
  "inactive30d": null,
  "seatsUsed": null,
  "seatsAlloc": null,
  "generatedAt": null,
} satisfies GetUserInsights200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserInsights200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


