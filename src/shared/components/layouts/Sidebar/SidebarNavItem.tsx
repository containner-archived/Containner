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
        flex items-center gap-4 py-3 pr-3 relative overflow-hidden transition-all duration-300 group cursor-pointer
        ${isActive ? 'pl-3' : 'pl-0 hover:pl-3'}
      `}
    >
      {/* Background animado */}
      <div
        className={`
          absolute inset-0 bg-[#646569] transition-transform duration-300 ease-out
          ${isActive ? 'translate-x-0' : 'transform -translate-x-full group-hover:translate-x-0'}
        `}
      ></div>

      {/* Conteúdo por cima do background */}
      <div className="relative z-10 flex items-center gap-4 w-full">
        {/* Icon Section */}
        <div
          className={`
            flex-shrink-0 transition-colors duration-300
            ${isActive ? 'text-white' : 'text-[#646569] group-hover:text-white'}
          `}
        >
          {icon}
        </div>

        {/* Text Content - Vertically Centered */}
        <div className="flex flex-col justify-center min-w-0">
          <h3
            className={`
              font-semibold transition-colors duration-300 text-sm
              ${isActive ? 'text-[#191919]' : 'text-[#646569] group-hover:text-[#191919]'}
            `}
          >
            {title}
          </h3>
          <span
            className={`
              text-xs leading-tight mt-1 transition-colors duration-300
              ${isActive ? 'text-[#191919]' : 'text-[#646569] group-hover:text-[#191919]'}
            `}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SidebarNavItem
