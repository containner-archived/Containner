import React from 'react'

// ================================
// Constants
// ================================
const LOADER_SIZE = {
  width: 466,
  height: 275
}

// ================================
// Main Component
// ================================
/**
 * Componente de loader com animação de barras sequenciais
 * Exibe animação SVG até que toda a aplicação seja carregada
 */
const Loader: React.FC = () => {
  // ================================
  // Render
  // ================================
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        {/* SVG Animation */}
        <div className="relative animate-pulse">
          <svg
            width={LOADER_SIZE.width}
            height={LOADER_SIZE.height}
            viewBox="0 0 466 275"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-80 h-auto"
          >
            <style>
              {`
                /* Aplica a animação específica e infinita para cada coluna */
                #col-1 { animation: anim-col-1 1.8s infinite; }
                #col-2 { animation: anim-col-2 1.8s infinite; }
                #col-3 { animation: anim-col-3 1.8s infinite; }
                #col-4 { animation: anim-col-4 1.8s infinite; }
                #col-5 { animation: anim-col-5 1.8s infinite; }
                #col-6 { animation: anim-col-6 1.8s infinite; }

                /*
                  A MUDANÇA: Os keyframes agora forçam a mudança de opacidade a ser instantânea.
                  Exemplo para col-2: ela fica em 'opacity: 0' até 16.65% e MUDA para 'opacity: 1' em 16.66%.
                  Essa pequena diferença de 0.01% no tempo remove o efeito de fade/gradiente.
                */

                @keyframes anim-col-1 {
                  0%, 99.99% { opacity: 1; }
                  100% { opacity: 0; }
                }

                @keyframes anim-col-2 {
                  0%, 16.65% { opacity: 0; }
                  16.66%, 99.99% { opacity: 1; }
                  100% { opacity: 0; }
                }

                @keyframes anim-col-3 {
                  0%, 33.31% { opacity: 0; }
                  33.32%, 99.99% { opacity: 1; }
                  100% { opacity: 0; }
                }

                @keyframes anim-col-4 {
                  0%, 49.97% { opacity: 0; }
                  49.98%, 99.99% { opacity: 1; }
                  100% { opacity: 0; }
                }

                @keyframes anim-col-5 {
                  0%, 66.63% { opacity: 0; }
                  66.64%, 99.99% { opacity: 1; }
                  100% { opacity: 0; }
                }

                @keyframes anim-col-6 {
                  0%, 83.32% { opacity: 0; }
                  83.33%, 99.99% { opacity: 1; }
                  100% { opacity: 0; }
                }
              `}
            </style>

            <g id="col-1">
              <path d="M0.0888672 137.488L54.8508 121.05V0.536285H0.0888672V137.488Z" fill="#646569"/>
              <path d="M54.8508 274.439V153.926L0.0888672 137.488V274.439H54.8508Z" fill="#646569"/>
            </g>
            <g id="col-2">
              <path d="M82.2783 137.488L137.04 121.05V0.536285H82.2783V137.488Z" fill="#646569"/>
              <path d="M82.2783 274.439H137.04V153.926L82.2783 137.488V274.439Z" fill="#646569"/>
            </g>
            <g id="col-3">
              <path d="M164.421 112.854L219.23 96.4162V0.536285H164.421V112.854Z" fill="#646569"/>
              <path d="M164.421 274.439H219.23V178.606L164.421 162.168V274.439Z" fill="#646569"/>
            </g>
            <g id="col-4">
              <path d="M246.611 137.488L301.419 121.05V0.536285H246.611V137.488Z" fill="#646569"/>
              <path d="M246.611 274.439H301.419V153.926L246.611 137.488V274.439Z" fill="#646569"/>
            </g>
            <g id="col-5">
              <path d="M328.8 112.854L383.562 96.4162V0.536285H328.8V112.854Z" fill="#646569"/>
              <path d="M328.8 274.439H383.562V178.606L328.8 162.168V274.439Z" fill="#646569"/>
            </g>
            <g id="col-6">
              <path d="M410.99 88.174L465.751 71.7361V0.536285H410.99V88.174Z" fill="#646569"/>
              <path d="M410.99 274.439H465.751V203.239L410.99 186.801V274.439Z" fill="#646569"/>
            </g>
          </svg>
        </div>

      </div>
    </div>
  )
}

// ================================
// Exports
// ================================
export default Loader
