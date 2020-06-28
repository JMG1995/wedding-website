// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	purge: ['./src/**/*.js'],
	theme: {
		maxHeight: {
			'600': '600px',
		},
		fontFamily: {
			'permanent-marker': ['Permanent Marker'],
		},
	},
	variants: {},
	// https://github.com/tailwindcss/custom-forms
	plugins: [require('@tailwindcss/custom-forms')],
};
