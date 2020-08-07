
const path = require('path');

module.exports = {
	stories: [ '../src/components/**/*.stories.js' ],
	webpackFinal: async ( config, { configType }) => {
		// // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// // You can change the configuration based on that.
		// // 'PRODUCTION' is used when building the static version of storybook.

		// // Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				{
					// Prefer `dart-sass`
					loader: 'sass-loader',
					options: {
						implementation: require( 'sass' ),
						sassOptions: {
							// includePaths: [ '../../../' ],
						},
					},
				}
			],
			// include: path.resolve( __dirname, '../packages' ),
		});

		// // Return the altered config
		return config;
	  },
};