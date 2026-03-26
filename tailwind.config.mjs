/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2f6f9e',
				primaryStrong: '#255a81',
				accent: '#3d8a54',
				bg: '#101417',
				bgDeep: '#0c1013',
				surface: '#161b1f',
				surfaceAlt: '#1e252b',
				surfaceHeader: '#13181d',
				surfaceFooter: '#10151a',
				border: '#29343d',
				borderSoft: '#232d35',
				text: '#e3e8ed',
				textStrong: '#d5dee6',
				textLabel: '#afbcc7',
				textMuted: '#99a8b3',
				textSoft: '#8394a0',
				textSubtle: '#718491',
				success: '#7ac089',
				successBg: '#132018',
				successBorder: '#274b31',
				ringPrimary: '#27485f',
			},
		},
	},
	plugins: [],
};
