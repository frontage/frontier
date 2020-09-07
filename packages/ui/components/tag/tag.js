
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';


//
//	Frontier / UI / Components / Tag
//


export default function Tag({ className, format, children, size }) {

	return (
		<span className={ clsx( 'c-tag', className, { [`-format-${ format }`]: format, [`-size-${ size }`]: size } )}>
			{ children }
		</span>
	);
}

Tag.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf([ 's', 'm', 'l' ]),
	className: PropTypes.string,
};
