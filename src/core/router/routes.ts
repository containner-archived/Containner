// routes.ts - Arquivo de configuração das rotas
import HomePage from '@/pages/Home'
import { RouteConfig } from '@core/router'

/**
 * Application routes configuration
 * Defines all available routes and their corresponding page components
 */
export const appRoutes: RouteConfig[] = [
  // Main navigation routes
  {
    path: '/',
    element: HomePage,
    title: 'Overview - Dashboard'
  }
]
