// src/layouts/SidebarTitle.tsx
import React from 'react'

const SidebarTitle: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-semibold text-[#646569] leading-tight uppercase">
        pronto para abrir o containner?
      </h2>
      <div className="flex flex-col">
        <span className="text-[#646569] text-base font-normal leading-relaxed uppercase">
          open@containner.co
        </span>
        <span className="text-[#646569] text-base font-normal leading-relaxed uppercase">
          +55 54 9312-0440
        </span>
      </div>
    </div>
  )
}

export default SidebarTitle
