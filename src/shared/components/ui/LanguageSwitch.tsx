import React from 'react'
import { Languages } from 'lucide-react'
import { useI18n } from '@/shared/contexts/I18nContext'

export const LanguageSwitch: React.FC = () => {
  const { language, setLanguage, t } = useI18n()

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bg = e.currentTarget.querySelector('.bg-animation') as HTMLElement
    if (bg) {
      bg.style.transform = 'translateX(0)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bg = e.currentTarget.querySelector('.bg-animation') as HTMLElement
    if (bg) {
      bg.style.transform = 'translateX(-100%)'
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative overflow-hidden flex items-center space-x-2 px-3 py-2 text-sm text-[#646569] hover:text-white transition-colors duration-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${t.footer.language}: ${language === 'pt' ? 'Português' : 'English'}`}
    >
      {/* Elemento de fundo sempre presente */}
      <div
        className="bg-animation absolute top-0 left-0 w-full h-full bg-[#646569] z-0"
        style={{
          transform: 'translateX(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex items-center space-x-2">
        <Languages size={16} />
        <span className="font-medium">{language === 'pt' ? 'PT' : 'EN'}</span>
      </div>
    </button>
  )
}
