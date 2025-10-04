import React from 'react'
import SidebarLogo from './Sidebar/SidebarLogo'
import { MobileHeaderProps } from '@types'

// ================================
// Componentes Auxiliares
// ================================

/**
 * Ícone do menu hamburger
 */
const HamburgerIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26 25H6V21H26V25Z" fill="#646569" />
    <path d="M26 18H6V14H26V18Z" fill="#646569" />
    <path d="M26 11H6V7H26V11Z" fill="#646569" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 32H0V0H32V32ZM2 30H30V2H2V30Z"
      fill="#646569"
    />
  </svg>
)

/**
 * Ícone de fechar (X)
 */
const CloseIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 9L19 16L26 23L23 26L16 19L9 26L6 23L13 16L6 9L9 6L16 13L23 6L26 9Z"
      fill="#646569"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 32H0V0H32V32ZM2 30H30V2H2V30Z"
      fill="#646569"
    />
  </svg>
)

// ================================
// Componente Principal
// ================================

/**
 * Header mobile com logo e botão de menu
 * Visível apenas em dispositivos móveis (escondido em lg+)
 */
const MobileHeader: React.FC<MobileHeaderProps> = ({
  onMenuClick,
  isMenuOpen
}) => {
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onMenuClick()
  }

  const getAriaLabel = () => (isMenuOpen ? 'Close Menu' : 'Open Menu')

  const getIconClasses = (isVisible: boolean) =>
    `absolute inset-0 transition-all duration-300 flex items-center justify-center ${
      isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
    }`

  return (
    <header className="bg-[#191919] lg:hidden font-freesans">
      <div className="flex items-center justify-between p-5">
        {/* Logo */}
        <div className="flex-1">
          <SidebarLogo />
        </div>

        {/* Botão do menu hamburger/fechar */}
        <button
          onClick={handleMenuClick}
          className="p-1 text-[#646569] hover:text-white transition-all duration-300 flex items-center justify-center"
          aria-label={getAriaLabel()}
        >
          <div className="w-8 h-8 relative flex items-center justify-center">
            {/* Ícone hamburger */}
            <div className={getIconClasses(!isMenuOpen)}>
              <HamburgerIcon />
            </div>

            {/* Ícone fechar (X) */}
            <div className={getIconClasses(isMenuOpen)}>
              <CloseIcon />
            </div>
          </div>
        </button>
      </div>
    </header>
  )
}

// ================================
// Exportações
// ================================

export default MobileHeader
