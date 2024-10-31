import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/{app,ui}/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				ink: '#000',
				canvas: '#fff',

				accent: '#212530',
				flame: '#D5440A',
				flameLight: '#F7E4D6',
				flameDark: '#F6A329',
				primary: '#F6A329',
				secondary: '#1B2B3A',
				bgPrimary: '#F7E4D6',
			},
			maxHeight: {
				fold: 'calc(100svh - var(--header-height))',
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('header-open', 'body:has(#header-open:checked) &')
			addVariant('header-closed', 'body:has(#header-open:not(:checked)) &')
		}),
	],
	safelist: [{ pattern: /action.*/ }, 'ghost', 'flame-link'],
}

export default config
