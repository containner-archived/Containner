import React, { useEffect, useState } from 'react'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'
import { useI18n } from '@/shared/contexts/I18nContext'

// ================================
// ASSETS
// ================================
import gif1 from '@assets/pages/Korri/01.gif'
import gif2 from '@assets/pages/Korri/02.gif'
import img3 from '@assets/pages/Korri/03.jpg'
import gif4 from '@assets/pages/Korri/04.gif'
import img5 from '@assets/pages/Korri/05.jpg'
import img6 from '@assets/pages/Korri/06.jpg'
import gif7 from '@assets/pages/Korri/07.gif'
import img8 from '@assets/pages/Korri/08.jpg'
import img9 from '@assets/pages/Korri/09.jpg'
import img10 from '@assets/pages/Korri/10.jpg'
import gif11 from '@assets/pages/Korri/11.gif'
import img12 from '@assets/pages/Korri/12.jpg'
import img13 from '@assets/pages/Korri/13.jpg'
import img14 from '@assets/pages/Korri/14.jpg'
import img15 from '@assets/pages/Korri/15.png'
import img16 from '@assets/pages/Korri/16.jpg'

// ================================
// INTERFACES
// ================================

/**
 * Interface para itens de mídia na galeria
 */
interface MediaItem {
  src: string
  alt: string
}

/**
 * Props para o componente MediaImage
 */
interface MediaImageProps {
  src: string
  alt: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

/**
 * Props para componentes de texto
 */
interface TextProps {
  children: React.ReactNode
  className?: string
}

// ================================
// HELPER COMPONENTS
// ================================

/**
 * Spinner de carregamento para carregamento inicial da página
 */
const LoadingSpinner: React.FC = () => (
  <div className="w-full h-screen flex items-center justify-center bg-transparent">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
    </div>
  </div>
)

/**
 * Componente de parágrafo de texto com estilo consistente
 */
const TextParagraph: React.FC<TextProps> = ({ children }) => (
  <p
    className="font-freesans font-normal text-base leading-snug tracking-normal"
    style={{ color: '#646569' }}
  >
    {children}
  </p>
)

/**
 * Componente de título de seção com estilo consistente
 */
const SectionHeading: React.FC<TextProps> = ({ children, className = '' }) => (
  <h3
    className={`font-freesans font-semibold text-base leading-snug tracking-normal ${className}`}
    style={{ color: '#646569' }}
  >
    {children}
  </h3>
)

/**
 * Componente de imagem de mídia com estilo consistente
 */
const MediaImage: React.FC<MediaImageProps> = ({
  src,
  alt,
  loading = 'lazy',
  fetchPriority = 'auto'
}) => (
  <img
    src={src}
    alt={alt}
    className="w-full shadow-lg"
    loading={loading}
    fetchPriority={fetchPriority}
  />
)

// ================================
// MAIN COMPONENT
// ================================

/**
 * Página do projeto Korri
 * Exibe informações do projeto, créditos e galeria de assets de mídia
 */
const KorriPage: React.FC = () => {
  const { t } = useI18n()
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)

  useDocumentTitle('Korri')

  // ================================
  // EFEITOS
  // ================================

  useEffect(() => {
    const preloadFirstImage = (): void => {
      const preloadImage = new Image()
      preloadImage.src = gif1
      preloadImage.fetchPriority = 'high'

      preloadImage.onload = () => setFirstImageLoaded(true)
      preloadImage.onerror = () => {
        console.error('Erro ao carregar a primeira imagem')
        setFirstImageLoaded(true)
      }
    }

    preloadFirstImage()
  }, [])

  // ================================
  // DADOS
  // ================================

  const galleryImages: MediaItem[] = [
    { src: gif2, alt: t.korri.images.gif2 },
    { src: img3, alt: t.korri.images.img3 },
    { src: gif4, alt: t.korri.images.gif4 },
    { src: img5, alt: t.korri.images.img5 },
    { src: img6, alt: t.korri.images.img6 },
    { src: gif7, alt: t.korri.images.gif7 },
    { src: img8, alt: t.korri.images.img8 },
    { src: img9, alt: t.korri.images.img9 },
    { src: img10, alt: t.korri.images.img10 },
    { src: gif11, alt: t.korri.images.gif11 },
    { src: img12, alt: t.korri.images.img12 },
    { src: img13, alt: t.korri.images.img13 },
    { src: img14, alt: t.korri.images.img14 },
    { src: img15, alt: t.korri.images.img15 },
    { src: img16, alt: t.korri.images.img16 }
  ]

  // ================================
  // RETORNO ANTECIPADO
  // ================================

  if (!firstImageLoaded) {
    return <LoadingSpinner />
  }

  // ================================
  // RENDERIZAÇÃO
  // ================================

  return (
    <div className="lg:space-y-40 md:space-y-40 sm:space-y-20 space-y-20">
      {/* Imagem Principal */}
      <MediaImage
        src={gif1}
        alt={t.korri.images.gif1}
        loading="eager"
        fetchPriority="high"
      />

      {/* Seção de Conteúdo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-44 mx-auto max-w-7xl">
        {/* Descrição do Projeto */}
        <div className="space-y-6 max-w-xl">
          <TextParagraph>{t.korri.content.paragraph1}</TextParagraph>
          <TextParagraph>{t.korri.content.paragraph2}</TextParagraph>
          <TextParagraph>{t.korri.content.paragraph3}</TextParagraph>
        </div>

        {/* Informações do Projeto */}
        <div className="space-y-16 max-w-md">
          {/* Seção de Créditos */}
          <div>
            <SectionHeading className="lg:mt-0 mt-16">
              {t.korri.credits.title}
            </SectionHeading>
            <TextParagraph>
              {t.korri.credits.strategy}
              <br />
              {t.korri.credits.naming}
            </TextParagraph>
          </div>

          {/* Seção de Detalhes */}
          <div>
            <SectionHeading>{t.korri.details.title}</SectionHeading>
            <TextParagraph>
              {t.korri.details.published}
              <br />
              {t.korri.details.location}
              <br />
              {t.korri.details.segment}
            </TextParagraph>
          </div>
        </div>
      </div>

      {/* Galeria de Mídia */}
      <div>
        {galleryImages.map((item, index) => (
          <MediaImage key={index} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  )
}

// ================================
// EXPORTAÇÕES
// ================================

export default KorriPage
