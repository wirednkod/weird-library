# Components React Library

A library containing common reusable components.

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

## Themes

The library is using a default theme.json that can be copied and replaced.

The input `theme.json` (if has correct structure) will replace the default one. If value is not provided then the theme will fallback to default one

## Development ([Storybook](https://storybook.js.org/))

Project has integrated storybook for showcasing the components.
In order to develop live a component just run:

- `npm run storbook` or
- `yarn storybook`
  Making changes on the components will appear immediately in the page mentioned above
