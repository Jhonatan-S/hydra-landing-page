import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#302C42',
        "gradient-from-to":"#8176AF",
        "gradient-to":"#C0B7E8"
      },
    },
  },
  plugins: [],
}
export default config
