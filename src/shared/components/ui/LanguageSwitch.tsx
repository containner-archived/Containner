import React, { useRef, useEffect } from 'react'
import { Languages } from 'lucide-react'
import { useI18n } from '@/shared/contexts/I18nContext'

// ================================
// Tipos e Interfaces
// ================================

interface LanguageSwitchProps {}

// ================================
// Helpers e Funções Auxiliares
// ================================

/**
 * Atualiza a largura do elemento de fundo baseado no conteúdo
 */
const updateBackgroundWidth = (
  contentElement: HTMLDivElement,
  backgroundElement: HTMLDivElement
) => {
  const contentWidth = contentElement.offsetWidth
  backgroundElement.style.width = `${contentWidth}px`
}

/**
 * Aplica a animação de entrada do background
 */
const showBackground = (backgroundElement: HTMLDivElement) => {
  backgroundElement.style.transform = 'translateX(0)'
}

/**
 * Aplica a animação de saída do background
 */
const hideBackground = (backgroundElement: HTMLDivElement) => {
  backgroundElement.style.transform = 'translateX(-100%)'
}

// ================================
// Componente Principal
// ================================

/**
 * Componente de troca de idioma com animação hover
 * Alterna entre português e inglês com feedback visual
 */
export const LanguageSwitch: React.FC<LanguageSwitchProps> = () => {
  const { language, setLanguage, t } = useI18n()
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  const getAriaLabel = () => {
    const languageName = language === 'pt' ? 'Português' : 'English'
    return `${t.footer.language}: ${languageName}`
  }

  const getCurrentLanguageText = () => {
    return language === 'pt' ? 'PT' : 'EN'
  }

  // Atualiza a largura do background sempre que o idioma mudar
  useEffect(() => {
    if (!contentRef.current || !bgRef.current) return

    updateBackgroundWidth(contentRef.current, bgRef.current)
  }, [language])

  const handleMouseEnter = () => {
    if (!contentRef.current || !bgRef.current) return

    updateBackgroundWidth(contentRef.current, bgRef.current)
    showBackground(bgRef.current)
  }

  const handleMouseLeave = () => {
    if (!bgRef.current) return

    hideBackground(bgRef.current)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative overflow-hidden inline-flex items-center py-2 text-sm text-[#646569] hover:text-[#191919] transition-colors duration-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={getAriaLabel()}
    >
      {/* Elemento de fundo com animação */}
      <div
        ref={bgRef}
        className="bg-animation absolute top-0 left-0 h-full bg-[#646569] z-0"
        style={{
          width: '0px',
          transform: 'translateX(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Conteúdo do botão */}
      <div
        ref={contentRef}
        className="relative z-10 flex items-center space-x-2"
      >
        <Languages size={16} />
        <span className="font-bold font-freesans">
          {getCurrentLanguageText()}
        </span>
      </div>
    </button>
  )
}

// ================================
// Exportações
// ================================

export default LanguageSwitch
