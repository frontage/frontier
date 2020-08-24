
//	Dependencies
const path = require( 'path' );
const transpileModules = require( 'next-transpile-modules' );
const withSass = require( 'next-dart-sass' );


//
//	Frontier / Site / Next.js Config
//


const CWD = process.cwd();
const ROOT = path.resolve( CWD, 'src' );

const withTranspile = transpileModules([ '@frontage/frontier-ui' ]);

module.exports = () => {
	return withTranspile( withSass({
		webpack: ( config ) => {
			config.resolve.modules = [
				'node_modules',
				ROOT,
			];
			return config;
		},
		// sassLoaderOptions: {
		// 	sassOptions: {
		// 		includePaths: [ 'src' ],
		// 	},
		// },
	}));
};
