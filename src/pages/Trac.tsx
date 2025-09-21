import React from 'react'

const TracPage: React.FC = () => {
  return (
    <div className=" bg-gradient-to-br from-pink-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="text-blue-400">Tr</span>
              <span className="text-white">Ac</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Soluções em containers que transformam ideias em realidade.
              Construindo o futuro, um container por vez.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/25">
                Abrir Container
              </button>
              <button className="px-10 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-black rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/30 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-blue-400/40 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-blue-300/50 rounded-lg -rotate-12"></div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">
            Por que escolher Trac?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏗️',
                title: 'Modularidade',
                desc: 'Soluções flexíveis e escaláveis que se adaptam às suas necessidades específicas'
              },
              {
                icon: '🌱',
                title: 'Sustentabilidade',
                desc: 'Construção ecológica e eficiente, respeitando o meio ambiente'
              },
              {
                icon: '🚀',
                title: 'Inovação',
                desc: 'Tecnologia de ponta em cada projeto, sempre à frente do mercado'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projetos' },
              { number: '98%', label: 'Satisfação' },
              { number: '24/7', label: 'Suporte' },
              { number: '15', label: 'Anos' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
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
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua
            visão em realidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:open@Trac.co"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              open@Trac.co
            </a>
            <a
              href="https://wa.me/5554993120440"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-black rounded-full font-semibold transition-all transform hover:scale-105"
            >
              +55 54 9312-0440
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TracPage
