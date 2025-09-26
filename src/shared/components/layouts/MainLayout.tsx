import React from 'react'
import Sidebar from './Sidebar'

// ================================
// Tipos e Interfaces
// ================================

/**
 * Props do componente MainLayout
 */
interface MainLayoutProps {
  /** Conteúdo filho a ser renderizado dentro do layout */
  children: React.ReactNode
}

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
