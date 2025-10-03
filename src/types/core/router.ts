import React from 'react'

// ================================
// INTERFACES
// ================================

/**
 * Interface de configuração para rotas da aplicação
 */
export interface RouteConfig {
  /** O caminho da URL para a rota */
  path: string
  /** Componente React a ser renderizado para esta rota */
  element: React.ComponentType
  /** Título opcional para a rota (ex: para título da página ou navegação) */
  title?: string
  /** Define se usa ou não o mainlayout */
  useLayout?: boolean
}

/**
 * Interface de props para o componente AppRouter
 */
export interface AppRouterProps {
  /** Array de configurações de rotas */
  routes: RouteConfig[]
}

/**
 * Interface de props para o componente RouteRenderer
 */
export interface RouteRendererProps {
  /** Configuração da rota a ser renderizada */
  route: RouteConfig
}
