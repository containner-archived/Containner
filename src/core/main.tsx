import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { I18nProvider } from '@/shared/contexts/I18nContext'
import '@styles/global.css'
import faviconUrl from '/favicon.png'

// Atualiza o favicon imediatamente
const updateFavicon = () => {
  const existingFavicon = document.querySelector('link[rel="icon"]')
  if (existingFavicon) {
    existingFavicon.remove()
  }

  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  link.href = faviconUrl
  document.head.appendChild(link)
}

// Executa antes do render
updateFavicon()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>
)
