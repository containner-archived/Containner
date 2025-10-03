import { useEffect, useState } from 'react'
import { useImagePreloader } from './useImagePreloader'
import { UseBackgroundLoaderReturn } from '@/types/shared'

// ================================
// Constants
// ================================
const BACKGROUND_LOAD_DELAY = 1000 // 1 segundo após o carregamento inicial

// Imagens da página Korri para carregamento em background
const KORRI_IMAGES = [
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
 * Hook para carregamento em background das imagens da página Korri
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
  } = useImagePreloader(shouldStartLoading ? KORRI_IMAGES : [])

  // ================================
  // Effects
  // ================================
  /**
   * Efeito para iniciar o carregamento em background após um delay
   */
  useEffect(() => {
    const backgroundTimeout = setTimeout(() => {
      console.log('🚀 Iniciando carregamento em background das imagens da página Korri...')
      setShouldStartLoading(true)
    }, BACKGROUND_LOAD_DELAY)

    return () => clearTimeout(backgroundTimeout)
  }, [])

  /**
   * Efeito para log do progresso do carregamento em background
   */
  useEffect(() => {
    if (shouldStartLoading && backgroundProgress > 0 && backgroundProgress % 25 === 0) {
      console.log(`📦 Carregamento em background: ${backgroundProgress}%`)
    }
  }, [backgroundProgress, shouldStartLoading])

  /**
   * Efeito para log quando o carregamento em background terminar
   */
  useEffect(() => {
    if (shouldStartLoading && !isBackgroundLoading && backgroundProgress === 100) {
      console.log('✅ Carregamento em background concluído! Todas as imagens da página Korri estão prontas.')
    }
  }, [isBackgroundLoading, backgroundProgress, shouldStartLoading])

  // ================================
  // Return
  // ================================
  return {
    isBackgroundLoading,
    backgroundProgress
  }
}
