import React from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

// Importando as imagens
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

// --- COMPONENTE CUSTOMIZADO PARA O HANDLE ---
const CustomHandle = () => (
  // O contêiner principal do handle
  <div
    style={{
      // Importante: garante que o componente ocupe toda a altura
      height: '100%',
      // Esta borda cria a linha vertical divisória
      borderLeft: '2px solid #333333',
      // Garante que o ícone esteja exatamente no centro vertical e horizontal
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // Ajusta o handle para ficar no centro da linha vertical
      transform: 'translateX(-1px)',
      width: '0', // Ocupa zero espaço, a largura é dada pela borda
      pointerEvents: 'none' // Permite que o arrasto funcione
    }}
  >
    {/* Este é o círculo que contém o SVG, sobreposto à linha */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#FFFFFF', // Cor do fundo do círculo
        border: '2px solid #333333', // Borda
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        cursor: 'grab', // Indica que é arrastável
        zIndex: 10, // Garante que fique acima de tudo
        // Desfaz o 'pointerEvents: none' do pai, para que possamos arrastar
        pointerEvents: 'auto'
      }}
    >
      {/* SVG Padrão de Duas Setas */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#333333" // Cor do contorno do emoji
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        // Para emojis mais coloridos, você pode usar 'fill' em vez de 'stroke'
        // e definir as cores diretamente nos elementos do SVG (path, circle, etc.)
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    </div>
  </div>
)
// --- FIM DO COMPONENTE CUSTOMIZADO ---

const VextroPage: React.FC = () => {
  useDocumentTitle('Vextro')

  return (
    <div className="space-y-40">
      {/* Primeira imagem */}
      <img src={img1} alt="Imagem 1" className="w-full shadow-lg" />

      {/* Duas colunas de texto com gap de 178px */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-44 mx-auto max-w-7xl">
        {/* Primeira coluna - 6 parágrafos */}
        <div className="space-y-6 max-w-xl">
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* ... resto dos parágrafos ... */}
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </p>
        </div>
        {/* Segunda coluna - H3 + parágrafo, H3 + parágrafo */}
        <div className="space-y-16 max-w-md">
          <div>
            <h3
              className="font-freesans font-semibold text-base leading-snug tracking-normal lg:mt-0 mt-16"
              style={{ color: '#646569' }}
            >
              Créditos:
            </h3>
            <p
              className="font-freesans font-normal text-base leading-snug tracking-normal"
              style={{ color: '#646569' }}
            >
              Estratégia & Design — Jeferson Gonçalves
              <br />
              Refinamento Tipográfico — Jean Rosa
              <br />
              Tipografia "Avantique" — Casloop Studio
              <br />
              Tipografia "Plus Jakarta Sans" — Tokotipo
            </p>
          </div>

          <div>
            <h3
              className="font-freesans font-semibold text-base leading-snug tracking-normal"
              style={{ color: '#646569' }}
            >
              Ficha Técnica:
            </h3>
            <p
              className="font-freesans font-normal text-base leading-snug tracking-normal"
              style={{ color: '#646569' }}
            >
              Publicado — 28 de agosto de 2025
              <br />
              Responsável — Filipi Lima
              <br />
              Localização — Alvorada, Brasil
              <br />
              Segmento — Marketing
            </p>
          </div>
        </div>
      </div>

      <div>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={img2a} alt="Antes" />}
          itemTwo={<ReactCompareSliderImage src={img2b} alt="Depois" />}
          position={50}
          // Usamos o CustomHandle
          handle={<CustomHandle />}
          // REMOVEMOS lineStyle (a linha agora está no CustomHandle)
          style={{
            display: 'flex',
            width: '100%',
            height: 'auto'
          }}
          changePositionOnHover={false}
          onlyHandleDraggable={false}
        />

        <img src={img3} alt="Imagem 2" className="w-full shadow-lg" />
        <img src={gif4} alt="GIF 4" className="w-full shadow-lg" />
        <img src={img5} alt="Imagem 5" className="w-full shadow-lg" />
        <img src={img6} alt="Imagem 6" className="w-full shadow-lg" />
        <img src={img7} alt="Imagem 7" className="w-full shadow-lg" />
        <img src={img8} alt="Imagem 8" className="w-full shadow-lg" />
        <img src={img9} alt="Imagem 9" className="w-full shadow-lg" />
        <img src={img10} alt="Imagem 10" className="w-full shadow-lg" />
        <img src={img11} alt="Imagem 11" className="w-full shadow-lg" />
        <img src={img12} alt="GIF 12" className="w-full shadow-lg" />
        <img src={gif13} alt="GIF 4" className="w-full shadow-lg" />
      </div>
    </div>
  )
}

export default VextroPage
