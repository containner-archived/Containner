// ================================
// INTERFACES
// ================================

/**
 * Interface de configuração do Google Analytics
 */
export interface AnalyticsConfig {
  /** ID de medição do Google Analytics (GA4) */
  measurementId: string
  /** Se o rastreamento de analytics está habilitado */
  enabled: boolean
}

/**
 * Estrutura de dados do evento de visualização de página
 */
export interface PageViewEvent {
  /** Título da página atual */
  page_title: string
  /** URL completa da página atual */
  page_location: string
}

/**
 * Estrutura de dados de evento customizado
 */
export interface CustomEvent {
  /** Nome do evento customizado */
  event_name: string
  /** Parâmetros adicionais para o evento (opcional) */
  event_parameters?: Record<string, any>
}

/**
 * Estrutura de dados das preferências do usuário
 */
export interface UserPreferences {
  /** Preferência de tema selecionada */
  theme: 'light' | 'dark'
  /** Preferência de idioma selecionada */
  language: 'pt' | 'en'
  /** Localização do usuário (opcional) */
  location?: string
}

/**
 * Opções de configuração do hook de analytics
 */
export interface UseAnalyticsOptions {
  /** Se deve rastrear visualizações de página automaticamente */
  trackPageViews?: boolean
  /** Título personalizado da página para sobrescrever o padrão */
  pageTitle?: string
}
