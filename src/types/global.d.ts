// ================================
// GLOBAL TYPE DECLARATIONS
// ================================

declare global {
  interface Window {
    /** Google Analytics gtag function */
    gtag: (...args: any[]) => void
    /** Google Analytics data layer */
    dataLayer: any[]
  }
}

// ================================
// MODULE DECLARATIONS
// ================================

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      /** Custom img-comparison-slider element */
      'img-comparison-slider': any
    }
  }
}

export {}
