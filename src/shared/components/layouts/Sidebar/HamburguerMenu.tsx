// src/layouts/HamburgerMenu.tsx
import React, { useEffect } from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarTitle from './SidebarTitle'
import SidebarNav from './SidebarNav'

interface HamburgerMenuProps {
  isOpen: boolean
  onClose: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Mobile Menu - Expands vertically up to 50% height */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 lg:hidden max-h-[50vh] overflow-y-auto">
        <div className="p-5">
          <div className="flex flex-col gap-14">
            {/* Close button */}
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <SidebarLogo />
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="Close Menu"
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
              </button>
            </div>

            {/* Title Section */}
            <SidebarTitle />

            {/* Navigation Section */}
            <div onClick={onClose}>
              <SidebarNav />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu
