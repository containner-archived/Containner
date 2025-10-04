import { Language, Translation } from '../shared/global'

// ================================
// INTERFACES
// ================================

/**
 * Tipo do contexto de internacionalização
 */
export interface I18nContextType {
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
export interface I18nProviderProps {
  /** Componentes filhos que terão acesso ao contexto */
  children: React.ReactNode
}
