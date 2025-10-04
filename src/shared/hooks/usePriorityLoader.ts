import { useState, useEffect } from 'react'
import { useImagePreloader } from './useImagePreloader'
import { UsePriorityLoaderReturn } from '@/types/shared'

// ================================
// Constants
// ================================
const MINIMUM_LOADING_TIME = 800 // 800ms mínimo
const PRIORITY_LOADING_TIME = 400 // 400ms para recursos essenciais

// Recursos essenciais para a primeira página (Vextro + Sidebar)
const ESSENTIAL_IMAGES = [
  // Logo e navegação
  '/src/assets/logo.jpg',
  '/src/assets/nav/Korri.jpg',
  '/src/assets/nav/Vextro.jpg',

  // Imagens da página Vextro (primeira página)
  '/src/assets/pages/Vextro/01.jpg',
  '/src/assets/pages/Vextro/02.1.jpg',
  '/src/assets/pages/Vextro/02.2.jpg',
  '/src/assets/pages/Vextro/03.jpg',
  '/src/assets/pages/Vextro/04.gif',
  '/src/assets/pages/Vextro/05.jpg',
  '/src/assets/pages/Vextro/06.jpg',
  '/src/assets/pages/Vextro/07.jpg',
  '/src/assets/pages/Vextro/08.jpg',
  '/src/assets/pages/Vextro/09.jpg',
  '/src/assets/pages/Vextro/10.jpg',
  '/src/assets/pages/Vextro/11.jpg',
  '/src/assets/pages/Vextro/12.jpg',
  '/src/assets/pages/Vextro/13.gif'
]

// Recursos para carregamento em background (página Korri)
const BACKGROUND_IMAGES = [
  '/src/assets/pages/Korri/01.gif',
  '/src/assets/pages/Korri/02.gif',
  '/src/assets/pages/Korri/03.jpg',
  '/src/assets/pages/Korri/04.gif',
  '/src/assets/pages/Korri/05.jpg',
  '/src/assets/pages/Korri/06.jpg',
  '/src/assets/pages/Korri/07.gif',
  '/src/assets/pages/Korri/08.jpg',
  '/src/assets/pages/Korri/09.jpg',
  '/src/assets/pages/Korri/10.jpg',
  '/src/assets/pages/Korri/11.gif',
  '/src/assets/pages/Korri/12.jpg',
  '/src/assets/pages/Korri/13.jpg',
  '/src/assets/pages/Korri/14.jpg',
  '/src/assets/pages/Korri/15.png',
  '/src/assets/pages/Korri/16.jpg'
]

// ================================
// Hook
// ================================
/**
 * Hook para carregamento prioritário da aplicação
 * Carrega primeiro os recursos essenciais, depois carrega o resto em background
 */
export const usePriorityLoader = (): UsePriorityLoaderReturn => {
  // ================================
  // State
  // ================================
  const [isLoading, setIsLoading] = useState(true)
  const [essentialLoaded, setEssentialLoaded] = useState(false)
  const [startTime] = useState(Date.now())

  // ================================
  // Hooks
  // ================================
  const { isLoading: essentialImagesLoading } = useImagePreloader(ESSENTIAL_IMAGES)
  const { isLoading: backgroundImagesLoading } = useImagePreloader(BACKGROUND_IMAGES)

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

  /**
   * Verifica se o tempo de carregamento prioritário foi atingido
   */
  const checkPriorityTimeElapsed = (): boolean => {
    return Date.now() - startTime >= PRIORITY_LOADING_TIME
  }

  // ================================
  // Effects
  // ================================
  /**
   * Efeito para carregar recursos essenciais
   */
  useEffect(() => {
    const loadEssentialResources = async (): Promise<void> => {
      try {
        // Carregar fontes
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready
        }

        // Aguardar imagens essenciais
        if (!essentialImagesLoading) {
          setEssentialLoaded(true)
        }
      } catch (error) {
        console.warn('Erro ao carregar recursos essenciais:', error)
        setEssentialLoaded(true) // Continuar mesmo com erro
      }
    }

    loadEssentialResources()
  }, [essentialImagesLoading])

  /**
   * Efeito para verificar se pode finalizar o carregamento prioritário
   */
  useEffect(() => {
    const checkPriorityLoadingComplete = (): void => {
      if (essentialLoaded && checkPriorityTimeElapsed()) {
        // Pequeno delay para suavizar a transição
        setTimeout(() => {
          setIsLoading(false)
        }, 100)
      }
    }

    checkPriorityLoadingComplete()
  }, [essentialLoaded, startTime])

  /**
   * Efeito para timeout de segurança (máximo 2 segundos)
   */
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      console.warn('Timeout de carregamento prioritário atingido, forçando fim do loading')
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(safetyTimeout)
  }, [])

  /**
   * Efeito para iniciar carregamento em background
   */
  useEffect(() => {
    // Iniciar carregamento das imagens de background após um pequeno delay
    const backgroundTimeout = setTimeout(() => {
      console.log('Iniciando carregamento em background das imagens da página Korri...')
    }, 1000)

    return () => clearTimeout(backgroundTimeout)
  }, [])

  // ================================
  // Return
  // ================================
  return {
    isLoading,
    forceFinishLoading
  }
}
