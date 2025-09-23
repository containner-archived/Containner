import React, { useRef, useEffect } from 'react'
import { Languages } from 'lucide-react'
import { useI18n } from '@/shared/contexts/I18nContext'

export const LanguageSwitch: React.FC = () => {
  const { language, setLanguage, t } = useI18n()
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  // Atualiza a largura do background sempre que o idioma mudar
  useEffect(() => {
    if (contentRef.current && bgRef.current) {
      const contentWidth = contentRef.current.offsetWidth
      bgRef.current.style.width = `${contentWidth}px`
    }
  }, [language])

  const handleMouseEnter = () => {
    if (contentRef.current && bgRef.current) {
      const contentWidth = contentRef.current.offsetWidth
      bgRef.current.style.width = `${contentWidth}px`
      bgRef.current.style.transform = 'translateX(0)'
    }
  }

  const handleMouseLeave = () => {
    if (bgRef.current) {
      bgRef.current.style.transform = 'translateX(-100%)'
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative overflow-hidden inline-flex items-center py-2 text-sm text-[#646569] hover:text-[#191919] transition-colors duration-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${t.footer.language}: ${language === 'pt' ? 'Português' : 'English'}`}
    >
      {/* Elemento de fundo sempre presente */}
      <div
        ref={bgRef}
        className="bg-animation absolute top-0 left-0 h-full bg-[#646569] z-0"
        style={{
          width: '0px',
          transform: 'translateX(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Conteúdo */}
      <div
        ref={contentRef}
        className="relative z-10 flex items-center space-x-2"
      >
        <Languages size={16} />
        <span className="font-bold font-freesans">
          {language === 'pt' ? 'PT' : 'EN'}
        </span>
      </div>
    </button>
  )
}
