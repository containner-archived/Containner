import { useEffect, useState } from 'react'
import { useImagePreloader } from './useImagePreloader'
import { UseBackgroundLoaderReturn } from '@/types/shared'

// ================================
// Constants
// ================================
const BACKGROUND_LOAD_DELAY = 1000 // 1 segundo após o carregamento inicial

// Todas as imagens para carregamento em background após o site aparecer
// (As imagens prioritárias já foram carregadas pelo useAppLoader)
const ALL_REMAINING_IMAGES = [
  // Todas as imagens das páginas (exceto as prioritárias)
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

// ================================
// Hook
// ================================
/**
 * Hook para carregamento em background de todas as imagens restantes
 * Inicia o carregamento após um delay para não interferir no carregamento inicial
 */
export const useBackgroundLoader = (): UseBackgroundLoaderReturn => {
  // ================================
  // State
  // ================================
  const [shouldStartLoading, setShouldStartLoading] = useState(false)

  // ================================
  // Hooks
  // ================================
  const {
    isLoading: isBackgroundLoading,
    progress: backgroundProgress
  } = useImagePreloader(shouldStartLoading ? ALL_REMAINING_IMAGES : [])

  // ================================
  // Effects
  // ================================
  /**
   * Efeito para iniciar o carregamento em background após um delay
   */
  useEffect(() => {
    const backgroundTimeout = setTimeout(() => {
      setShouldStartLoading(true)
    }, BACKGROUND_LOAD_DELAY)

    return () => clearTimeout(backgroundTimeout)
  }, [])


  // ================================
  // Return
  // ================================
  return {
    isBackgroundLoading,
    backgroundProgress
  }
}
