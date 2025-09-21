// src/layouts/SidebarNav.tsx
import React from 'react'
import { useLocation } from 'react-router-dom'
import SidebarNavItem from './SidebarNavItem'

// Importar os SVGs
import Containner from '@assets/nav/container.svg'
import Azul from '@assets/nav/azul.svg'
import Korri from '@assets/nav/korri.svg'
import C0ffe from '@assets/nav/c0ffe.svg'
import Trac from '@assets/nav/trac.svg'

const SidebarNav: React.FC = () => {
  const location = useLocation()

  const navItems = [
    // {
    //   icon: <img src={Containner} alt="Overview" className="w-16 h-16" />,
    //   title: 'Overview',
    //   subtitle: 'General statistics and insights',
    //   path: '/containner'
    // },
    {
      icon: <img src={Azul} alt="Vextro©" className="w-16 h-16" />,
      title: 'Vextro©',
      subtitle: 'Marketing contra o mercado',
      path: '/vextro'
    },
    {
      icon: <img src={Korri} alt="Korri©" className="w-16 h-16" />,
      title: 'Korri©',
      subtitle: 'Roupas esportivas para a correria',
      path: '/korri'
    }
    // {
    //   icon: <img src={C0ffe} alt="Team" className="w-16 h-16" />,
    //   title: 'Team',
    //   subtitle: 'Collaborate with team members',
    //   path: '/c0ffe'
    // },
    // {
    //   icon: <img src={Trac} alt="Settings" className="w-16 h-16" />,
    //   title: 'Trac',
    //   subtitle: 'Configure your preferences',
    //   path: '/trac'
    // }
  ]

  return (
    <div className="">
      <nav>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <SidebarNavItem
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                path={item.path}
                isActive={location.pathname === item.path}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SidebarNav
