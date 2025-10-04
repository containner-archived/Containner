import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useActiveRoute } from '@shared'
import { NavItem, NavigationProps } from '@types'

// ================================
// Constantes
// ================================

/**
 * Classes base para os links de navegação desktop
 */
const LINK_BASE_CLASSES = `
  relative
  font-medium
  text-base
  tracking-wide
  transition-all
  duration-300
  pb-2
  before:content-['']
  before:absolute
  before:bottom-0
  before:left-1/2
  before:w-0
  before:h-0.5
  before:transition-all
  before:duration-300
  before:ease-out
  before:-translate-x-1/2
  before:bg-primary-black
  dark:before:bg-primary-white
`

// ================================
// Helpers e Funções Auxiliares
// ================================

/**
 * Gera as classes CSS para um link baseado no estado ativo
 */
const getLinkClasses = (href: string, isActive: (path: string) => boolean) => {
  const baseClasses = LINK_BASE_CLASSES
  const activeClasses = isActive(href)
    ? 'text-primary-black dark:text-primary-white before:w-full'
    : 'text-primary-black/60 dark:text-primary-white/60 hover:text-primary-black dark:hover:text-primary-white hover:before:w-full'

  return `${baseClasses} ${activeClasses}`
}

/**
 * Gera as classes CSS para links mobile baseado no estado ativo
 */
const getMobileLinkClasses = (
  href: string,
  isActive: (path: string) => boolean
) => {
  const baseClasses = `
    block text-xl font-medium py-3 border-b border-primary-black/20 dark:border-primary-white/20
    transition-all duration-300
  `

  const activeClasses = isActive(href)
    ? 'text-primary-black dark:text-primary-white border-primary-black dark:border-primary-white'
    : 'text-primary-black/60 dark:text-primary-white/60 hover:text-primary-black dark:hover:text-primary-white hover:border-primary-black/40 dark:hover:border-primary-white/40'

  return `${baseClasses} ${activeClasses}`
}

/**
 * Classes para as barras do menu hamburger baseadas no estado
 */
const getHamburgerBarClasses = (
  isOpen: boolean,
  position: 'top' | 'middle' | 'bottom'
) => {
  const baseClasses =
    'block w-6 h-0.5 bg-primary-black dark:bg-primary-white transition-all duration-300'

  const animations = {
    top: isOpen ? 'rotate-45 translate-y-2 origin-center' : '',
    middle: isOpen ? 'opacity-0' : 'opacity-100',
    bottom: isOpen ? '-rotate-45 -translate-y-2 origin-center' : ''
  }

  return `${baseClasses} ${animations[position]}`
}

// ================================
// Componentes Auxiliares
// ================================

/**
 * Navegação para desktop
 */
const DesktopNavigation: React.FC<{
  items: NavItem[]
  isActive: (path: string) => boolean
}> = ({ items, isActive }) => (
  <nav className="hidden md:flex items-center space-x-8">
    {items.map((item) => (
      <Link
        key={item.label}
        to={item.href}
        onClick={item.onClick}
        className={getLinkClasses(item.href, isActive)}
      >
        {item.label}
      </Link>
    ))}
  </nav>
)

/**
 * Botão do menu hamburger para mobile
 */
const MobileMenuButton: React.FC<{ isOpen: boolean; onToggle: () => void }> = ({
  isOpen,
  onToggle
}) => (
  <button
    onClick={onToggle}
    className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
    aria-label="Toggle menu"
  >
    <span className={getHamburgerBarClasses(isOpen, 'top')} />
    <span className={getHamburgerBarClasses(isOpen, 'middle')} />
    <span className={getHamburgerBarClasses(isOpen, 'bottom')} />
  </button>
)

/**
 * Overlay do menu mobile
 */
const MobileOverlay: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null

  return (
    <div
      className="md:hidden fixed inset-0 z-40 bg-primary-black bg-opacity-50"
      onClick={onClose}
    />
  )
}

/**
 * Menu de navegação mobile
 */
const MobileNavigation: React.FC<{
  items: NavItem[]
  isOpen: boolean
  isActive: (path: string) => boolean
  onLinkClick: () => void
}> = ({ items, isOpen, isActive, onLinkClick }) => (
  <nav
    className={`
      md:hidden fixed top-0 right-0 z-40 h-full w-80 max-w-[80vw]
      bg-primary-white dark:bg-primary-black border-l border-primary-black dark:border-primary-white
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
  >
    <div className="pt-24 px-8">
      {/* Menu Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={onLinkClick}
            className={getMobileLinkClasses(item.href, isActive)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Footer do menu mobile */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="text-sm text-primary-black/50 dark:text-primary-white/50 text-center">
          Menu
        </div>
      </div>
    </div>
  </nav>
)

// ================================
// Componente Principal
// ================================

/**
 * Componente de navegação responsivo
 * Exibe navegação horizontal no desktop e menu hambúrguer no mobile
 */
export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const { isActive } = useActiveRoute()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Fecha o menu quando a tela ficar grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <DesktopNavigation items={items} isActive={isActive} />
      <MobileMenuButton isOpen={isOpen} onToggle={toggleMenu} />
      <MobileOverlay isOpen={isOpen} onClose={closeMenu} />
      <MobileNavigation
        items={items}
        isOpen={isOpen}
        isActive={isActive}
        onLinkClick={closeMenu}
      />
    </>
  )
}

// ================================
// Exportações
// ================================

export default Navigation
