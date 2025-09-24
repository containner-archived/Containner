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
                  fill="currentColor"
                />
                <path
                  d="M14.75 14L13 16L14.75 18H17.25L19 16L17.25 14H14.75Z"
                  fill="currentColor"
                />
                <path
                  d="M11 14.8564L10 16L11 17.1426V23L9 21V11L11 9V14.8564ZM13.5 20H15V23H13V19.4277L13.5 20ZM19 23H17V20H18.5L19 19.4277V23ZM23 11V21L21 23V17.1426L22 16L21 14.8564V9L23 11ZM7 19L5 17V15L7 13V19ZM27 15V17L25 19V13L27 15ZM15 12H13.5L13 12.5713V9H15V12ZM19 12.5713L18.5 12H17V9H19V12.5713Z"
                  fill="currentColor"
                />
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
                  fill="currentColor"
                />
                <path d="M11 24L9 26V20L11 18V24Z" fill="currentColor" />
                <path d="M23 20V26L21 24V18L23 20Z" fill="currentColor" />
                <path d="M7 24L6 23L7 22V24Z" fill="currentColor" />
                <path d="M26 23L25 24V22L26 23Z" fill="currentColor" />
                <path d="M15 12V20L13 22V10L15 12Z" fill="currentColor" />
                <path d="M19 22L17 20V12L19 10V22Z" fill="currentColor" />
                <path d="M11 8V14L9 12V6L11 8Z" fill="currentColor" />
                <path d="M23 12L21 14V8L23 6V12Z" fill="currentColor" />
                <path d="M7 10L6 9L7 8V10Z" fill="currentColor" />
                <path d="M26 9L25 10V8L26 9Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </header>
  )
}

export default MobileHeader
