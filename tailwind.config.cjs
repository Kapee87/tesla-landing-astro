/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			colors: {
				'tesla-gray': 'rgba(23, 26, 32, 0.8)'
			}
		},
	},
	plugins: [],
}
