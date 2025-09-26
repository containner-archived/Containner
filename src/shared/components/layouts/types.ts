import React from 'react'

// ================================
// Tipos Base
// ================================

/**
 * Props básicas para componentes de layout
 */
export interface LayoutProps {
  /** Conteúdo filho a ser renderizado dentro do layout */
  children: React.ReactNode
}

/**
 * Item de navegação do menu
 */
export interface NavItem {
  /** Texto exibido no item de navegação */
  label: string
  /** URL de destino do link */
  href: string
  /** Função callback opcional executada ao clicar no item */
  onClick?: () => void
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

// ================================
// Props de Componentes Principais
// ================================

/**
 * Props do componente MainLayout principal
 */
export interface MainLayoutProps {
  /** Conteúdo filho a ser renderizado no layout */
  children: React.ReactNode
  /** Configurações do header */
  header?: {
    /** Define se a navegação deve ser exibida */
    showNavigation?: boolean
    /** URL da imagem do logo */
    logoSrc?: string
    /** Texto alternativo do logo */
    logoAlt?: string
    /** URL do perfil do Instagram */
    instagramUrl?: string
    /** URL do canal do YouTube */
    youtubeUrl?: string
  }
  /** Configurações do footer */
  footer?: {
    /** Define se o footer deve ser exibido */
    show?: boolean
  }
  /** Classes CSS adicionais para o container principal */
  className?: string
}
