import React from 'react'

const VextroPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="text-purple-400">VEX</span>
              <span className="text-pink-400">TRO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Design digital que conecta marcas ao futuro. Criatividade sem
              limites, resultados extraordinários.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                Explorar Portfolio
              </button>
              <button className="px-10 py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-black rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                Contato
              </button>
            </div>
          </div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-spin"></div>
        <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 border-pink-400/40 rotate-12"></div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-300">
                Design que Impacta
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Na Vextro, cada pixel conta. Criamos experiências visuais que
                não apenas impressionam, mas conectam emocionalmente com seu
                público.
              </p>
              <div className="space-y-4">
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
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <h3 className="text-purple-300 font-semibold text-lg">
                        {item.service}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-3xl border border-purple-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    Criatividade Infinita
                  </h3>
                  <p className="text-gray-300">
                    Transformamos visões em realidade digital
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 rounded-3xl border border-pink-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-300 mb-3">
                    Performance
                  </h3>
                  <p className="text-gray-300">
                    Designs otimizados para máxima eficiência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 bg-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-300">
            Nosso Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl opacity-60">🖼️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">
                  {item.project}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {item.category}
                </p>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button className="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver Projeto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Sua marca merece se destacar. Vamos conversar sobre como podemos
            elevar sua presença digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
              Iniciar Projeto
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-black rounded-full font-semibold transition-all transform hover:scale-105">
              Ver Mais Trabalhos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VextroPage
