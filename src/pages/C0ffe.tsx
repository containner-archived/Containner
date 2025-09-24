import React from 'react'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

// Importando as imagens
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

const C0ffePage: React.FC = () => {
  useDocumentTitle('C0ffe')

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Primeira imagem */}
      <div className="mb-8">
        <img
          src={img3}
          alt="Imagem 1"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Duas colunas de texto com gap de 178px */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 mb-8"
        style={{ gap: '178px' }}
      >
        {/* Primeira coluna - 6 parágrafos */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </p>
        </div>

        {/* Segunda coluna - H3 + parágrafo, H3 + parágrafo */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Primeiro Tópico
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Segundo Tópico
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
      </div>

      {/* Duas imagens uma embaixo da outra */}
      <div className="mb-8 space-y-6">
        <img
          src={img3}
          alt="Imagem 2"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img5}
          alt="Imagem 4"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Primeiro GIF */}
      <div className="mb-8">
        <img src={gif1} alt="GIF 3" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* 8 imagens uma embaixo da outra */}
      <div className="mb-8 space-y-6">
        <img
          src={img5}
          alt="Imagem 5"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img6}
          alt="Imagem 6"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img12}
          alt="Imagem 7"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img8}
          alt="Imagem 8"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img9}
          alt="Imagem 9"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img10}
          alt="Imagem 10"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img13}
          alt="Imagem 11"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Segundo GIF */}
      <div className="mb-8">
        <img src={gif1} alt="GIF 12" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

export default C0ffePage
