// ================================
// INTERFACES
// ================================

/**
 * Item de navegação da sidebar
 */
export interface SidebarNavItem {
  /** Ícone do item de navegação */
  icon: React.ReactNode
  /** Título do item de navegação */
  title: string
  /** Subtítulo descritivo do item */
  subtitle: string
  /** Caminho da rota para navegação */
  path: string
}
