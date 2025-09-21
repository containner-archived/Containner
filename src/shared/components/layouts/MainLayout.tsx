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
      {/* Mobile Hamburger Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-md shadow-md hover:bg-gray-50"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? 'rotate-45 translate-y-1'
                  : '-translate-y-0.5'
              }`}
            ></span>
            <span
              className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? '-rotate-45 -translate-y-1'
                  : 'translate-y-0.5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      <HamburgerMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar que ocupa a tela toda */}
      <Sidebar>
        {/* Área reservada para o main content dentro da sidebar */}
        <div className="bg-yellow-500 p-4 lg:p-6 h-full overflow-y-auto">
          {children}
        </div>
      </Sidebar>
    </div>
  )
}

export default MainLayout
