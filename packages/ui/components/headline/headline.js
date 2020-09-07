
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import clsx from 'clsx';


//
//	Frontier / UI / Components / Headline
//


export default function Headline({ className, type, children }) {
	const Comp = type;

	return (
		<Comp className={ clsx( 'c-headline', className ) }>
			{ children }
		</Comp>
	);
}

Headline.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.node,
};

Headline.defaultProps = {
	type: 'h1',
};
