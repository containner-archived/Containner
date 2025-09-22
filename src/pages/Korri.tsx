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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Primeiro GIF */}
      <div className="mb-8">
        <img src={gif1} alt="GIF 1" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Duas colunas de texto com gap de 178px */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 mb-8"
        style={{ gap: '178px' }}
      >
        {/* Primeira coluna - 3 parágrafos */}
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

      {/* Segundo GIF */}
      <div className="mb-8">
        <img src={gif2} alt="GIF 2" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Uma imagem */}
      <div className="mb-8">
        <img
          src={img3}
          alt="Imagem 3"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Terceiro GIF */}
      <div className="mb-8">
        <img src={gif4} alt="GIF 4" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Duas imagens uma embaixo da outra */}
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
      </div>

      {/* Quarto GIF */}
      <div className="mb-8">
        <img src={gif7} alt="GIF 7" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Três imagens uma embaixo da outra */}
      <div className="mb-8 space-y-6">
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
      </div>

      {/* Quinto GIF */}
      <div className="mb-8">
        <img src={gif11} alt="GIF 11" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Cinco imagens uma embaixo da outra */}
      <div className="mb-8 space-y-6">
        <img
          src={img12}
          alt="Imagem 12"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img13}
          alt="Imagem 13"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img14}
          alt="Imagem 14"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img15}
          alt="Imagem 15"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src={img16}
          alt="Imagem 16"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default KorriPage
