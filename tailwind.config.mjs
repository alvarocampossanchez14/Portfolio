/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4c8edc',
				secondary: '#1E3A8A', 
				accent: '#4c8edc',
				neutral: '#F3F4F6', 
				light: '#75A9D7', 
				dark: '#2F5D8A', 
			},
		},
	},
	plugins: [],
};
