// ================================
// LOADER TYPES
// ================================

/**
 * Propriedades do componente AppLoader
 */
export interface AppLoaderProps {
  /** Componente da aplicação a ser renderizado após o carregamento */
  children: React.ReactNode
}

/**
 * Retorno do hook useFastLoader
 */
export interface UseFastLoaderReturn {
  /** Se a aplicação ainda está carregando */
  isLoading: boolean
  /** Função para forçar o fim do carregamento */
  forceFinishLoading: () => void
}

/**
 * Retorno do hook useBackgroundLoader
 */
export interface UseBackgroundLoaderReturn {
  /** Se o carregamento em background está ativo */
  isBackgroundLoading: boolean
  /** Progresso do carregamento em background (0-100) */
  backgroundProgress: number
}

/**
 * Retorno do hook usePriorityLoader
 */
export interface UsePriorityLoaderReturn {
  /** Se a aplicação ainda está carregando */
  isLoading: boolean
  /** Função para forçar o fim do carregamento */
  forceFinishLoading: () => void
}

/**
 * Retorno do hook useAppLoader
 */
export interface UseAppLoaderReturn {
  /** Se a aplicação ainda está carregando */
  isLoading: boolean
  /** Função para marcar um recurso como carregado */
  markResourceLoaded: (resource: string) => void
  /** Função para forçar o fim do carregamento */
  forceFinishLoading: () => void
}

/**
 * Retorno do hook useImagePreloader
 */
export interface UseImagePreloaderReturn {
  /** Se as imagens ainda estão carregando */
  isLoading: boolean
  /** Progresso do carregamento (0-100) */
  progress: number
  /** Número de imagens carregadas */
  loadedCount: number
  /** Total de imagens para carregar */
  totalCount: number
}
