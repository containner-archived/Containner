import React, { createContext, useContext, useState } from 'react'
import { Theme, ThemeContextType, ThemeProviderProps } from '@types'

// ================================
// CONSTANTS
// ================================

const DEFAULT_THEME: Theme = 'dark'
const THEME_STORAGE_KEY = 'app-theme'

// ================================
// HELPER FUNCTIONS
// ================================

/**
 * Carrega o tema salvo no localStorage ou retorna o padrão
 */
const getInitialTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme as Theme
    }
  } catch (error) {
    console.warn('Could not access localStorage:', error)
  }

  return DEFAULT_THEME
}

/**
 * Salva o tema no localStorage
 */
const saveThemeToStorage = (theme: Theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch (error) {
    console.warn('Could not save theme to localStorage:', error)
  }
}

// ================================
// CONTEXT
// ================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// ================================
// PROVIDER
// ================================

/**
 * Provider de contexto para gerenciamento de tema
 * Gerencia o estado do tema atual e fornece funções para alterá-lo
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    saveThemeToStorage(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// ================================
// HOOK
// ================================

/**
 * Hook para acessar o contexto de tema
 * @returns Objeto com tema atual e funções para gerenciá-lo
 * @throws Error se usado fora do ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

// ================================
// EXPORTAÇÕES
// ================================

export default ThemeProvider
