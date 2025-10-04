// ================================
// TYPES
// ================================

/**
 * Tipo para as chaves de páginas disponíveis nas traduções
 */
export type PageKey = 'Home' | 'Vextro' | 'Korri' | 'Containner' | 'C0ffe' | 'Trac'

// ================================
// INTERFACES
// ================================

/**
 * Tipo de retorno para o hook useActiveRoute
 */
export interface UseActiveRouteReturn {
  /** Caminho atual da rota */
  currentPath: string
  /** Função para verificar se uma rota está ativa */
  isActive: (href: string) => boolean
}
