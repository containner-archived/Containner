import React, { useEffect, useState } from 'react'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'
import { useI18n } from '@/shared/contexts/I18nContext'

// Importando as imagens e GIFs
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

// Loading spinner
const LoadingSpinner = () => (
  <div className="w-full h-screen flex items-center justify-center bg-transparent">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
    </div>
  </div>
)

const KorriPage: React.FC = () => {
  const { t } = useI18n()
  useDocumentTitle('Korri')

  // Estado para controlar o carregamento da primeira imagem (GIF)
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)

  // Preload da primeira imagem (GIF)
  useEffect(() => {
    const preloadImage = new Image()
    preloadImage.src = gif1

    // Adiciona prioridade alta para o preload
    preloadImage.fetchPriority = 'high'

    preloadImage.onload = () => {
      setFirstImageLoaded(true)
    }

    // Tratamento de erro opcional
    preloadImage.onerror = () => {
      console.error('Erro ao carregar a primeira imagem')
      setFirstImageLoaded(true) // Continua mesmo com erro
    }
  }, [])

  // Se a primeira imagem não carregou, mostra apenas o loading
  if (!firstImageLoaded) {
    return <LoadingSpinner />
  }

  return (
    <div className="lg:space-y-40 md:space-y-40 sm:space-y-20 space-y-20">
      <img
        src={gif1}
        alt={t.korri.images.gif1}
        className="w-full shadow-lg"
        loading="eager"
        fetchPriority="high"
      />

      {/* Duas colunas de texto com gap de 178px */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-44 mx-auto max-w-7xl">
        {/* Primeira coluna - 3 parágrafos */}
        <div className="space-y-6 max-w-xl">
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            {t.korri.content.paragraph1}
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            {t.korri.content.paragraph2}
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            {t.korri.content.paragraph3}
          </p>
        </div>

        {/* Segunda coluna - H3 + parágrafo, H3 + parágrafo */}
        <div className="space-y-16 max-w-md">
          <div>
            <h3
              className="font-freesans font-semibold text-base leading-snug tracking-normal lg:mt-0 mt-16"
              style={{ color: '#646569' }}
            >
              {t.korri.credits.title}
            </h3>
            <p
              className="font-freesans font-normal text-base leading-snug tracking-normal"
              style={{ color: '#646569' }}
            >
              {t.korri.credits.strategy}
              <br />
              {t.korri.credits.naming}
            </p>
          </div>

          <div>
            <h3
              className="font-freesans font-semibold text-base leading-snug tracking-normal"
              style={{ color: '#646569' }}
            >
              {t.korri.details.title}
            </h3>
            <p
              className="font-freesans font-normal text-base leading-snug tracking-normal"
              style={{ color: '#646569' }}
            >
              {t.korri.details.published}
              <br />
              {t.korri.details.location}
              <br />
              {t.korri.details.segment}
            </p>
          </div>
        </div>
      </div>

      {/* Resto do conteúdo */}
      <div>
        <img
          src={gif2}
          alt={t.korri.images.gif2}
          className="w-full shadow-lg"
        />
        <img
          src={img3}
          alt={t.korri.images.img3}
          className="w-full shadow-lg"
        />
        <img
          src={gif4}
          alt={t.korri.images.gif4}
          className="w-full shadow-lg"
        />
        <img
          src={img5}
          alt={t.korri.images.img5}
          className="w-full shadow-lg"
        />
        <img
          src={img6}
          alt={t.korri.images.img6}
          className="w-full shadow-lg"
        />
        <img
          src={gif7}
          alt={t.korri.images.gif7}
          className="w-full shadow-lg"
        />
        <img
          src={img8}
          alt={t.korri.images.img8}
          className="w-full shadow-lg"
        />
        <img
          src={img9}
          alt={t.korri.images.img9}
          className="w-full shadow-lg"
        />
        <img
          src={img10}
          alt={t.korri.images.img10}
          className="w-full shadow-lg"
        />
        <img
          src={gif11}
          alt={t.korri.images.gif11}
          className="w-full shadow-lg"
        />
        <img
          src={img12}
          alt={t.korri.images.img12}
          className="w-full shadow-lg"
        />
        <img
          src={img13}
          alt={t.korri.images.img13}
          className="w-full shadow-lg"
        />
        <img
          src={img14}
          alt={t.korri.images.img14}
          className="w-full shadow-lg"
        />
        <img
          src={img15}
          alt={t.korri.images.img15}
          className="w-full shadow-lg"
        />
        <img
          src={img16}
          alt={t.korri.images.img16}
          className="w-full shadow-lg"
        />
      </div>
    </div>
  )
}

export default KorriPage
