import React from 'react'
import { useI18n } from '@/shared/contexts/I18nContext'

const SidebarTitle: React.FC = () => {
  const { t } = useI18n()

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget
    const span = target.querySelector('span') as HTMLElement

    if (!target.querySelector('.bg-animation') && span) {
      const bgDiv = document.createElement('div')
      bgDiv.className = 'bg-animation'
      bgDiv.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: ${span.offsetWidth}px;
        height: ${target.offsetHeight}px;
        background-color: #646569;
        transform: translateX(-100%);
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
      `
      target.insertBefore(bgDiv, target.firstChild)

      // Force reflow para garantir que o estado inicial seja aplicado
      bgDiv.offsetHeight

      // Use requestAnimationFrame para garantir que a animação aconteça no próximo frame
      requestAnimationFrame(() => {
        bgDiv.style.transform = 'translateX(0)'
      })
    } else {
      const bg = target.querySelector('.bg-animation') as HTMLElement
      if (bg) bg.style.transform = 'translateX(0)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bg = e.currentTarget.querySelector('.bg-animation') as HTMLElement
    if (bg) bg.style.transform = 'translateX(-100%)'
  }

  return (
    <div className="flex flex-col gap-6 font-freesans">
      <h2 className="text-base font-bold text-[#646569] leading-normal uppercase">
        <span className="inline sm:block">{t.sidebar.title.line1}</span>{' '}
        <span className="inline sm:block">{t.sidebar.title.line2}</span>
      </h2>
      <div className="flex flex-col">
        <a
          href="mailto:open@containner.co"
          className="text-[#646569] text-base font-normal leading-normal uppercase relative overflow-hidden transition-colors duration-500 hover:text-[#191919] inline-block w-fit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative z-10">{t.sidebar.contact.email}</span>
        </a>
        <a
          href="https://wa.me/5554993120440"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#646569] text-base font-normal leading-normal uppercase relative overflow-hidden transition-colors duration-500 hover:text-[#191919] inline-block w-fit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative z-10">{t.sidebar.contact.phone}</span>
        </a>
      </div>
    </div>
  )
}

export default SidebarTitle
