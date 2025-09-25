import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@styles/global.css'
import App from './App'
import { I18nProvider } from '@/shared/contexts/I18nContext'

const ensureFavicon = () => {
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
  if (link) {
    link.href = '/favicon.png?' + Date.now()
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureFavicon)
} else {
  ensureFavicon()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>
)
