import { NavItem } from './navigation'

// ================================
// INTERFACES
// ================================

/**
 * Props do componente MainLayout
 */
export interface MainLayoutProps {
  /** Conteúdo filho a ser renderizado dentro do layout */
  children: React.ReactNode
}

/**
 * Props do componente Sidebar
 */
export interface SidebarProps {
  /** Conteúdo filho a ser renderizado dentro da sidebar */
  children?: React.ReactNode
}

/**
 * Props básicas para componentes de layout
 */
export interface LayoutProps {
  /** Conteúdo filho a ser renderizado dentro do layout */
  children: React.ReactNode
}

// ================================
// Configurações de Componentes
// ================================

/**
 * Configurações do header/cabeçalho
 */
export interface HeaderConfig {
  /** URL da imagem do logo */
  logoSrc?: string
  /** Texto alternativo do logo para acessibilidade */
  logoAlt?: string
  /** Define se a navegação deve ser exibida */
  showNavigation?: boolean
  /** Itens customizados de navegação */
  customNav?: NavItem[]
  /** URL do perfil do Instagram */
  instagramUrl?: string
  /** URL do canal do YouTube */
  youtubeUrl?: string
}

/**
 * Configurações do footer/rodapé
 */
export interface FooterConfig {
  /** Define se o footer deve ser exibido */
  show?: boolean
  /** Conteúdo customizado do footer */
  content?: React.ReactNode
}
