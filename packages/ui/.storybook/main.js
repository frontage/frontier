
module.exports = {
	stories: [ '../src/components/**/*.stories.js' ],
	webpackFinal: async ( config ) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					// options: {
					// 	sassOptions: {
					// 		includePaths: [ '../../../' ],
					// 	},
					// },
				}
			],
		});

		return config;
	  },
};
