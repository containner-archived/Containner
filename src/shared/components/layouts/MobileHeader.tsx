// src/layouts/MobileHeader.tsx
import React from 'react'
import SidebarLogo from './Sidebar/SidebarLogo'

interface MobileHeaderProps {
  onMenuClick: () => void
  isMenuOpen: boolean
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  onMenuClick,
  isMenuOpen
}) => {
  return (
    <header className="bg-[#191919] lg:hidden">
      <div className="flex items-center justify-between p-2">
        {/* Logo */}
        <div className="flex-1">
          <SidebarLogo />
        </div>

        {/* Hamburger Menu Button / Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onMenuClick()
          }}
          className="p-2 text-[#646569] hover:text-white transition-all duration-300"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <div className="w-6 h-6 relative">
            {/* Hamburger Icon */}
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Close (X) Icon */}
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </header>
  )
}

export default MobileHeader
