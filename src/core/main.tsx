import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { I18nProvider, ThemeProvider } from './providers'
import { AppLoader } from '@/shared/components/ui/AppLoader'

import '@styles/global.css'

// ================================
// CONSTANTS
// ================================

const DEVELOPER_CREDIT =
  '%cDeveloped by Dionatha Goulart © 2025 "https://github.com/DionathaGoulart"'
const CONSOLE_STYLE = 'color: #ff0000; font-size: 14px; font-weight: bold;'

// ================================
// INITIALIZATION
// ================================

console.log(DEVELOPER_CREDIT, CONSOLE_STYLE)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLoader>
      <I18nProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </I18nProvider>
    </AppLoader>
  </StrictMode>
)
