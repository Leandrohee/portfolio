import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './global.css'                        //I'm using themeProvider instead
import App from './App.tsx'
import { ThemeProvider } from './context/themeToogle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
