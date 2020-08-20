
//	Dependencies
const path = require( 'path' );


//
//	Frontier / Site / Next.js Config
//


const CWD = process.cwd();
const ROOT = path.resolve( CWD, 'src' );


module.exports = () => {
	return {
		webpack: ( config ) => {
			config.resolve.modules = [
				'node_modules',
				ROOT,
			];
			return config;
		},
	};
};
