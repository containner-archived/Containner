// ================================
// INTERFACES
// ================================

/**
 * Interface para representar um retângulo no gerador de padrões
 */
export interface Rectangle {
  /** Identificador único do retângulo */
  id: string
  /** Posição X do retângulo */
  x: number
  /** Posição Y do retângulo */
  y: number
  /** Largura do retângulo */
  width: number
  /** Altura do retângulo */
  height: number
  /** Rotação do retângulo em graus */
  rotation: number
}

// ================================
// TYPES
// ================================

/**
 * Tipo para as teclas de atalho suportadas
 */
export type KeyboardShortcut = 'ArrowRight' | 'ArrowLeft' | 's' | 'S'
