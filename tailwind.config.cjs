/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			axs: '334px',
			asm: '734px',
			amd: '1068px',
			alg: '1441px'
		},
		fontFamily: {
			// apple
			sans: [
				'SF Pro Display',
				'SF Pro Icons',
				'Helvetica Neue',
				'Helvetica',
				'Arial',
				'sans-serif'
			],
			text: ['SF Pro text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
		},
		extend: {
			animation: {
				tilt: 'tilt 10s infinite linear',
				rotate: 'rotate 10s infinite linear',
				'spin-slow': 'spin 3s linear infinite'
			},
			keyframes: {
				tilt: {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(0.5deg)'
					},
					'75%': {
						transform: 'rotate(-0.5deg)'
					}
				},
				rotate: {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(359deg)'
					}
				},
				'rotate-scale': {
					'0%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'12.5%': {
						transform: 'rotate(45deg) scale(1.42)'
					},
					'25%': {
						transform: 'rotate(90deg) scale(1)'
					}
				}
			}
		}
	},
	daisyui: {
		themes: ['black']
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

module.exports = config;
