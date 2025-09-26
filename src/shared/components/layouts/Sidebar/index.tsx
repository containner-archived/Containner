import React, { useState } from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarTitle from './SidebarTitle'
import SidebarNav from './SidebarNav'
import MobileHeader from '../MobileHeader'
import HamburgerMenu from './HamburguerMenu'

// ================================
// Types & Interfaces
// ================================
interface SidebarProps {
  children?: React.ReactNode
}

// ================================
// Main Component
// ================================
/**
 * Main sidebar layout component
 * Handles both desktop sidebar and mobile hamburger menu layouts
 * Desktop: Fixed sidebar with scrollable content area
 * Mobile: Collapsible hamburger menu with header
 */
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // ================================
  // Handlers
  // ================================
  const handleMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMenuClose = (): void => {
    setIsMobileMenuOpen(false)
  }

  // ================================
  // Render
  // ================================
  return (
    <div className="min-h-screen bg-[#191919] font-freesans">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-screen overflow-hidden">
        {/* Fixed Sidebar - No scroll */}
        <div
          className="
            md:w-80 pl-5 py-5
            fixed left-0 top-0 h-full bg-[#191919]
            z-10 overflow-hidden
          "
        >
          <div className="flex flex-col gap-14 h-full">
            {/* Logo Section */}
            <SidebarLogo />

            {/* Title Section */}
            <SidebarTitle />

            {/* Navigation Section - No scroll */}
            <div className="flex-1">
              <SidebarNav />
            </div>
          </div>
        </div>

        {/* Main Content Area - Only scrollbar */}
        <div
          className="
            flex-1
            md:ml-80
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

        {/* Main Content - Takes remaining space */}
        <div className="flex-1 px-5 pb-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

// ================================
// Exports
// ================================
export default Sidebar
