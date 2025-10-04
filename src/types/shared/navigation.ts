// ================================
// INTERFACES
// ================================

/**
 * Item de navegação para o componente Navigation
 */
export interface NavItem {
  /** Rótulo do item de navegação */
  label: string
  /** Caminho da rota */
  href: string
  /** Função callback opcional para clique */
  onClick?: () => void
}

/**
 * Props do componente Navigation
 */
export interface NavigationProps {
  /** Lista de itens de navegação */
  items: NavItem[]
}
