
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';


//
//	Frontier / UI / Components / Visually Hidden
//


export default function VisuallyHidden({ className, children }) {

	return (
		<span className={ clsx( 'c-visually-hidden', className ) }>
			{ children }
		</span>
	);
}

VisuallyHidden.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
