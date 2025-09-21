import React from 'react'

const KorriPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-emerald-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="text-green-400">KOR</span>
              <span className="text-emerald-300">RI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Logística inteligente que move o mundo. Conectando destinos,
              entregando sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-green-500/25">
                Rastrear Entrega
              </button>
              <button className="px-10 py-4 border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                Solicitar Cotação
              </button>
            </div>
          </div>
        </div>

        {/* Moving elements representing logistics */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-500 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-16 w-8 h-8 border-2 border-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-300">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="group text-center bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-green-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-green-200 font-semibold mb-3">
                  {service.desc}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-20 px-4 bg-green-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-green-300">
              Rastreie sua Encomenda
            </h2>
            <p className="text-lg text-gray-300">
              Digite o código de rastreamento e acompanhe em tempo real
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-green-500/30">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Ex: KR123456789BR"
                className="flex-1 px-6 py-4 bg-black/20 border border-green-400/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-black/30 transition-all"
              />
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition-all transform hover:scale-105">
                Rastrear
              </button>
            </div>

            {/* Demo tracking info */}
            <div className="mt-8 p-6 bg-green-900/20 rounded-xl border border-green-500/20">
              <h4 className="font-semibold text-green-300 mb-4">
                Última atualização: Hoje, 14:32
              </h4>
              <div className="space-y-3">
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
                    className={`flex items-center ${update.active ? 'text-green-300' : 'text-gray-400'}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full mr-4 ${update.active ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}
                    ></div>
                    <div className="flex-1">
                      <div className="font-medium">{update.status}</div>
                      <div className="text-sm">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1M+', label: 'Entregas', desc: 'realizadas' },
              { number: '99.8%', label: 'Precisão', desc: 'no prazo' },
              { number: '500+', label: 'Cidades', desc: 'atendidas' },
              { number: '24/7', label: 'Suporte', desc: 'disponível' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-green-300 font-semibold text-lg">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para enviar?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Faça sua cotação agora e descubra por que somos a escolha de
            milhares de clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
              Cotação Gratuita
            </button>
            <button className="px-8 py-4 border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-full font-semibold transition-all transform hover:scale-105">
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KorriPage
