import React, { useEffect, useRef } from 'react'
import SidebarTitle from './SidebarTitle'
import SidebarNav from './SidebarNav'
import { LanguageSwitch } from '../../ui/LanguageSwitch'

interface HamburgerMenuProps {
  isOpen: boolean
  onClose: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)

  // Detecta cliques fora do menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

  // Se não está aberto, retorna null (não renderiza nada)
  if (!isOpen) {
    return null
  }

  return (
    <div
      ref={menuRef}
      className="bg-[#191919] lg:hidden max-h-[50vh] overflow-y-auto font-freesans"
    >
      <div className="p-4">
        <div className="flex flex-col gap-6">
          {/* Title Section */}
          <SidebarTitle />

          {/* Navigation Section */}
          <div
            onClick={() => {
              onClose()
            }}
          >
            <SidebarNav />
          </div>

          {/* Language Switch - No final do menu */}
          <LanguageSwitch />
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
