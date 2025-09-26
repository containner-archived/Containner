import { RouteConfig } from '@core/router'
import { VextroPage, KorriPage } from '@pages'

// ================================
// CONFIGURAÇÃO DE ROTAS
// ================================

/**
 * Configuração das rotas da aplicação
 * Define todas as rotas disponíveis e seus componentes de página correspondentes
 */
export const appRoutes: RouteConfig[] = [
  // Rotas principais de navegação
  {
    path: '/vextro',
    element: VextroPage
  },
  {
    path: '/korri',
    element: KorriPage
  }
]
