// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./index.html', './src/**/*.{vue,ts}'],
	},

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: colors.rose,
				secondary: colors.violet,
				accent: colors.orange,
				danger: colors.red,
				success: colors.green,
				warning: colors.yellow,
				info: colors.lightBlue,
				alert: colors.red,
				neutral: colors.gray,
			},
			maxWidth: {
				0: '0',
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				full: '100%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
