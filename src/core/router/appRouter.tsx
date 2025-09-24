import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { RouteConfig } from './types'

// ================================
// INTERFACES & TYPES
// ================================

/**
 * Props interface for AppRouter component
 */
interface AppRouterProps {
  routes: RouteConfig[]
}

/**
 * Props interface for RouteRenderer component
 */
interface RouteRendererProps {
  route: RouteConfig
}

// ================================
// HELPER COMPONENTS
// ================================

/**
 * RouteRenderer component that handles individual route rendering and document title setting
 */
const RouteRenderer: React.FC<RouteRendererProps> = ({ route }) => {
  const { element: Element, title } = route

  // ================================
  // EFFECTS
  // ================================
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  // ================================
  // RENDER
  // ================================
  return <Element />
}

// ================================
// MAIN COMPONENT
// ================================

/**
 * AppRouter component that manages application routing with automatic scroll-to-top
 * and dynamic document title setting based on route configuration
 */
export const AppRouter: React.FC<AppRouterProps> = ({ routes }) => {
  // ================================
  // HOOKS
  // ================================
  const location = useLocation()

  // ================================
  // EFFECTS
  // ================================
  useEffect(() => {
    // Função para fazer scroll to top nos elementos corretos
    const scrollToTop = () => {
      // Tenta fazer scroll no window primeiro (fallback)
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // Desktop: busca pela div com scroll do desktop
      const desktopScrollContainer = document.querySelector(
        '.md\\:ml-80.overflow-y-auto'
      )
      if (desktopScrollContainer) {
        desktopScrollContainer.scrollTop = 0
      }

      // Mobile: busca pela div com scroll do mobile
      const mobileScrollContainer = document.querySelector(
        '.flex-1.px-5.pb-5.overflow-y-auto'
      )
      if (mobileScrollContainer) {
        mobileScrollContainer.scrollTop = 0
      }

      // Alternativa mais robusta: busca por qualquer elemento com overflow-y-auto
      const scrollContainers = document.querySelectorAll(
        '[class*="overflow-y-auto"]'
      )
      scrollContainers.forEach((container) => {
        if (container.scrollTop > 0) {
          container.scrollTop = 0
        }
      })
    }

    // Executa imediatamente
    scrollToTop()

    // Executa após um pequeno delay para garantir que a navegação foi completada
    const timeoutId = setTimeout(scrollToTop, 100)

    return () => clearTimeout(timeoutId)
  }, [location.pathname])

  // ================================
  // RENDER HELPERS
  // ================================
  const renderRoutes = () =>
    routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={<RouteRenderer route={route} />}
      />
    ))

  const renderFallbackRoute = () => (
    <Route path="*" element={<Navigate to="/Vextro" replace />} />
  )

  // ================================
  // MAIN RENDER
  // ================================
  return (
    <Routes>
      {renderRoutes()}
      {renderFallbackRoute()}
    </Routes>
  )
}
