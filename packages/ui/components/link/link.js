
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import clsx from 'clsx';


//
//	Frontier / UI / Components / Link
//


export default function Link( props ) {
	const {
		children, className,
		element, href, as,
		type, labelledBy,
		disabled, external,
		onClick,
		...restProps
	} = props;

	const _isAnchor = element === 'a';
	const _isButton = element === 'button';
	const _isRoutable = ( typeof href !== 'undefined' );

	let elProps = {
		...restProps,
		children,
		'className': clsx( className, {
			'c-link': !className.includes( 'c-button' ),
			'-is-disabled': disabled,
		}),
		'aria-labelledby': labelledBy ? labelledBy : null,
		onClick: e => {
			if ( disabled ) return e.preventDefault();
			if ( onClick ) onClick( e );
		},
	};

	if ( _isButton ) {
		elProps = {
			...elProps,
			type,
			disabled,
		};
	}

	if ( _isAnchor && external ) {
		elProps.target = '_blank';
		elProps.rel = 'external nofollow noreferrer noopener';
	}

	const linkContent = React.createElement( element, elProps );

	if ( !external && _isRoutable ) {
		// console.log( 'href', href, as, _isRoutable, element );
		return (
			<NextLink href={ href } as={ as }>
				{ linkContent }
			</NextLink>
		);
	}

	return linkContent;
}

Link.propTypes = {
	children: PropTypes.node,
	element: PropTypes.oneOf([ 'a', 'button' ]),
	type: PropTypes.oneOf([ 'button', 'submit' ]),
	className: PropTypes.string,
	href: PropTypes.string,
	as: PropTypes.string,
	external: PropTypes.bool,
	disabled: PropTypes.bool,
	focusable: PropTypes.bool,
	onClick: PropTypes.func,
	labelledBy: PropTypes.string,
};

Link.defaultProps = {
	className: '',
	external: false,
	element: 'a',
	type: 'button',
};
