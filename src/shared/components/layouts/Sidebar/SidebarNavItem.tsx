import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarNavItemProps } from '@types'

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
    absolute inset-0 transition-transform ${TRANSITION_CONFIG.duration} group
    ${isActive ? 'translate-x-0' : 'transform -translate-x-full group-hover:translate-x-0'}
  `

  const iconClasses = `
    flex-shrink-0 transition-colors ${TRANSITION_CONFIG.duration}
  `

  const titleClasses = `
    font-bold transition-colors ${TRANSITION_CONFIG.duration} text-sm
  `

  const subtitleClasses = `
    text-xs leading-tight mt-1 transition-colors ${TRANSITION_CONFIG.duration}
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
      onMouseEnter={(e) => {
        if (!isActive) {
          const icon = e.currentTarget.querySelector(
            '[data-icon]'
          ) as HTMLElement
          const title = e.currentTarget.querySelector(
            '[data-title]'
          ) as HTMLElement
          const subtitle = e.currentTarget.querySelector(
            '[data-subtitle]'
          ) as HTMLElement

          if (icon) icon.style.color = COLORS.activeIcon
          if (title) title.style.color = COLORS.activeText
          if (subtitle) subtitle.style.color = COLORS.activeText
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          const icon = e.currentTarget.querySelector(
            '[data-icon]'
          ) as HTMLElement
          const title = e.currentTarget.querySelector(
            '[data-title]'
          ) as HTMLElement
          const subtitle = e.currentTarget.querySelector(
            '[data-subtitle]'
          ) as HTMLElement

          if (icon) icon.style.color = COLORS.inactiveText
          if (title) title.style.color = COLORS.inactiveText
          if (subtitle) subtitle.style.color = COLORS.inactiveText
        }
      }}
    >
      {/* Animated Background */}
      <div
        className={backgroundClasses}
        style={{
          backgroundColor: COLORS.background,
          transitionTimingFunction: TRANSITION_CONFIG.timing
        }}
      />

      {/* Content Above Background */}
      <div className="relative z-10 flex items-center gap-4 w-full">
        {/* Icon Section */}
        <div
          data-icon
          className={iconClasses}
          style={{
            color: isActive ? COLORS.activeIcon : COLORS.inactiveText,
            transitionTimingFunction: TRANSITION_CONFIG.timing
          }}
        >
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center min-w-0">
          <h3
            data-title
            className={titleClasses}
            style={{
              color: isActive ? COLORS.activeText : COLORS.inactiveText,
              transitionTimingFunction: TRANSITION_CONFIG.timing
            }}
          >
            {title}
          </h3>

          <span
            data-subtitle
            className={subtitleClasses}
            style={{
              color: isActive ? COLORS.activeText : COLORS.inactiveText,
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
