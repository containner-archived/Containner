import React, { createContext, useContext, useState, ReactNode } from 'react'
import { ptTranslations } from '../translations/pt'
import { enTranslations } from '../translations/en'
import { Language, Translation } from '@/types'

// ================================
// Tipos e Interfaces
// ================================

/**
 * Tipo do contexto de internacionalização
 */
interface I18nContextType {
  /** Idioma atual selecionado */
  language: Language
  /** Traduções do idioma atual */
  translations: Translation
  /** Função para alterar o idioma */
  setLanguage: (language: Language) => void
  /** Alias para translations - traduções do idioma atual */
  t: Translation
}

/**
 * Props do provider de internacionalização
 */
interface I18nProviderProps {
  /** Componentes filhos que terão acesso ao contexto */
  children: ReactNode
}

// ================================
// Constantes
// ================================

/**
 * Mapeamento de idiomas para suas respectivas traduções
 */
const translations = {
  pt: ptTranslations,
  en: enTranslations
}

// ================================
// Helpers e Funções Auxiliares
// ================================

/**
 * Detecta o idioma preferido do navegador
 * @returns Idioma detectado (pt ou en)
 */
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()

  // Verifica se é português brasileiro ou português em geral
  if (browserLang.startsWith('pt')) {
    return 'pt'
  }

  // Default para inglês
  return 'en'
}

/**
 * Carrega o idioma salvo no localStorage ou detecta automaticamente
 * @returns Idioma inicial para a aplicação
 */
const getInitialLanguage = (): Language => {
  try {
    const savedLanguage = localStorage.getItem('app-language')
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      return savedLanguage as Language
    }
  } catch (error) {
    console.warn('Could not access localStorage:', error)
  }

  return detectBrowserLanguage()
}

/**
 * Salva o idioma no localStorage com tratamento de erro
 * @param language - Idioma a ser salvo
 */
const saveLanguageToStorage = (language: Language) => {
  try {
    localStorage.setItem('app-language', language)
  } catch (error) {
    console.warn('Could not save language to localStorage:', error)
  }
}

// ================================
// Context
// ================================

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// ================================
// Provider
// ================================

/**
 * Provider de contexto para internacionalização
 * Gerencia o estado do idioma atual e fornece traduções
 */
export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    saveLanguageToStorage(newLanguage)
  }

  const contextValue: I18nContextType = {
    language,
    translations: translations[language],
    setLanguage,
    t: translations[language]
  }

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  )
}

// ================================
// Hook
// ================================

/**
 * Hook para acessar o contexto de internacionalização
 * @returns Objeto com idioma atual, traduções e função de mudança de idioma
 * @throws Error se usado fora do I18nProvider
 */
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext)

  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }

  return context
}

// ================================
// Exportações
// ================================

export default I18nProvider
