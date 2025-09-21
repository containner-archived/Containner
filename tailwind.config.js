/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        // Breakpoints padrão do Tailwind (mantidos):
        // sm: '640px'   // Tablets pequenos
        // md: '768px'   // Tablets
        // lg: '1024px'  // Laptops pequenos
        // xl: '1280px'  // Desktops
        // 2xl: '1536px' // Desktops grandes

        // Breakpoints customizados adicionais:
        'laptop-sm': '1200px',    // Laptops pequenos (13-14")
        'laptop-md': '1366px',    // Laptops médios (15")
        'desktop-sm': '1440px',   // Desktops pequenos
        'desktop-md': '1680px',   // Desktops médios
        'desktop-lg': '1920px',   // Desktops grandes (Full HD)
        'desktop-xl': '2560px',   // Desktops extra grandes (2K/4K)

        // Orientações específicas
        'landscape': { 'raw': '(orientation: landscape)' },
        'portrait': { 'raw': '(orientation: portrait)' },
      }
    }
  },

  plugins: [],
}
