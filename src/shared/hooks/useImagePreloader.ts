import { useEffect, useState } from 'react'
import { UseImagePreloaderReturn } from '@/types/shared'

// ================================
// Hook
// ================================
/**
 * Hook para pré-carregar imagens de uma lista de URLs
 * Retorna o estado de carregamento e progresso
 */
export const useImagePreloader = (imageUrls: string[]): UseImagePreloaderReturn => {
  // ================================
  // State
  // ================================
  const [isLoading, setIsLoading] = useState(true)
  const [loadedCount, setLoadedCount] = useState(0)
  const [totalCount] = useState(imageUrls.length)

  // ================================
  // Computed Values
  // ================================
  const progress = totalCount > 0 ? Math.round((loadedCount / totalCount) * 100) : 100

  // ================================
  // Effects
  // ================================
  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsLoading(false)
      return
    }

    let completedCount = 0

    const handleImageLoad = (): void => {
      completedCount++
      setLoadedCount(completedCount)

      if (completedCount === imageUrls.length) {
        setIsLoading(false)
      }
    }

    const handleImageError = (): void => {
      completedCount++
      setLoadedCount(completedCount)

      if (completedCount === imageUrls.length) {
        setIsLoading(false)
      }
    }

    // Pré-carregar todas as imagens
    imageUrls.forEach(url => {
      const img = new Image()
      img.onload = handleImageLoad
      img.onerror = handleImageError
      img.src = url
    })

    // Cleanup function
    return () => {
      // Não há cleanup necessário para Image objects
    }
  }, [imageUrls])

  // ================================
  // Return
  // ================================
  return {
    isLoading,
    progress,
    loadedCount,
    totalCount
  }
}
