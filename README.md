# `Clink` (`C`hakra `link`)

## Installation

```sh
npm install clink-react
```

## Usage

```JSX
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Clink from 'clink-react'

<BrowserRouter>
  <ChakraProvider>
    <Clink to='/' color='blue'>Home</Clink>
    <Clink to='/test'>Test</Clink>
    <Clink to='http://npmjs.com' isExternal>NPM</Clink>

    <Routes>
      <Route path='/' element={<>Home page</>} />
      <Route path='/test' element={<>Test page</>} />
    </Routes>
  </ChakraProvider>
</BrowserRouter>
```

## Problem

Chakra UI's `Link` component provides styling, but React Router's `Link` component provides routing functionality.
Effectively combining them in a reusable component requires boilerplate in the form of combining prop types or awkward wrapping, as well as aliasing one or both imports.

### Without `Clink`

```TSX
import { HStack, Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom'

function NavbarLink (props: ChakraLinkProps & ReactRouterLinkProps): JSX.Element {
  return <ChakraLink as={ReactLink} color='blue' {...props} />
}

function Navbar () {
  return (
    <HStack>
      <NavbarLink to='http://npmjs.com' isExternal>NPM</NavbarLink>
      <NavbarLink to='/about'>About</NavbarLink>
    </HStack>
  )
}
```

## Solution

`Clink` collapses both components into one.
It takes that takes union of their props types as its props.
It can receive any props that either Chakra or React Router's `Link` can.
The type of the props it can receive is exported as `ClinkProps`.

### With `Clink`

```TSX
import { HStack } from '@chakra-ui/react'
import Clink, { ClinkProps } from 'clink-react'

function NavbarLink (props: ClinkProps): JSX.Element {
  return <Clink color={blue} {...props} />
}

function Navbar () {
  return (
    <HStack>
      <NavbarLink to='http://npmjs.com' isExternal>NPM</NavbarLink>
      <NavbarLink to='/about'>About</NavbarLink>
    </HStack>
  )
}
```
