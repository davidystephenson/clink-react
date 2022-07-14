import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Clink from './App'

const container = document.getElementById('root')
if (container == null) throw new Error('No container with id "root" found')

const root = ReactDOM.createRoot(container)
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Clink to='/test'>Test</Clink>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
root.render(app)
