module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					muted: 'var(--color-text-muted)',
					inverted: 'var(--color-text-inverted)',
				},
			},
			backgroundColor: {
				skin: {
					fill: 'var(--color-fill)',
					'button-accent': 'var(--color-button-accent)',
					'button-accent-hover': 'var(--color-button-accent-hover)',
					'button-muted': 'var(--color-button-muted)',
				},
			},
		},
		container: {
			center: true,
			padding: '2rem',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
