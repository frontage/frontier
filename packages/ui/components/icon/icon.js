
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import _ from 'lodash';


//
//	Frontier / UI / Components / Icon
//


export const IconMap = {
	'angle-down': <path d="M17 9.17a1 1 0 00-1.41 0L12 12.71 8.46 9.17a1 1 0 00-1.41 0 1 1 0 000 1.42l4.24 4.24a1 1 0 001.42 0L17 10.59a1 1 0 000-1.42z" />,
	'angle-left': <path d="M11.29 12l3.54-3.54a1 1 0 000-1.41 1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42L13.41 17a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.41z" />,
	'angle-right': <path d="M14.83 11.29l-4.24-4.24a1 1 0 00-1.42 0 1 1 0 000 1.41L12.71 12l-3.54 3.54a1 1 0 000 1.41 1 1 0 00.71.29 1 1 0 00.71-.29l4.24-4.24a1 1 0 000-1.42z" />,
	'angle-up': <path d="M17 13.41l-4.29-4.24a1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42 1 1 0 001.41 0L12 11.29l3.54 3.54a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 00.05-1.42z" />,
	'arrow-left': <path d="M17 11H9.41l3.3-3.29a1 1 0 10-1.42-1.42l-5 5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l5 5a1 1 0 001.42 0 1 1 0 000-1.42L9.41 13H17a1 1 0 000-2z" />,
	'arrow-right': <path d="M17.92 11.62a1 1 0 00-.21-.33l-5-5a1 1 0 00-1.42 1.42l3.3 3.29H7a1 1 0 000 2h7.59l-3.3 3.29a1 1 0 000 1.42 1 1 0 001.42 0l5-5a1 1 0 00.21-.33 1 1 0 000-.76z" />,
	'check': <path d="M18.71 7.21a1 1 0 00-1.42 0l-7.45 7.46-3.13-3.14A1 1 0 105.29 13l3.84 3.84a1 1 0 001.42 0l8.16-8.16a1 1 0 000-1.47z" />,
	'cross': <path d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" />,
	'menu': <path d="M3 8h18a1 1 0 000-2H3a1 1 0 000 2zm18 8H3a1 1 0 000 2h18a1 1 0 000-2zm0-5H3a1 1 0 000 2h18a1 1 0 000-2z" />,
	'trash': <path d="M10 18a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1zM20 6h-4V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H4a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V8h1a1 1 0 000-2zM10 5a1 1 0 011-1h2a1 1 0 011 1v1h-4zm7 14a1 1 0 01-1 1H8a1 1 0 01-1-1V8h10zm-3-1a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1z" />,
	'tw': <path d="M22 5.8a8.49 8.49 0 01-2.36.64 4.13 4.13 0 001.81-2.27 8.21 8.21 0 01-2.61 1 4.1 4.1 0 00-7 3.74 11.64 11.64 0 01-8.45-4.29 4.16 4.16 0 00-.55 2.07 4.09 4.09 0 001.82 3.41 4.05 4.05 0 01-1.86-.51v.05a4.1 4.1 0 003.3 4 3.93 3.93 0 01-1.1.17 4.9 4.9 0 01-.77-.07 4.11 4.11 0 003.83 2.84A8.22 8.22 0 013 18.34a7.93 7.93 0 01-1-.06 11.57 11.57 0 006.29 1.85A11.59 11.59 0 0020 8.45v-.53a8.43 8.43 0 002-2.12z" />,
	'upload': <path d="M8.71 7.71L11 5.41V15a1 1 0 002 0V5.41l2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42l-4-4a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-4 4a1 1 0 101.42 1.42zM21 12a1 1 0 00-1 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a1 1 0 00-2 0v6a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1z" />,
	'yt': <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z" />,
};

export default function Icon( props ) {
	const { className, style, type, size, format, colour, ...restProps } = props;

	const iconPath = _.get( IconMap[ type ], 'path', IconMap[ type ]);
	const sizeClass = size && `-size-${ size }` || null;
	const formatClass = format && `-format-${ format }` || null;
	const classes = clsx( 'c-icon', className, sizeClass, formatClass );

	return (
		<span className={ classes } { ...restProps } style={ style }>
			<svg xmlns="http://www.w3.org/2000/svg" fill={ colour } stroke="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="xMidYMid meet">
				{ iconPath && iconPath }
			</svg>
		</span>
	);
}

Icon.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	colour: PropTypes.string,
	size: PropTypes.string,
	format: PropTypes.string,
	type: PropTypes.string,
};

Icon.defaultProps = {
	colour: 'currentColor',
};
