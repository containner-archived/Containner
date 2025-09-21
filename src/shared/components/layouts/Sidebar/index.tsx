// src/layouts/Sidebar.tsx
import React, { useState } from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarTitle from './SidebarTitle'
import SidebarNav from './SidebarNav'
import MobileHeader from '../MobileHeader'
import HamburgerMenu from './HamburguerMenu'
import { LanguageSwitch } from '../../ui/LanguageSwitch'

interface SidebarProps {
  children?: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#191919] font-freesans">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-screen">
        {/* Sidebar fixa - Larguras responsivas por tamanho de tela */}
        <div
          className="
            md:w-1/1 p-5
            lg:w-1/1 xl:w-1/1 2xl:w-1/1
            fixed left-0 top-0 h-full bg-[#191919]
            z-10
          "
        >
          <div className="flex flex-col gap-8 h-full">
            {/* Logo Section */}
            <SidebarLogo />

            {/* Title Section */}
            <SidebarTitle />

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto mt-4">
              <SidebarNav />
            </div>

            {/* Language Switch Button - Fixed at bottom */}
            <LanguageSwitch />
          </div>
        </div>

        {/* Área do main content - Com margin-left responsivo */}
        <div
          className="
            flex-1
            sm:ml-[40%] sm:p-3
            md:ml-[33.33%] md:p-4
            lg:ml-[25%] lg:p-5
            xl:ml-[20%] xl:p-5
            2xl:ml-[16.67%] 2xl:p-6
            overflow-y-auto
          "
        >
          <div className="h-full">{children}</div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col h-screen">
        {/* Mobile Header - Fixed at top */}
        <MobileHeader
          onMenuClick={handleMenuToggle}
          isMenuOpen={isMobileMenuOpen}
        />

        {/* Hamburger Menu - Conditional rendering pushes content down */}
        <HamburgerMenu isOpen={isMobileMenuOpen} onClose={handleMenuClose} />

        {/* Main content - Takes remaining space */}
        <div className="flex-1 px-5 pb-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

export default Sidebar
