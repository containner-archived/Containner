import React from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarTitle from './SidebarTitle'
import SidebarNav from './SidebarNav'

interface SidebarProps {
  children?: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#191919] p-5">
      {/* Layout da sidebar em desktop - Grid 12 colunas */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-5 h-full">
        {/* Coluna da sidebar (navegação) - Ocupa 2 colunas */}
        <div className="col-span-2">
          <div className="flex flex-col gap-14 h-full">
            {/* Logo Section */}
            <SidebarLogo />

            {/* Title Section */}
            <SidebarTitle />

            {/* Navigation Section */}
            <div className="flex-1">
              <SidebarNav />
            </div>
          </div>
        </div>

        {/* Área do main content - Ocupa as 10 colunas restantes */}
        <div className="col-span-10 min-h-0">{children}</div>
      </div>

      {/* Layout mobile - apenas o conteúdo principal */}
      <div className="lg:hidden h-full">{children}</div>
    </div>
  )
}

export default Sidebar
