import React from 'react'
import { Link } from 'react-router-dom'

// ================================
// Types & Interfaces
// ================================
interface SidebarNavItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  path: string
  isActive?: boolean
}

// ================================
// Constants
// ================================
const TRANSITION_CONFIG = {
  duration: 'duration-500',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)'
}

const COLORS = {
  background: '#646569',
  activeText: '#191919',
  inactiveText: '#646569',
  activeIcon: 'white'
}

// ================================
// Main Component
// ================================
/**
 * Sidebar navigation item component with animated background and hover effects
 * Features smooth transitions for active/inactive states and hover interactions
 */
const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  title,
  subtitle,
  path,
  isActive = false
}) => {
  // ================================
  // Computed Classes
  // ================================
  const linkClasses = `
    flex items-center gap-4 py-3 relative overflow-hidden transition-all ${TRANSITION_CONFIG.duration} group cursor-pointer font-freesans
    ${isActive ? 'pl-3' : 'pl-0 hover:pl-3'}
  `

  const backgroundClasses = `
    absolute inset-0 bg-[${COLORS.background}] transition-transform ${TRANSITION_CONFIG.duration} group
    ${isActive ? 'translate-x-0' : 'transform -translate-x-full group-hover:translate-x-0'}
  `

  const iconClasses = `
    flex-shrink-0 transition-colors ${TRANSITION_CONFIG.duration}
    ${isActive ? `text-${COLORS.activeIcon}` : `text-[${COLORS.inactiveText}] group-hover:text-${COLORS.activeIcon}`}
  `

  const titleClasses = `
    font-bold transition-colors ${TRANSITION_CONFIG.duration} text-sm
    ${isActive ? `text-[${COLORS.activeText}]` : `text-[${COLORS.inactiveText}] group-hover:text-[${COLORS.activeText}]`}
  `

  const subtitleClasses = `
    text-xs leading-tight mt-1 transition-colors ${TRANSITION_CONFIG.duration}
    ${isActive ? `text-[${COLORS.activeText}]` : `text-[${COLORS.inactiveText}] group-hover:text-[${COLORS.activeText}]`}
  `

  // ================================
  // Render
  // ================================
  return (
    <Link
      to={path}
      className={linkClasses}
      style={{
        transitionTimingFunction: TRANSITION_CONFIG.timing
      }}
    >
      {/* Animated Background */}
      <div
        className={backgroundClasses}
        style={{
          transitionTimingFunction: TRANSITION_CONFIG.timing
        }}
      />

      {/* Content Above Background */}
      <div className="relative z-10 flex items-center gap-4 w-full">
        {/* Icon Section */}
        <div
          className={iconClasses}
          style={{
            transitionTimingFunction: TRANSITION_CONFIG.timing
          }}
        >
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center min-w-0">
          <h3
            className={titleClasses}
            style={{
              transitionTimingFunction: TRANSITION_CONFIG.timing
            }}
          >
            {title}
          </h3>

          <span
            className={subtitleClasses}
            style={{
              transitionTimingFunction: TRANSITION_CONFIG.timing
            }}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  )
}

// ================================
// Exports
// ================================
export default SidebarNavItem
