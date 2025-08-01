import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
// import { system } from '@chakra-ui/react/preset'
import system from './themes/ChakraTheme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
    <App />
    </ChakraProvider>
  </StrictMode>,
)
