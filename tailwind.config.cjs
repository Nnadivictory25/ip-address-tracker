/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: { max: '480px' },
				md: '650px',
				lg: '976px',
				xl: '1440px',
			},
			colors: {
				vDarkGrey: 'hsl(0, 0%, 17%)',
				darkGrey: 'hsl(0, 0%, 59%)'
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
