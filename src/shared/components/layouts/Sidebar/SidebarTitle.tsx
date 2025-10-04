import React from 'react'
import { useI18n } from '@core'

// ================================
// HELPERS E FUNÇÕES AUXILIARES
// ================================

/**
 * Cria e aplica a animação de fundo no hover dos links
 */
const createBackgroundAnimation = (
  target: HTMLAnchorElement,
  span: HTMLElement
) => {
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
    display: flex;
    align-items: center;
  `
  target.insertBefore(bgDiv, target.firstChild)

  // Force reflow para garantir que o estado inicial seja aplicado
  bgDiv.offsetHeight

  // Use requestAnimationFrame para garantir que a animação aconteça no próximo frame
  requestAnimationFrame(() => {
    bgDiv.style.transform = 'translateX(0)'
  })
}

// ================================
// COMPONENTE PRINCIPAL
// ================================

/**
 * Componente de título e contatos da sidebar
 * Renderiza o título da empresa e links de contato com animação hover
 */
const SidebarTitle: React.FC = () => {
  const { t } = useI18n()

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget
    const span = target.querySelector('span') as HTMLElement

    if (!target.querySelector('.bg-animation') && span) {
      createBackgroundAnimation(target, span)
      return
    }

    const bg = target.querySelector('.bg-animation') as HTMLElement
    if (bg) {
      bg.style.transform = 'translateX(0)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bg = e.currentTarget.querySelector('.bg-animation') as HTMLElement
    if (bg) {
      bg.style.transform = 'translateX(-100%)'
    }
  }

  return (
    <div className="flex flex-col gap-6 font-freesans">
      {/* Título da empresa */}
      <h2 className="text-base font-bold text-[#646569] leading-tight uppercase">
        <span className="inline sm:block">{t.sidebar.title.line1}</span>{' '}
        <span className="inline sm:block">{t.sidebar.title.line2}</span>
      </h2>

      {/* Links de contato */}
      <div className="flex flex-col">
        <a
          href="mailto:open@containner.co"
          className="text-[#646569] text-base font-normal leading-normal uppercase relative overflow-hidden transition-colors duration-500 hover:text-[#191919] inline-flex w-fit items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative z-10 flex items-center h-full">
            {t.sidebar.contact.email}
          </span>
        </a>

        <a
          href="https://wa.me/5554993120440"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#646569] text-base font-normal leading-normal uppercase relative overflow-hidden transition-colors duration-500 hover:text-[#191919] inline-flex w-fit items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative z-10 flex items-center h-full">
            {t.sidebar.contact.phone}
          </span>
        </a>
      </div>
    </div>
  )
}

// ================================
// EXPORTAÇÕES
// ================================

export default SidebarTitle
