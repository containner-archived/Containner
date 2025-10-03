import React, { useState, useEffect } from 'react'
import { useBackgroundLoader } from '@/shared/hooks/useBackgroundLoader'
import { useFastLoader } from '@/shared/hooks/useFastLoader'
import { AppLoaderProps } from '@/types/shared'
import Loader from './Loader'

// ================================
// Main Component
// ================================
/**
 * Componente wrapper que gerencia o carregamento global da aplicação
 * Exibe o loader até que todos os recursos sejam carregados
 */
export const AppLoader: React.FC<AppLoaderProps> = ({ children }) => {
  // ================================
  // State
  // ================================
  const [showLoader, setShowLoader] = useState(true)
  const [showApp, setShowApp] = useState(false)
  const [loaderOpacity, setLoaderOpacity] = useState(1)
  const [appOpacity, setAppOpacity] = useState(0)

  // ================================
  // Hooks
  // ================================
  const { isLoading } = useFastLoader()

  // Iniciar carregamento em background (não bloqueia a renderização)
  useBackgroundLoader()

  // ================================
  // Effects
  // ================================
  useEffect(() => {
    if (!isLoading) {
      // Mostrar a app primeiro (por baixo)
      setShowApp(true)

      // Iniciar transição suave simultânea
      setTimeout(() => {
        // Fazer a app aparecer gradualmente
        setAppOpacity(1)

        // Fazer o loader desaparecer gradualmente
        setLoaderOpacity(0)

        // Remover o loader do DOM após a transição
        setTimeout(() => {
          setShowLoader(false)
        }, 1000)
      }, 100)
    }
  }, [isLoading])

  // ================================
  // Render
  // ================================
  return (
    <>
      {/* Aplicação com transição suave */}
      {showApp && (
        <div
          className="transition-opacity duration-1000 ease-out"
          style={{ opacity: appOpacity }}
        >
          {children}
        </div>
      )}

      {/* Loader com transição suave - sempre por cima */}
      {showLoader && (
        <div
          className="fixed inset-0 z-50 transition-opacity duration-1000 ease-out"
          style={{ opacity: loaderOpacity }}
        >
          <Loader />
        </div>
      )}
    </>
  )
}

// ================================
// Exports
// ================================
export default AppLoader
