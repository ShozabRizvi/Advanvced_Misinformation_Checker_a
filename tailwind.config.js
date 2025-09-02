module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"  // Changed from ./public/index.html to ./index.html
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f4ff',
          100: '#ebe9fe', 
          200: '#d9d6fe',
          300: '#bfb8fd',
          400: '#9f90fa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
