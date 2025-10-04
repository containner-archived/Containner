import { VextroPage, KorriPage, PatternGenerator } from '@pages'
import { RouteConfig } from '@types'

// ================================
// CONFIGURAÇÃO DE ROTAS
// ================================

/**
 * Configuração das rotas da aplicação
 * Define todas as rotas disponíveis e seus componentes de página correspondentes
 */
export const appRoutes: RouteConfig[] = [
  {
    path: '/vextro',
    element: VextroPage
  },
  {
    path: '/korri',
    element: KorriPage
  },

  // Rota SEM layout
  {
    path: '/pattern-generator',
    element: PatternGenerator,
    useLayout: false
  }
]
