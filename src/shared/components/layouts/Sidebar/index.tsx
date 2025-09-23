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
      <div className="hidden md:flex h-screen overflow-hidden">
        {/* Sidebar fixa - SEM scroll */}
        <div
          className="
            md:w-1/3 pl-5 py-5
            lg:w-1/4 xl:w-1/5 2xl:w-1/6
            fixed left-0 top-0 h-full bg-[#191919]
            z-10 overflow-hidden
          "
        >
          <div className="flex flex-col gap-8 h-full">
            {/* Logo Section */}
            <SidebarLogo />

            {/* Title Section */}
            <SidebarTitle />

            {/* Navigation Section - SEM scroll */}
            <div className="flex-1 mt-4">
              <SidebarNav />
            </div>

            {/* Language Switch Button - Fixed at bottom */}
            <LanguageSwitch />
          </div>
        </div>

        {/* Área do main content - ÚNICA scrollbar */}
        <div
          className="
            flex-1
            md:ml-[33.33%]
            lg:ml-[25%]
            xl:ml-[20%]
            2xl:ml-[16.67%]
            overflow-y-auto
            h-screen
          "
        >
          <div className="p-5">{children}</div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Mobile Header - Fixed at top */}
        <MobileHeader
          onMenuClick={handleMenuToggle}
          isMenuOpen={isMobileMenuOpen}
        />

        {/* Hamburger Menu - Conditional rendering */}
        <HamburgerMenu isOpen={isMobileMenuOpen} onClose={handleMenuClose} />

        {/* Main content - Takes remaining space */}
        <div className="flex-1 px-5 pb-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

export default Sidebar
