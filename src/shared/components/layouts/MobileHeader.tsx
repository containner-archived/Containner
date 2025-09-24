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
    <header className="bg-[#191919] lg:hidden font-freesans">
      <div className="flex items-center justify-between p-5">
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
          className="p-1 text-[#646569] hover:text-white transition-all duration-300 flex items-center justify-center"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <div className="w-8 h-8 relative flex items-center justify-center">
            {/* Hamburger Icon */}
            <div
              className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32 32H0V0H32V32ZM2 30H30V2H2V30Z"
                  fill="#646569"
                />
                <path
                  d="M11 14L9 16L11 18V23L9 20.666V11.333L11 9V14Z"
                  fill="#646569"
                />
                <path d="M15 20V23H13V20H15Z" fill="#646569" />
                <path d="M19 20V23H17V20H19Z" fill="#646569" />
                <path
                  d="M23 11.333V20.666L21 23V18L23 16L21 14V9L23 11.333Z"
                  fill="#646569"
                />
                <path d="M7 18.333L5 16L7 13.666V18.333Z" fill="#646569" />
                <path d="M27 16L25 18.333V13.666L27 16Z" fill="#646569" />
                <path d="M15 18L13 16L15 14V18Z" fill="#646569" />
                <path d="M19 16L17 18V14L19 16Z" fill="#646569" />
                <path d="M19 12H17V9H19V12Z" fill="#646569" />
                <path d="M15 12H13V9H15V12Z" fill="#646569" />
              </svg>
            </div>

            {/* Close (X) Icon */}
            <div
              className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
              }`}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32 32H0V0H32V32ZM2 30H30V2H2V30Z"
                  fill="#646569"
                />
                <path d="M7 26L5 24L7 22V26Z" fill="#646569" />
                <path d="M11 24L9 26V20L11 18V24Z" fill="#646569" />
                <path d="M23 20V26L21 24V18L23 20Z" fill="#646569" />
                <path d="M27 24L25 26V22L27 24Z" fill="#646569" />
                <path d="M15 12V20L13 22V10L15 12Z" fill="#646569" />
                <path d="M19 22L17 20V12L19 10V22Z" fill="#646569" />
                <path d="M11 8V14L9 12V6L11 8Z" fill="#646569" />
                <path d="M23 12L21 14V8L23 6V12Z" fill="#646569" />
                <path d="M7 10L5 8L7 6V10Z" fill="#646569" />
                <path d="M27 8L25 10V6L27 8Z" fill="#646569" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </header>
  )
}

export default MobileHeader
