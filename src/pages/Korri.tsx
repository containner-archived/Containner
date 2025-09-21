import React from 'react'

const KorriPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-emerald-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="text-green-400">KOR</span>
              <span className="text-emerald-300">RI</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Logística inteligente que move o mundo. Conectando destinos,
              entregando sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-green-500/25">
                Rastrear Entrega
              </button>
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105">
                Solicitar Cotação
              </button>
            </div>
          </div>
        </div>

        {/* Moving elements - hidden on very small screens */}
        <div className="hidden sm:block absolute top-20 left-4 sm:left-10 w-4 sm:w-6 h-4 sm:h-6 bg-green-500 rounded-full animate-bounce"></div>
        <div className="hidden sm:block absolute top-32 right-8 sm:right-16 w-6 sm:w-8 h-6 sm:h-8 border-2 border-green-400 rounded-full animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 left-1/4 w-3 sm:w-4 h-3 sm:h-4 bg-emerald-400 rounded-full animate-ping"></div>
      </header>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-green-300">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: '🚚',
                title: 'Entrega Rápida',
                desc: '24h em todo país',
                detail: 'Entregas expressas com garantia de pontualidade'
              },
              {
                icon: '📍',
                title: 'Rastreamento',
                desc: 'Tempo real',
                detail: 'Acompanhe sua encomenda do início ao fim'
              },
              {
                icon: '🔒',
                title: 'Segurança',
                desc: 'Carga protegida',
                detail: 'Seguro total e manuseio cuidadoso'
              },
              {
                icon: '💚',
                title: 'Sustentável',
                desc: 'Frota ecológica',
                detail: 'Veículos elétricos e rotas otimizadas'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group text-center bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-300 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-green-200 font-semibold mb-2 sm:mb-3">
                  {service.desc}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {service.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-green-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-300">
              Rastreie sua Encomenda
            </h2>
            <p className="text-base sm:text-lg text-gray-300 px-4 sm:px-0">
              Digite o código de rastreamento e acompanhe em tempo real
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl border border-green-500/30">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Ex: KR123456789BR"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-black/20 border border-green-400/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-black/30 transition-all text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition-all transform hover:scale-105 text-sm sm:text-base">
                Rastrear
              </button>
            </div>

            {/* Demo tracking info */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-900/20 rounded-xl border border-green-500/20">
              <h4 className="font-semibold text-green-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Última atualização: Hoje, 14:32
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  {
                    status: 'Em trânsito',
                    location: 'São Paulo - SP',
                    time: '14:32',
                    active: true
                  },
                  {
                    status: 'Saiu para entrega',
                    location: 'Centro de Distribuição',
                    time: '08:15',
                    active: false
                  },
                  {
                    status: 'Objeto postado',
                    location: 'Rio de Janeiro - RJ',
                    time: 'Ontem, 16:45',
                    active: false
                  }
                ].map((update, i) => (
                  <div
                    key={i}
                    className={`flex items-start sm:items-center ${update.active ? 'text-green-300' : 'text-gray-400'}`}
                  >
                    <div
                      className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0 ${update.active ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base">
                        {update.status}
                      </div>
                      <div className="text-xs sm:text-sm break-words">
                        {update.location} • {update.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: '1M+', label: 'Entregas', desc: 'realizadas' },
              { number: '99.8%', label: 'Precisão', desc: 'no prazo' },
              { number: '500+', label: 'Cidades', desc: 'atendidas' },
              { number: '24/7', label: 'Suporte', desc: 'disponível' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-green-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-green-300 font-semibold text-sm sm:text-base md:text-lg">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Pronto para enviar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-0">
            Faça sua cotação agora e descubra por que somos a escolha de
            milhares de clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl text-sm sm:text-base">
              Cotação Gratuita
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-full font-semibold transition-all transform hover:scale-105 text-sm sm:text-base">
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KorriPage
