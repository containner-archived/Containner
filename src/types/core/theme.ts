import { ReactNode } from 'react'

// ================================
// TYPES
// ================================

/**
 * Tipos de tema disponíveis
 */
export type Theme = 'light' | 'dark'

// ================================
// INTERFACES
// ================================

/**
 * Interface do contexto de tema
 */
export interface ThemeContextType {
  /** Tema atual */
  theme: Theme
  /** Função para alternar o tema */
  toggleTheme: () => void
  /** Função para definir um tema específico */
  setTheme: (theme: Theme) => void
}

/**
 * Props do provider de tema
 */
export interface ThemeProviderProps {
  /** Componentes filhos que terão acesso ao contexto */
  children: ReactNode
}
