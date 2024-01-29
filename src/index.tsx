import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clink from './App'

const container = document.getElementById('root')
if (container == null) throw new Error('No container with id "root" found')

const root = ReactDOM.createRoot(container)
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Clink to='http://npmjs.com'>Test</Clink>

        <Routes>
          <Route path='/' element={<>Home page</>} />
          <Route path='/test' element={<>Test page</>} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
root.render(app)
