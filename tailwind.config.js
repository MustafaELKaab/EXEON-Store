export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'exeon-bg': '#000000',
        'exeon-card': '#0a0a0a',
        'exeon-primary': '#aa00ff',
        'exeon-primary-hover': '#d580ff',
        'exeon-border': '#2a0040',
        'exeon-text': '#ffffff',
        'exeon-muted': '#999999',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'system-ui'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
