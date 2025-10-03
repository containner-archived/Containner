import { useLocation } from 'react-router-dom'
import { UseActiveRouteReturn } from '@types'

// ================================
// CONSTANTS
// ================================

const HOME_ROUTE = '/' as const

// ================================
// HELPER FUNCTIONS
// ================================

/**
 * Verifica se uma rota é a rota home
 */
const isHomeRoute = (href: string): boolean => {
  return href === HOME_ROUTE
}

/**
 * Determina se uma rota está ativa com base no caminho atual
 */
const checkRouteActive = (currentPath: string, href: string): boolean => {
  if (isHomeRoute(href)) {
    return currentPath === HOME_ROUTE
  }

  return currentPath === href || currentPath.startsWith(href + '/')
}

// ================================
// MAIN HOOK
// ================================

/**
 * Hook para detectar rota ativa com React Router
 * Fornece correspondência exata para rota home e correspondência pai/filho para outras rotas
 *
 * @returns Objeto contendo o caminho atual e função verificadora isActive
 */
export const useActiveRoute = (): UseActiveRouteReturn => {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (href: string): boolean => {
    return checkRouteActive(currentPath, href)
  }

  return {
    currentPath,
    isActive
  }
}
