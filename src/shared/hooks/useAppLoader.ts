import { useState, useEffect } from 'react'
import { useImagePreloader } from './useImagePreloader'
import { UseAppLoaderReturn } from '@/types/shared'

// ================================
// Constants
// ================================
const MINIMUM_LOADING_TIME = 300 // 0.3 segundos mínimo
const REQUIRED_RESOURCES = [
  'priority_images', // Apenas imagens essenciais
  'routes',
  'translations'
  // Fontes removidas para acelerar - carregam em background
]

// Imagens prioritárias (apenas as mais importantes para carregar primeiro)
const PRIORITY_IMAGES = [
  // Logo e navegação (essenciais)
  '/src/assets/logo.jpg',
  '/src/assets/nav/Korri.jpg',
  '/src/assets/nav/Vextro.jpg',

  // Primeiras imagens de cada página (para preview rápido)
  '/src/assets/pages/Korri/01.gif',
  '/src/assets/pages/Vextro/01.jpg'
]

// Todas as outras imagens (carregadas em background após o site aparecer)
const ALL_IMAGES = [
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
  const [loadingDuration, setLoadingDuration] = useState<number>(0)

  // ================================
  // Hooks
  // ================================
  const { isLoading: priorityImagesLoading } = useImagePreloader(PRIORITY_IMAGES)

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
    const duration = Date.now() - startTime
    setLoadingDuration(duration)
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
    // Carregar fontes em background (não bloqueia o carregamento)
    const loadFonts = async (): Promise<void> => {
      try {
        // Iniciar carregamento das fontes sem aguardar
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.catch(() => {
            // Ignorar erros de fontes
          })
        }
        // Não marcamos como recurso necessário - carrega em background
      } catch (error) {
        // Ignorar erros de fontes
      }
    }

    // Carregar imagens prioritárias (usando o hook de pré-carregamento)
    const loadPriorityImages = (): void => {
      // O hook useImagePreloader já gerencia o carregamento
      // Aqui apenas marcamos como carregado quando o hook indica que terminou
      if (!priorityImagesLoading) {
        markResourceLoaded('priority_images')
      }
    }

    // Carregar rotas (simulado - as rotas já estão carregadas)
    const loadRoutes = (): void => {
      markResourceLoaded('routes')
    }

    // Carregar traduções (simulado - as traduções já estão carregadas)
    const loadTranslations = (): void => {
      markResourceLoaded('translations')
    }

    // Iniciar carregamento de recursos
    loadFonts()
    loadPriorityImages()
    loadRoutes()
    loadTranslations()
  }, [priorityImagesLoading])

  /**
   * Efeito para verificar se pode finalizar o carregamento
   */
  useEffect(() => {
    const checkLoadingComplete = (): void => {
      if (checkAllResourcesLoaded() && checkMinimumTimeElapsed()) {
        // Delay mínimo para suavizar a transição
        setTimeout(() => {
          const duration = Date.now() - startTime
          setLoadingDuration(duration)
          setIsLoading(false)
        }, 100)
      }
    }

    checkLoadingComplete()
  }, [loadedResources, startTime])

  /**
   * Efeito para timeout de segurança (máximo 3 segundos)
   */
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      const duration = Date.now() - startTime
      setLoadingDuration(duration)
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(safetyTimeout)
  }, [startTime])

  // ================================
  // Return
  // ================================
  return {
    isLoading,
    markResourceLoaded,
    forceFinishLoading
  }
}
