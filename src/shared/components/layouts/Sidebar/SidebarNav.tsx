// src/layouts/SidebarNav.tsx
import React from 'react'
import { useActiveRoute } from '@/shared/hooks/useActiveRoute'
import { useI18n } from '@/shared/contexts/I18nContext'
import SidebarNavItem from './SidebarNavItem'

// Importar os SVGs
import Vextro from '@assets/nav/Vextro.jpg'
import Korri from '@assets/nav/Korri.jpg'

const SidebarNav: React.FC = () => {
  const { isActive } = useActiveRoute()
  const { t } = useI18n()

  const navItems = [
    // {
    //   icon: <img src={Containner} alt={t.nav.overview.title} className="w-16 h-16" />,
    //   title: t.nav.overview.title,
    //   subtitle: t.nav.overview.subtitle,
    //   path: '/containner'
    // },
    {
      icon: <img src={Vextro} alt={t.nav.vextro.title} className="w-16 h-16" />,
      title: t.nav.vextro.title,
      subtitle: t.nav.vextro.subtitle,
      path: '/vextro'
    },
    {
      icon: <img src={Korri} alt={t.nav.korri.title} className="w-16 h-16" />,
      title: t.nav.korri.title,
      subtitle: t.nav.korri.subtitle,
      path: '/korri'
    }
    // {
    //   icon: <img src={C0ffe} alt={t.nav.team.title} className="w-16 h-16" />,
    //   title: t.nav.team.title,
    //   subtitle: t.nav.team.subtitle,
    //   path: '/c0ffe'
    // },
    // {
    //   icon: <img src={Trac} alt={t.nav.settings.title} className="w-16 h-16" />,
    //   title: t.nav.settings.title,
    //   subtitle: t.nav.settings.subtitle,
    //   path: '/trac'
    // }
  ]

  return (
    <div className="font-freesans">
      <nav>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <SidebarNavItem
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                path={item.path}
                isActive={isActive(item.path)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SidebarNav
