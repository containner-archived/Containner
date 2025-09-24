// routes.ts - Arquivo de configuração das rotas
import { RouteConfig } from '@core/router'
import C0ffePage from '@/pages/C0ffe'
import ContainnerPage from '@/pages/Containner'
import KorriPage from '@/pages/Korri'
import TracPage from '@/pages/Trac'
import VextroPage from '@/pages/Vextro'

/**
 * Application routes configuration
 * Defines all available routes and their corresponding page components
 */
export const appRoutes: RouteConfig[] = [
  // Main navigation routes
  {
    path: '/containner',
    element: ContainnerPage
  },
  {
    path: '/vextro',
    element: VextroPage
  },
  {
    path: '/korri',
    element: KorriPage
  },
  {
    path: '/c0ffe',
    element: C0ffePage
  },
  {
    path: '/trac',
    element: TracPage
  }
]
