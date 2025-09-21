// routes.ts - Arquivo de configuração das rotas
import C0ffePage from '@/pages/C0ffe'
import ContainnerPage from '@/pages/Containner'
import HomePage from '@/pages/Home'
import KorriPage from '@/pages/Korri'
import TracPage from '@/pages/Trac'
import VextroPage from '@/pages/Vextro'
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
  },
  {
    path: '/containner',
    element: ContainnerPage,
    title: 'Containner'
  },
  {
    path: '/vextro',
    element: VextroPage,
    title: 'Vextro'
  },
  {
    path: '/korri',
    element: KorriPage,
    title: 'Korri'
  },
  {
    path: '/c0ffe',
    element: C0ffePage,
    title: 'C0FFE'
  },
  {
    path: '/trac',
    element: TracPage,
    title: 'Trac'
  }
]
