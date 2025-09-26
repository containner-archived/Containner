import { Language } from '@/types'

// ================================
// CONSTANTS
// ================================

/**
 * Lista de idiomas suportados pela aplicação
 */
export const SUPPORTED_LANGUAGES: Language[] = ['pt', 'en']

/**
 * Mapeamento de códigos de idioma para nomes de exibição
 */
export const LANGUAGE_NAMES = {
  pt: 'Português',
  en: 'English'
} as const

const DEFAULT_LANGUAGE: Language = 'en'
const PORTUGUESE_PREFIX = 'pt' as const

// ================================
// HELPER FUNCTIONS
// ================================

/**
 * Verifica se um segmento de URL é um idioma válido
 */
const isValidLanguage = (segment: string): segment is Language => {
  return SUPPORTED_LANGUAGES.includes(segment as Language)
}

// ================================
// MAIN FUNCTIONS
// ================================

/**
 * Detecta o idioma a partir do caminho da URL
 * Verifica se o primeiro segmento da URL corresponde a um idioma suportado
 *
 * @param pathname - Caminho da URL
 * @returns Idioma detectado ou null se não encontrado
 */
export const detectLanguageFromPath = (pathname: string): Language | null => {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && isValidLanguage(firstSegment)) {
    return firstSegment
  }

  return null
}

/**
 * Obtém o idioma preferido do navegador
 * Retorna português para qualquer variante pt-* ou inglês como padrão
 *
 * @returns Idioma baseado na configuração do navegador
 */
export const getBrowserLanguage = (): Language => {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE

  const browserLang = navigator.language.toLowerCase()

  if (browserLang.startsWith(PORTUGUESE_PREFIX)) {
    return 'pt'
  }

  return DEFAULT_LANGUAGE
}

/**
 * Formata o código do idioma para exibição
 * Retorna o nome completo do idioma ou o código em maiúsculas como fallback
 *
 * @param language - Código do idioma
 * @returns Nome formatado do idioma
 */
export const formatLanguageDisplay = (language: Language): string => {
  return LANGUAGE_NAMES[language] || language.toUpperCase()
}
