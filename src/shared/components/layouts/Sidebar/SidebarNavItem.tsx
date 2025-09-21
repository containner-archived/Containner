// src/layouts/SidebarNavItem.tsx
import React from 'react'

interface SidebarNavItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  title,
  subtitle
}) => {
  return (
    <a
      href="#"
      className="flex items-center gap-4 py-3 pl-0 hover:pl-3 pr-3 relative overflow-hidden transition-all duration-300 group"
    >
      {/* Background animado */}
      <div className="absolute inset-0 bg-[#646569] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>

      {/* Conteúdo por cima do background */}
      <div className="relative z-10 flex items-center gap-4 w-full">
        {/* Icon Section */}
        <div className="flex-shrink-0 text-[#646569] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        {/* Text Content - Vertically Centered */}
        <div className="flex flex-col justify-center min-w-0">
          <h3 className="font-semibold text-[#646569] group-hover:text-white transition-colors duration-300 text-sm">
            {title}
          </h3>
          <span className="text-xs text-[#646569] group-hover:text-gray-200 leading-tight mt-1 transition-colors duration-300">
            {subtitle}
          </span>
          git push -u origin main
        </div>
      </div>
    </a>
  )
}

export default SidebarNavItem
