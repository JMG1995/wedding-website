const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `Anthea + Joseph Wedding`,
		description: `RSVP to Anthea and Joseph's Wedding`,
		author: `@josephgrant`,
	},
	plugins: [
		`gatsby-plugin-eslint`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `anthea-joseph-wedding`,
				short_name: `starter`,
				start_url: `/`,
				background_color: fullConfig.theme.colors.white,
				theme_color: fullConfig.theme.colors.teal['400'],
				display: `minimal-ui`,
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require(`tailwindcss`)(tailwindConfig),
					require(`autoprefixer`),
					...(process.env.NODE_ENV === `production`
						? [require(`cssnano`)]
						: []),
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 75,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Permanent Marker`,
					},
					{
						family: `Montserrat`,
						variants: [`400`, `700`],
					},
				],
			},
		},
	],
};
