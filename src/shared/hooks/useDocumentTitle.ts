import { useEffect } from 'react'
import { useI18n } from '../contexts/I18nContext'

export const useDocumentTitle = (
  pageKey: keyof typeof import('../translations/pt').ptTranslations.pages,
  container: string = 'CONTAINNER®' // valor padrão para o container
) => {
  const { t } = useI18n()

  useEffect(() => {
    const pageData = t.pages[pageKey]
    const title = pageData?.title

    // Se existe título, usa "título | CONTAINER"
    // Se não existe título, usa apenas "CONTAINER"
    document.title = title ? `${title} | ${container}` : container
  }, [t, pageKey, container])
}

// Alternativa mais robusta que verifica se o título não é vazio
export const useDocumentTitleRobust = (
  pageKey: keyof typeof import('../translations/pt').ptTranslations.pages,
  container: string = 'CONTAINNER®'
) => {
  const { t } = useI18n()

  useEffect(() => {
    const pageData = t.pages[pageKey]
    const title = pageData?.title?.trim()

    // Verifica se existe título E se não está vazio
    document.title =
      title && title.length > 0 ? `${title} | ${container}` : container
  }, [t, pageKey, container])
}
