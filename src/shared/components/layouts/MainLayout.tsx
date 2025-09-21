import React, { useState } from 'react'
import Sidebar from './Sidebar'
import HamburgerMenu from './Sidebar/HamburguerMenu'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#191919]">
      {/* Mobile Hamburger Menu */}
      <HamburgerMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar que ocupa a tela toda */}
      <Sidebar>
        {/* Área reservada para o main content dentro da sidebar */}
        <div className="bg-transparent h-full overflow-y-auto">{children}</div>
      </Sidebar>
    </div>
  )
}

export default MainLayout
