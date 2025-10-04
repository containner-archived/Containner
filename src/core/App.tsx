import React, { useEffect } from 'react'
import { AppRouter, appRoutes } from './routing'
import { initializeAnalytics } from '@features/ga'

// ================================
// MAIN COMPONENT
// ================================

/**
 * Componente principal da aplicação
 * Inicializa analytics e renderiza o sistema de roteamento
 */
const App: React.FC = () => {
  // ================================
  // EFFECTS
  // ================================

  useEffect(() => {
    initializeAnalytics()
  }, [])

  // ================================
  // RENDERIZAÇÃO
  // ================================

  return <AppRouter routes={appRoutes} />
}

// ================================
// EXPORTAÇÕES
// ================================

export default App
