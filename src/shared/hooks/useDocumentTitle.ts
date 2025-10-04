import { useEffect } from 'react'
import { useI18n } from '@core'
import { PageKey } from '@types'

// ================================
// CONSTANTS
// ================================

const DEFAULT_CONTAINER = 'CONTAINNER®' as const

// ================================
// HELPER FUNCTIONS
// ================================

/**
 * Formata o título do documento baseado no título da página e container
 */
const formatDocumentTitle = (
  pageTitle: string | undefined,
  container: string
): string => {
  const trimmedTitle = pageTitle?.trim()
  return trimmedTitle && trimmedTitle.length > 0
    ? `${trimmedTitle} | ${container}`
    : container
}

// ================================
// HOOKS
// ================================

/**
 * Hook para definir o título do documento baseado na página atual
 * Usa formato "título | CONTAINER" ou apenas "CONTAINER" se não houver título
 *
 * @param pageKey - Chave da página nas traduções
 * @param container - Nome do container/aplicação (padrão: 'CONTAINNER®')
 */
export const useDocumentTitle = (
  pageKey: PageKey,
  container: string = DEFAULT_CONTAINER
): void => {
  const { t } = useI18n()

  useEffect(() => {
    const pageTitle = t.pages[pageKey as keyof typeof t.pages]?.title
    document.title = formatDocumentTitle(pageTitle, container)
  }, [t, pageKey, container])
}

/**
 * Versão mais robusta do hook que verifica se o título não está vazio
 *
 * @param pageKey - Chave da página nas traduções
 * @param container - Nome do container/aplicação (padrão: 'CONTAINNER®')
 */
export const useDocumentTitleRobust = (
  pageKey: PageKey,
  container: string = DEFAULT_CONTAINER
): void => {
  const { t } = useI18n()

  useEffect(() => {
    const pageTitle = t.pages[pageKey as keyof typeof t.pages]?.title
    document.title = formatDocumentTitle(pageTitle, container)
  }, [t, pageKey, container])
}
