import React, { useEffect, useState } from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'
import { useI18n } from '@core'
import { useDocumentTitle } from '@shared'
import { MediaItem, MediaImageProps, TextProps } from '@types'

// ================================
// ASSETS
// ================================
import img1 from '@/assets/pages/Vextro/01.jpg'
import img2a from '@/assets/pages/Vextro/02.1.jpg'
import img2b from '@/assets/pages/Vextro/02.2.jpg'
import img3 from '@/assets/pages/Vextro/03.jpg'
import gif4 from '@/assets/pages/Vextro/04.gif'
import img5 from '@/assets/pages/Vextro/05.jpg'
import img6 from '@/assets/pages/Vextro/06.jpg'
import img7 from '@/assets/pages/Vextro/07.jpg'
import img8 from '@/assets/pages/Vextro/08.jpg'
import img9 from '@/assets/pages/Vextro/09.jpg'
import img10 from '@/assets/pages/Vextro/10.jpg'
import img11 from '@/assets/pages/Vextro/11.jpg'
import img12 from '@/assets/pages/Vextro/12.jpg'
import gif13 from '@/assets/pages/Vextro/13.gif'

// ================================
// HELPER COMPONENTS
// ================================

/**
 * Componente de handle customizado para ReactCompareSlider
 */
const CustomHandle: React.FC = () => (
  <div
    style={{
      height: '100%',
      borderLeft: '2px solid #333333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateX(-1px)',
      width: '0',
      pointerEvents: 'none'
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        zIndex: 10,
        pointerEvents: 'auto'
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 32H0V0H32V32ZM2 30H30V2H2V30Z"
          fill="#646569"
        />
        <path d="M23 17.666V24.333L21 26V16L23 17.666Z" fill="#646569" />
        <path d="M19 23H17V19H19V23Z" fill="#646569" />
        <path d="M15 23H13V19H15V23Z" fill="#646569" />
        <path d="M11 23H9V19H11V23Z" fill="#646569" />
        <path d="M7 23H5V19H7V23Z" fill="#646569" />
        <path d="M27 21L25 22.666V19.333L27 21Z" fill="#646569" />
        <path d="M11 16L9 14.333V7.66602L11 6V16Z" fill="#646569" />
        <path d="M15 9V13H13V9H15Z" fill="#646569" />
        <path d="M19 9V13H17V9H19Z" fill="#646569" />
        <path d="M23 9V13H21V9H23Z" fill="#646569" />
        <path d="M27 9V13H25V9H27Z" fill="#646569" />
        <path d="M7 12.666L5 11L7 9.33301V12.666Z" fill="#646569" />
      </svg>
    </div>
  </div>
)

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
 * Página do projeto Vextro
 * Exibe informações do projeto, comparação antes/depois e galeria de mídia
 */
const VextroPage: React.FC = () => {
  const { t } = useI18n()
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)

  useDocumentTitle('Vextro')

  // ================================
  // EFEITOS
  // ================================

  useEffect(() => {
    const preloadFirstImage = (): void => {
      const preloadImage = new Image()
      preloadImage.src = img1
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

  const contentParagraphs: string[] = [
    t.vextro.content.paragraph1,
    t.vextro.content.paragraph2,
    t.vextro.content.paragraph3,
    t.vextro.content.paragraph4,
    t.vextro.content.paragraph5,
    t.vextro.content.paragraph6
  ]

  const galleryImages: MediaItem[] = [
    { src: img3, alt: t.vextro.images.img3 },
    { src: gif4, alt: t.vextro.images.gif4 },
    { src: img5, alt: t.vextro.images.img5 },
    { src: img6, alt: t.vextro.images.img6 },
    { src: img7, alt: t.vextro.images.img7 },
    { src: img8, alt: t.vextro.images.img8 },
    { src: img9, alt: t.vextro.images.img9 },
    { src: img10, alt: t.vextro.images.img10 },
    { src: img11, alt: t.vextro.images.img11 },
    { src: img12, alt: t.vextro.images.img12 },
    { src: gif13, alt: t.vextro.images.gif13 }
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
        src={img1}
        alt={t.vextro.images.img1}
        loading="eager"
        fetchPriority="high"
      />

      {/* Seção de Conteúdo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-44 mx-auto max-w-7xl">
        {/* Descrição do Projeto */}
        <div className="space-y-6 max-w-xl">
          {contentParagraphs.map((paragraph, index) => (
            <TextParagraph key={index}>{paragraph}</TextParagraph>
          ))}
        </div>

        {/* Informações do Projeto */}
        <div className="space-y-16 max-w-md">
          {/* Seção de Créditos */}
          <div>
            <SectionHeading className="lg:mt-0 mt-16">
              {t.vextro.credits.title}
            </SectionHeading>
            <TextParagraph>
              {t.vextro.credits.strategy}
              <br />
              {t.vextro.credits.typography}
              <br />
              {t.vextro.credits.avantique}
              <br />
              {t.vextro.credits.jakarta}
            </TextParagraph>
          </div>

          {/* Seção de Detalhes */}
          <div>
            <SectionHeading>{t.vextro.details.title}</SectionHeading>
            <TextParagraph>
              {t.vextro.details.published}
              <br />
              {t.vextro.details.responsible}
              <br />
              {t.vextro.details.location}
              <br />
              {t.vextro.details.segment}
            </TextParagraph>
          </div>
        </div>
      </div>

      {/* Galeria de Mídia */}
      <div>
        {/* Comparação Antes/Depois */}
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src={img2a} alt={t.vextro.images.before} />
          }
          itemTwo={
            <ReactCompareSliderImage src={img2b} alt={t.vextro.images.after} />
          }
          position={50}
          handle={<CustomHandle />}
          style={{
            display: 'flex',
            width: '100%',
            height: 'auto'
          }}
          changePositionOnHover={false}
          onlyHandleDraggable={false}
        />

        {/* Galeria de Imagens */}
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

export default VextroPage
