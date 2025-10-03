import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { MainLayout } from '@/shared/components/layouts'
import { AppRouterProps, RouteRendererProps } from '@types'

// ================================
// FUNÇÕES AUXILIARES
// ================================

/**
 * Executa scroll para o topo em múltiplos elementos containers
 */
const scrollToTop = (): void => {
  // Window fallback
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

// ================================
// COMPONENTES AUXILIARES
// ================================

/**
 * Componente RouteRenderer que gerencia a renderização de rotas individuais
 * e configuração do título do documento
 */
const RouteRenderer: React.FC<RouteRendererProps> = ({ route }) => {
  const { element: Element, title, useLayout = true } = route

  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  // Se useLayout for false, renderiza só o componente
  if (!useLayout) {
    return <Element />
  }

  // Se useLayout for true (padrão), usa o MainLayout
  return (
    <MainLayout>
      <Element />
    </MainLayout>
  )
}

// ================================
// COMPONENTE PRINCIPAL
// ================================

/**
 * Componente AppRouter que gerencia o roteamento da aplicação com scroll-to-top
 * automático e configuração dinâmica de título do documento baseado na configuração de rotas
 */
export const AppRouter: React.FC<AppRouterProps> = ({ routes }) => {
  const location = useLocation()

  // ================================
  // EFEITOS
  // ================================

  useEffect(() => {
    // Executa imediatamente
    scrollToTop()

    // Executa após um pequeno delay para garantir que a navegação foi completada
    const timeoutId = setTimeout(scrollToTop, 100)

    return () => clearTimeout(timeoutId)
  }, [location.pathname])

  // ================================
  // FUNÇÕES DE RENDERIZAÇÃO
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
    <Route path="*" element={<Navigate to="/vextro" replace />} />
  )

  // ================================
  // RENDERIZAÇÃO
  // ================================

  return (
    <Routes>
      {renderRoutes()}
      {renderFallbackRoute()}
    </Routes>
  )
}
