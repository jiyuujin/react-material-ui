# React Material UI

<p align="left">
  <a href="https://npmjs.com/package/@nekohack/material-ui">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/material-ui/latest.svg?style=flat-square">
  </a>
  <!--
  <a href="https://npmjs.com/package/@nekohack/material-ui">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/material-ui/beta.svg?style=flat-square">
  </a>
  -->
  <a href="https://npmjs.com/package/@nekohack/material-ui">
    <img alt="" src="https://img.shields.io/npm/dt/@nekohack/material-ui.svg?style=flat-square">
  </a>
</p>

## Installation

Install [@nekohack/material-ui](https://www.npmjs.com/package/@nekohack/material-ui) package.

```bash
npm i @nekohack/material-ui
npm i react react-dom styled-components

yarn add @nekohack/material-ui
yarn add react react-dom styled-components
```

## Atomic Components

### Button

```tsx
import * as React from 'react'

import { MaterialButton } from '@nekohack/material-ui'

export const App = () => {
    const submit = () => {
        //
    }
    return (
        <>
            {/* Normal Button */}
            <MaterialButton onClick={submit}>Button</MaterialButton>
            {/* Primary Button */}
            <MaterialButton color={'primary'} onClick={submit}>Button</MaterialButton>
            {/* Secondary Button */}
            <MaterialButton color={'secondary'} onClick={submit}>Button</MaterialButton>
        </>
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| color | `PropTypes.Color` | `` |
| children | `React.ReactNode` | `` |
| onClick | `Function` | `` |

### Input

```tsx
import * as React from 'react'

import { MaterialInput } from '@nekohack/material-ui'

export const App = () => {
    const [value, setValue] = React.useState('Input')
    return (
        <MaterialInput value={value} onChange={setValue} />
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| id | `String` | `` |
| role | `String` | `` |
| label | `String` | `` |
| explain | `String` | `` |
| value | `String` | `` |
| placeholder | `String` | `` |
| password | `String` | `` |
| targets | `Array<String>` | `[]` |
| multiline | `Boolean` | `false` |
| onChange | `Function` | `` |

### Label

```tsx
import * as React from 'react'

import { MaterialLabel } from '@nekohack/material-ui'

export const App = () => {
    return (
        <MaterialLabel>Label</MaterialLabel>
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| children | `React.ReactNode` | `` |

### Select

```tsx
import * as React from 'react'

import { MaterialSelect } from '@nekohack/material-ui'

const options = [
    {
        value: 1,
        text: 'Angular',
    },
    {
        value: 2,
        text: 'React',
    },
    {
        value: 3,
        text: 'Vue',
    },
]

export const App = () => {
    const [value, setValue] = React.useState(1)
    return (
        <MaterialSelect options={options} value={value} onChange={setValue} />
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| id | `String` | `` |
| label | `String` | `` |
| options | `Array<{ value: number text: string}>` | `` |
| value | `Number` | `` |
| onChange | `Function` | `` |
