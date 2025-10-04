import React from 'react'
import Sidebar from './Sidebar'
import { MainLayoutProps } from '@types'

// ================================
// Componente Principal
// ================================

/**
 * Layout principal da aplicação
 * Fornece a estrutura base com sidebar e área de conteúdo
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#191919]">
      <Sidebar>{children}</Sidebar>
    </div>
  )
}

// ================================
// Exportações
// ================================

export default MainLayout
