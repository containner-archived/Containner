import React, { useEffect, useRef } from 'react'
import SidebarTitle from './SidebarTitle'
import SidebarNav from './SidebarNav'

// ================================
// Types & Interfaces
// ================================
interface HamburgerMenuProps {
  isOpen: boolean
  onClose: () => void
}

// ================================
// Main Component
// ================================
/**
 * Hamburger menu component for mobile navigation
 * Handles outside click detection and menu visibility
 */
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)

  // ================================
  // Effects
  // ================================
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element

      // Verifica se o clique foi no botão do header (X ou hambúrguer)
      if (target?.closest('button[aria-label*="Menu"]')) {
        return
      }

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // ================================
  // Early Return
  // ================================
  if (!isOpen) {
    return null
  }

  // ================================
  // Render
  // ================================
  return (
    <div
      ref={menuRef}
      className="bg-[#191919] lg:hidden max-h-[50vh] overflow-y-auto font-freesans"
    >
      <div className="p-5">
        <div className="flex flex-col gap-6">
          {/* Title Section */}
          <SidebarTitle />

          {/* Navigation Section */}
          <div onClick={onClose}>
            <SidebarNav />
          </div>
        </div>
      </div>
    </div>
  )
}

// ================================
// Exports
// ================================
export default HamburgerMenu
