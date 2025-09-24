import React from 'react'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

// Importando as imagens e GIFs
import gif1 from '@assets/pages/Korri/1.gif'
import gif2 from '@assets/pages/Korri/2.gif'
import img3 from '@assets/pages/Korri/3.jpg'
import gif4 from '@assets/pages/Korri/4.gif'
import img5 from '@assets/pages/Korri/5.jpg'
import img6 from '@assets/pages/Korri/6.jpg'
import gif7 from '@assets/pages/Korri/7.gif'
import img8 from '@assets/pages/Korri/8.jpg'
import img9 from '@assets/pages/Korri/9.jpg'
import img10 from '@assets/pages/Korri/10.jpg'
import gif11 from '@assets/pages/Korri/11.gif'
import img12 from '@assets/pages/Korri/12.jpg'
import img13 from '@assets/pages/Korri/13.jpg'
import img14 from '@assets/pages/Korri/14.jpg'
import img15 from '@assets/pages/Korri/15.png'
import img16 from '@assets/pages/Korri/16.jpg'

const KorriPage: React.FC = () => {
  useDocumentTitle('Korri')

  return (
    <div className="space-y-40">
      <img src={gif1} alt="GIF 1" className="w-full  shadow-lg" />

      {/* Duas colunas de texto com gap de 178px */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-44 mx-auto max-w-7xl">
        {/* Primeira coluna - 6 parágrafos */}
        <div className="space-y-6 max-w-xl">
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            Korri® é uma marca de moda esportiva criada para jovens que
            valorizam o conforto das camisetas de time, mas preferem um visual
            mais discreto e versátil para o dia a dia.
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            O símbolo representa um “sopro” de alívio após um dia intenso — um
            momento de respiro. Com um tom amarelo vibrante, ele expressa a
            energia pulsante do Brasil. Todo o universo visual da Korri® foi
            pensado para dialogar com a juventude da periferia, traduzindo
            identidade, atitude e originalidade em uma estética própria.
          </p>
          <p
            className="font-freesans font-normal text-base leading-snug tracking-normal"
            style={{ color: '#646569' }}
          >
            O nome é derivado da gíria brasileira "corre", amplamente usada por
            jovens como uma expressão para trabalho. Também possui um duplo
            sentido relacionado à atividade de "correr", referindo-se à prática
            esportiva.
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
              Naming — Jeferson Gonçalves
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
              Publicado — 7 de outubro de 2023
              <br />
              Localização — Alvorada, Brasil
              <br />
              Segmento — Vestuário
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={gif2} alt="GIF 2" className="w-full  shadow-lg" />
        <img src={img3} alt="Imagem 3" className="w-full  shadow-lg" />
        <img src={gif4} alt="GIF 4" className="w-full  shadow-lg" />
        <img src={img5} alt="Imagem 5" className="w-full  shadow-lg" />
        <img src={img6} alt="Imagem 6" className="w-full  shadow-lg" />
        <img src={gif7} alt="GIF 7" className="w-full  shadow-lg" />
        <img src={img8} alt="Imagem 8" className="w-full  shadow-lg" />
        <img src={img9} alt="Imagem 9" className="w-full  shadow-lg" />
        <img src={img10} alt="Imagem 10" className="w-full  shadow-lg" />
        <img src={gif11} alt="GIF 11" className="w-full  shadow-lg" />
        <img src={img12} alt="Imagem 12" className="w-full  shadow-lg" />
        <img src={img13} alt="Imagem 13" className="w-full  shadow-lg" />
        <img src={img14} alt="Imagem 14" className="w-full  shadow-lg" />
        <img src={img15} alt="Imagem 15" className="w-full  shadow-lg" />
        <img src={img16} alt="Imagem 16" className="w-full  shadow-lg" />
      </div>
    </div>
  )
}

export default KorriPage
