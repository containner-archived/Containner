import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Rectangle } from '@types'

// ================================
// CONSTANTES
// ================================

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'
const CANVAS_WIDTH = 1080
const CANVAS_HEIGHT = 1080
const RECT_COLOR = '#191919'
const BACKGROUND_COLOR = '#646569'
const OVERLAP = 4

// ================================
// HELPER FUNCTIONS
// ================================

/**
 * Gera um número inteiro aleatório entre min e max (inclusive)
 */
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// ================================
// MAIN COMPONENT
// ================================

/**
 * Componente gerador de padrões geométricos
 * Permite criar, editar e exportar padrões SVG com retângulos aleatórios
 */
const PatternGenerator: React.FC = () => {
  // ================================
  // ESTADO
  // ================================

  const [rectangles, setRectangles] = useState<Rectangle[]>([])
  const [history, setHistory] = useState<Rectangle[][]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [hoveredRect, setHoveredRect] = useState<string | null>(null)

  const svgRef = useRef<SVGSVGElement>(null)

  // ================================
  // FUNÇÕES AUXILIARES
  // ================================

  /**
   * Gera um array de retângulos aleatórios
   */
  const generateRectangles = useCallback((): Rectangle[] => {
    const numberOfRects = getRandomInt(15, 40)
    const newRectangles: Rectangle[] = []

    for (let i = 0; i < numberOfRects; i++) {
      const width = getRandomInt(50, 400)
      const height = getRandomInt(50, 400)
      const x = getRandomInt(-width / 2, CANVAS_WIDTH - width / 2)
      const y = getRandomInt(-height / 2, CANVAS_HEIGHT - height / 2)
      const rotation = getRandomInt(0, 1) * 90

      newRectangles.push({
        id: `rect-${i}-${Date.now()}`,
        x: x - OVERLAP / 2,
        y: y - OVERLAP / 2,
        width: width + OVERLAP,
        height: height + OVERLAP,
        rotation
      })
    }

    return newRectangles
  }, [])

  /**
   * Gera um novo padrão e atualiza o histórico
   */
  const generateNewPattern = useCallback(() => {
    const newRectangles = generateRectangles()
    setRectangles(newRectangles)

    // Atualiza histórico
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(newRectangles)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }, [history, historyIndex, generateRectangles])

  /**
   * Exibe um padrão do histórico
   */
  const displayPatternFromHistory = useCallback(
    (index: number) => {
      if (index >= 0 && index < history.length) {
        setRectangles(history[index])
        setHistoryIndex(index)
      }
    },
    [history]
  )

  /**
   * Remove um retângulo específico do padrão
   */
  const removeRectangle = useCallback(
    (id: string) => {
      const updatedRectangles = rectangles.filter((rect) => rect.id !== id)
      setRectangles(updatedRectangles)

      // Atualiza o estado atual no histórico
      const updatedHistory = [...history]
      updatedHistory[historyIndex] = updatedRectangles
      setHistory(updatedHistory)
    },
    [rectangles, history, historyIndex]
  )

  /**
   * Exporta o padrão atual como arquivo SVG
   */
  const exportSVG = useCallback(() => {
    if (!svgRef.current) return

    // Clona o SVG
    const svgToExport = svgRef.current.cloneNode(true) as SVGSVGElement

    // Remove atributos de hover/opacity
    svgToExport.querySelectorAll('rect').forEach((rect) => {
      rect.removeAttribute('opacity')
      rect.style.cursor = ''
    })

    // Define atributos do SVG para exportação
    svgToExport.setAttribute('viewBox', `0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`)
    svgToExport.setAttribute('width', CANVAS_WIDTH.toString())
    svgToExport.setAttribute('height', CANVAS_HEIGHT.toString())
    svgToExport.setAttribute('xmlns', SVG_NAMESPACE)

    const svgData = new XMLSerializer().serializeToString(svgToExport)
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `pattern_${Date.now()}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, [])

  // ================================
  // EVENT HANDLERS
  // ================================

  /**
   * Manipula eventos de teclado para atalhos
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          if (historyIndex === history.length - 1) {
            generateNewPattern()
          } else {
            displayPatternFromHistory(historyIndex + 1)
          }
          break
        case 'ArrowLeft':
          if (historyIndex > 0) {
            displayPatternFromHistory(historyIndex - 1)
          }
          break
        case 's':
        case 'S':
          exportSVG()
          break
      }
    },
    [
      historyIndex,
      history.length,
      generateNewPattern,
      displayPatternFromHistory,
      exportSVG
    ]
  )

  // ================================
  // EFFECTS
  // ================================

  useEffect(() => {
    generateNewPattern()
  }, []) // Inicialização

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // ================================
  // RENDERIZAÇÃO
  // ================================

  return (
    <div
      className="bg-[#646569] flex h-screen w-screen overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <main className="w-full h-full">
        <svg
          ref={svgRef}
          id="pattern-preview"
          className="w-full h-full"
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {rectangles.map((rect) => {
            const centerX = rect.x + rect.width / 2
            const centerY = rect.y + rect.height / 2

            return (
              <rect
                key={rect.id}
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                fill={RECT_COLOR}
                shapeRendering="crispEdges"
                transform={`rotate(${rect.rotation} ${centerX} ${centerY})`}
                opacity={hoveredRect === rect.id ? 0.7 : 1}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredRect(rect.id)}
                onMouseLeave={() => setHoveredRect(null)}
                onClick={(e) => {
                  e.stopPropagation()
                  removeRectangle(rect.id)
                }}
              />
            )
          })}
        </svg>
      </main>

      {/* Overlay de Instruções */}
      <div className="fixed bottom-4 left-4 text-xs text-[#191919] font-mono">
        <p>
          <strong className="font-bold">→</strong>&nbsp;&nbsp;&nbsp;Novo Padrão
        </p>
        <p>
          <strong className="font-bold">←</strong>&nbsp;&nbsp;&nbsp;Padrão
          Anterior
        </p>
        <p>
          <strong className="font-bold">S</strong>
          &nbsp;&nbsp;&nbsp;&nbsp;Exportar SVG
        </p>
        <p>
          <strong className="font-bold">Clique</strong> Remover Bloco
        </p>
      </div>
    </div>
  )
}

// ================================
// EXPORTAÇÕES
// ================================

export default PatternGenerator
