// src/layouts/SidebarNavItem.tsx
import React from 'react'
import { Link } from 'react-router-dom'

interface SidebarNavItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  path: string
  isActive?: boolean
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  title,
  subtitle,
  path,
  isActive = false
}) => {
  return (
    <Link
      to={path}
      className={`
        flex items-center gap-4 py-3 relative overflow-hidden transition-all duration-500 group cursor-pointer font-freesans
        ${isActive ? 'pl-3' : 'pl-0 hover:pl-3'}
      `}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Background animado */}
      <div
        className={`
          absolute inset-0 bg-[#646569] transition-transform duration-500 group
          ${isActive ? 'translate-x-0' : 'transform -translate-x-full group-hover:translate-x-0'}
        `}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      ></div>

      {/* Conteúdo por cima do background */}
      <div className="relative z-10 flex items-center gap-4 w-full">
        {/* Icon Section */}
        <div
          className={`
            flex-shrink-0 transition-colors duration-500
            ${isActive ? 'text-white' : 'text-[#646569] group-hover:text-white'}
          `}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {icon}
        </div>

        {/* Text Content - Vertically Centered */}
        <div className="flex flex-col justify-center min-w-0">
          <h3
            className={`
              font-bold transition-colors duration-500 text-sm
              ${isActive ? 'text-[#191919]' : 'text-[#646569] group-hover:text-[#191919]'}
            `}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {title}
          </h3>
          <span
            className={`
              text-xs leading-tight mt-1 transition-colors duration-500
              ${isActive ? 'text-[#191919]' : 'text-[#646569] group-hover:text-[#191919]'}
            `}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SidebarNavItem
