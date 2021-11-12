# Weird Library

A library containing common reusable components, hooks and utils related to polkadotJS api.

```
npm i
```

## Usage

```tsx
import React, { Component } from "react"

import { MyComponent } from "myLibrary"

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Development ([Storybook](https://storybook.js.org/))

Project has integrated storybook for showcasing the components.
In order to develop live a component just run:

- `npm run storbook` or
- `yarn storybook`
  Making changes on the components will appear immediately in the page mentioned above
