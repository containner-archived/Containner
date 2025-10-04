// ================================
// INTERFACES
// ================================

/**
 * Interface para itens de mídia na galeria
 */
export interface MediaItem {
  /** URL da imagem */
  src: string
  /** Texto alternativo da imagem */
  alt: string
}

/**
 * Props para o componente MediaImage
 */
export interface MediaImageProps {
  /** URL da imagem */
  src: string
  /** Texto alternativo da imagem */
  alt: string
  /** Estratégia de carregamento da imagem */
  loading?: 'eager' | 'lazy'
  /** Prioridade de carregamento da imagem */
  fetchPriority?: 'high' | 'low' | 'auto'
}

/**
 * Props para componentes de texto
 */
export interface TextProps {
  /** Conteúdo do texto */
  children: React.ReactNode
  /** Classes CSS adicionais */
  className?: string
}
