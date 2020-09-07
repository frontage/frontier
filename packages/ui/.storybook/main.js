

//
//	Frontier Storybook / Main
//



module.exports = {
	stories: [ '../components/**/*.stories.js' ],
	addons: [ '@storybook/addon-a11y', '@storybook/addon-essentials' ],
	webpackFinal: async ( config ) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
				}
			],
		});

		return config;
	  },
};
