// src/layouts/Sidebar.tsx
import React, { useState } from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarTitle from './SidebarTitle'
import SidebarNav from './SidebarNav'
import MobileHeader from '../MobileHeader'
import HamburgerMenu from './HamburguerMenu'

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
    <div className="min-h-screen bg-[#191919]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Sidebar fixa - Largura proporcional */}
        <div className="w-1/6 fixed left-0 top-0 h-full bg-[#191919] p-5 z-10">
          <div className="flex flex-col gap-14 h-full">
            {/* Logo Section */}
            <SidebarLogo />

            {/* Title Section */}
            <SidebarTitle />

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto">
              <SidebarNav />
            </div>
          </div>
        </div>

        {/* Área do main content - Com margin-left para não sobrepor a sidebar */}
        <div className="flex-1 ml-[16.67%] p-5 overflow-y-auto">
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
