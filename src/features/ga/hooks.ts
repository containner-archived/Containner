import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from './gtag'

// ================================
// INTERFACES
// ================================

/**
 * Opções de configuração do hook de analytics
 */
interface UseAnalyticsOptions {
  /** Se deve rastrear visualizações de página automaticamente */
  trackPageViews?: boolean
  /** Título personalizado da página para sobrescrever o padrão */
  pageTitle?: string
}

// ================================
// HOOKS
// ================================

/**
 * Hook para rastrear automaticamente mudanças de rota e visualizações de página
 * Integra com React Router para monitorar eventos de navegação
 *
 * @param {UseAnalyticsOptions} options - Opções de configuração para rastreamento de analytics
 */
export const useAnalytics = (options: UseAnalyticsOptions = {}) => {
  const location = useLocation()
  const { trackPageViews = true, pageTitle } = options

  useEffect(() => {
    if (!trackPageViews) return

    trackPageView({
      page_title: pageTitle || document.title,
      page_location: window.location.href
    })
  }, [location.pathname, trackPageViews, pageTitle])
}
