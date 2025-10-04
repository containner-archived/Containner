// ================================
// INTERFACES
// ================================

/**
 * Props do componente SidebarNavItem
 */
export interface SidebarNavItemProps {
  /** Ícone do item de navegação */
  icon: React.ReactNode
  /** Título do item de navegação */
  title: string
  /** Subtítulo descritivo do item */
  subtitle: string
  /** Caminho da rota para navegação */
  path: string
  /** Se o item está ativo/selecionado */
  isActive?: boolean
}

/**
 * Props do componente HamburgerMenu
 */
export interface HamburgerMenuProps {
  /** Estado de abertura do menu */
  isOpen: boolean
  /** Função callback para fechar o menu */
  onClose: () => void
}

/**
 * Props do componente MobileHeader
 */
export interface MobileHeaderProps {
  /** Função callback chamada ao clicar no botão do menu */
  onMenuClick: () => void
  /** Estado atual do menu (aberto/fechado) */
  isMenuOpen: boolean
}
