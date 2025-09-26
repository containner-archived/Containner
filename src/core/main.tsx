import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@styles/global.css'
import App from './App'
import { I18nProvider } from '@/shared/contexts/I18nContext'

console.log(
  '%cDeveloped by Dionatha Goulart © 2025 "https://github.com/DionathaGoulart"',
  'color: #ff0000; font-size: 14px; font-weight: bold;'
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>
)
