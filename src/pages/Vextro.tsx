import React from 'react'

const VextroPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="text-purple-400">VEX</span>
              <span className="text-pink-400">TRO</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Design digital que conecta marcas ao futuro. Criatividade sem
              limites, resultados extraordinários.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl">
                Explorar Portfolio
              </button>
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-black rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105">
                Contato
              </button>
            </div>
          </div>
        </div>

        {/* Geometric shapes - responsive positioning and sizes */}
        <div className="hidden sm:block absolute top-20 left-4 sm:left-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-2 border-purple-500/30 rounded-full animate-spin"></div>
        <div className="hidden sm:block absolute top-32 right-8 sm:right-16 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 left-1/4 sm:left-1/3 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 border-2 border-pink-400/40 rotate-12"></div>
      </header>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-purple-300">
                Design que Impacta
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Na Vextro, cada pixel conta. Criamos experiências visuais que
                não apenas impressionam, mas conectam emocionalmente com seu
                público.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    service: 'UI/UX Design',
                    desc: 'Interfaces intuitivas e envolventes'
                  },
                  { service: 'Branding', desc: 'Identidade visual marcante' },
                  {
                    service: 'Motion Graphics',
                    desc: 'Animações que contam histórias'
                  },
                  {
                    service: 'Web Design',
                    desc: 'Sites que convertem visitantes'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 sm:mr-4 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <div className="min-w-0">
                      <h3 className="text-purple-300 font-semibold text-base sm:text-lg">
                        {item.service}
                      </h3>
                      <p className="text-gray-400 text-sm break-words">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 sm:p-6 md:p-8 rounded-3xl border border-purple-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-xl sm:text-2xl md:text-3xl">🎨</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-300 mb-2 sm:mb-3">
                    Criatividade Infinita
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Transformamos visões em realidade digital
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-4 sm:p-6 md:p-8 rounded-3xl border border-pink-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-xl sm:text-2xl md:text-3xl">⚡</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-300 mb-2 sm:mb-3">
                    Performance
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Designs otimizados para máxima eficiência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-purple-300">
            Nosso Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                project: 'E-commerce Revolution',
                category: 'UI/UX',
                color: 'purple'
              },
              {
                project: 'Brand Identity 2024',
                category: 'Branding',
                color: 'pink'
              },
              {
                project: 'Motion Campaign',
                category: 'Animation',
                color: 'purple'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 sm:p-6 md:p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl md:text-4xl opacity-60">
                    🖼️
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-300 mb-1 sm:mb-2">
                  {item.project}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  {item.category}
                </p>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6 md:pb-8">
                  <button className="px-4 sm:px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm sm:text-base">
                    Ver Projeto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - New responsive section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-purple-300">
            Nosso Processo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                step: '01',
                title: 'Descoberta',
                desc: 'Entendemos sua marca e objetivos'
              },
              {
                step: '02',
                title: 'Estratégia',
                desc: 'Planejamos a solução ideal'
              },
              {
                step: '03',
                title: 'Criação',
                desc: 'Desenvolvemos o design perfeito'
              },
              {
                step: '04',
                title: 'Entrega',
                desc: 'Implementamos com excelência'
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-300 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-0">
            Sua marca merece se destacar. Vamos conversar sobre como podemos
            elevar sua presença digital
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl text-sm sm:text-base">
              Iniciar Projeto
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-black rounded-full font-semibold transition-all transform hover:scale-105 text-sm sm:text-base">
              Ver Mais Trabalhos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VextroPage
