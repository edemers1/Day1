
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { dark:'#010819', green:'#0BAD4F', blue:'#0E7DA2', teal1:'#05282F', teal2:'#04555D', purple:'#6E59B3' }
      }
    }
  },
  plugins: [],
}
export default config
