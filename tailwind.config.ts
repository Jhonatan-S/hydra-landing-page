import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#302C42',
        "border-color":"rgba(14, 14, 14, 0.32)",
      
      },
      maxWidth: {
        "max-width": "80.3rem"
      },
      width: {
        "max-width": "80rem"
      }
    },
  },
  plugins: [],
}
export default config
