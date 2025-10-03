import { useState, useEffect } from 'react'
import { useImagePreloader } from './useImagePreloader'
import { UseAppLoaderReturn } from '@/types/shared'

// ================================
// Constants
// ================================
const MINIMUM_LOADING_TIME = 2000 // 2 segundos mínimo
const REQUIRED_RESOURCES = [
  'fonts',
  'images',
  'routes',
  'translations'
]

// Lista de todas as imagens das páginas para pré-carregamento
const PAGE_IMAGES = [
  // Korri images
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
  '/src/assets/pages/Korri/16.jpg',

  // Vextro images
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
  '/src/assets/pages/Vextro/13.gif',

  // Other assets
  '/src/assets/logo.jpg',
  '/src/assets/nav/Korri.jpg',
  '/src/assets/nav/Vextro.jpg'
]

// ================================
// Hook
// ================================
/**
 * Hook para gerenciar o estado de carregamento global da aplicação
 * Garante que todos os recursos essenciais sejam carregados antes de mostrar a aplicação
 */
export const useAppLoader = (): UseAppLoaderReturn => {
  // ================================
  // State
  // ================================
  const [isLoading, setIsLoading] = useState(true)
  const [loadedResources, setLoadedResources] = useState<Set<string>>(new Set())
  const [startTime] = useState(Date.now())

  // ================================
  // Hooks
  // ================================
  const { isLoading: imagesLoading } = useImagePreloader(PAGE_IMAGES)

  // ================================
  // Helper Functions
  // ================================
  /**
   * Marca um recurso específico como carregado
   */
  const markResourceLoaded = (resource: string): void => {
    setLoadedResources(prev => new Set(Array.from(prev).concat(resource)))
  }

  /**
   * Força o fim do carregamento (para casos de emergência)
   */
  const forceFinishLoading = (): void => {
    setIsLoading(false)
  }

  /**
   * Verifica se todos os recursos essenciais foram carregados
   */
  const checkAllResourcesLoaded = (): boolean => {
    return REQUIRED_RESOURCES.every(resource => loadedResources.has(resource))
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
   * Efeito para carregar recursos automaticamente
   */
  useEffect(() => {
    // Carregar fontes
    const loadFonts = async (): Promise<void> => {
      try {
        // Verificar se as fontes já estão carregadas
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready
        }
        markResourceLoaded('fonts')
      } catch (error) {
        console.warn('Erro ao carregar fontes:', error)
        markResourceLoaded('fonts') // Marcar como carregado mesmo com erro
      }
    }

    // Carregar imagens (usando o hook de pré-carregamento)
    const loadImages = (): void => {
      // O hook useImagePreloader já gerencia o carregamento
      // Aqui apenas marcamos como carregado quando o hook indica que terminou
      if (!imagesLoading) {
        markResourceLoaded('images')
      }
    }

    // Carregar rotas (simulado - as rotas já estão carregadas)
    const loadRoutes = (): void => {
      setTimeout(() => {
        markResourceLoaded('routes')
      }, 500)
    }

    // Carregar traduções (simulado - as traduções já estão carregadas)
    const loadTranslations = (): void => {
      setTimeout(() => {
        markResourceLoaded('translations')
      }, 300)
    }

    // Iniciar carregamento de recursos
    loadFonts()
    loadImages()
    loadRoutes()
    loadTranslations()
  }, [imagesLoading])

  /**
   * Efeito para verificar se pode finalizar o carregamento
   */
  useEffect(() => {
    const checkLoadingComplete = (): void => {
      if (checkAllResourcesLoaded() && checkMinimumTimeElapsed()) {
        // Pequeno delay para suavizar a transição
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }

    checkLoadingComplete()
  }, [loadedResources, startTime])

  /**
   * Efeito para timeout de segurança (máximo 10 segundos)
   */
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      console.warn('Timeout de carregamento atingido, forçando fim do loading')
      setIsLoading(false)
    }, 10000)

    return () => clearTimeout(safetyTimeout)
  }, [])

  // ================================
  // Return
  // ================================
  return {
    isLoading,
    markResourceLoaded,
    forceFinishLoading
  }
}
