import { useState, useEffect } from 'react'
import { UseFastLoaderReturn } from '@/types/shared'

// ================================
// Constants
// ================================
const MINIMUM_LOADING_TIME = 1000 // 1 segundo mínimo
const MAXIMUM_LOADING_TIME = 2000 // 2 segundos máximo

// ================================
// Hook
// ================================
/**
 * Hook para carregamento ultra-rápido da aplicação
 * Carrega apenas o essencial e libera a aplicação rapidamente
 */
export const useFastLoader = (): UseFastLoaderReturn => {
  // ================================
  // State
  // ================================
  const [isLoading, setIsLoading] = useState(true)
  const [startTime] = useState(Date.now())

  // ================================
  // Helper Functions
  // ================================
  /**
   * Força o fim do carregamento (para casos de emergência)
   */
  const forceFinishLoading = (): void => {
    setIsLoading(false)
  }

  /**
   * Verifica se o tempo mínimo de carregamento foi atingido
   */
  const checkMinimumTimeElapsed = (): boolean => {
    return Date.now() - startTime >= MINIMUM_LOADING_TIME
  }

  // ================================
  // Effects
  // ================================
  /**
   * Efeito para carregamento rápido
   */
  useEffect(() => {
    const loadEssentialResources = async (): Promise<void> => {
      try {
        // Carregar fontes (não bloqueia)
        if (document.fonts && document.fonts.ready) {
          // Não aguardar, apenas iniciar o carregamento
          document.fonts.ready.catch(() => {
            // Ignorar erros de fontes
          })
        }

        // Aguardar o tempo mínimo para evitar flash na tela
        setTimeout(() => {
          setIsLoading(false)
        }, MINIMUM_LOADING_TIME)
      } catch (error) {
        console.warn('Erro ao carregar recursos essenciais:', error)
        // Continuar mesmo com erro
        setTimeout(() => {
          setIsLoading(false)
        }, MINIMUM_LOADING_TIME)
      }
    }

    loadEssentialResources()
  }, [])

  /**
   * Efeito para timeout de segurança (máximo 1 segundo)
   */
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      console.warn('Timeout de carregamento rápido atingido, forçando fim do loading')
      setIsLoading(false)
    }, MAXIMUM_LOADING_TIME)

    return () => clearTimeout(safetyTimeout)
  }, [])

  // ================================
  // Return
  // ================================
  return {
    isLoading,
    forceFinishLoading
  }
}
