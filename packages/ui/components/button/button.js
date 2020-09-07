
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// App
import { Icon, Link } from '../index';


//
//	Frontier / UI / Components / Button
//


export default function Button( props ) {
	const { children, className, ariaLabel, format, size, icon, iconSize, iconPos, iconFormat, ...restProps } = props;

	const _isIconButton = icon && !children;
	const _icon = <Icon type={ icon } format={ iconFormat } size={ iconSize || size }/>;
	const iconContent = typeof icon === 'string' ? _icon : icon;

	const sizeClass = size && `-size-${ size }` || null;
	const formatClass = format && `-format-${ format }` || null;
	const classes = clsx( 'c-button', className, formatClass, sizeClass, { '-format-icon': _isIconButton });

	return (
		<Link
			className={ classes }
			labelledBy={ ariaLabel ? 'button-label' : null }
			{ ...restProps }
		>
			<span className="c-button_content">
				{ iconPos === 'before' && iconContent }
				{ children && <span className="c-button_text">{ children }</span> }
				{ iconPos === 'after' && iconContent }
				{ ariaLabel && <span id="button-label" className="-visually-hidden">{ ariaLabel }</span> }
			</span>
		</Link>
	);
}

function ButtonGroup({ children, className, format }) {
	return (
		<div className={ clsx( 'c-button-group', className, { [ `-format-${ format }` ]: format } )}>
			{ children && children }
		</div>
	);
}

Button.Group = ButtonGroup;

ButtonGroup.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	format: PropTypes.string,
};

Button.propTypes = {
	children: PropTypes.node,
	element: PropTypes.oneOf([ 'a', 'button' ]),
	type: PropTypes.oneOf([ 'submit', 'button' ]),
	className: PropTypes.string,
	format: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
	iconSize: PropTypes.string,
	iconFormat: PropTypes.string,
	iconPos: PropTypes.string,
	ariaLabel: PropTypes.string,
	href: PropTypes.string,
	as: PropTypes.string,
	external: PropTypes.bool,
	disabled: PropTypes.bool,
	focusable: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	external: false,
	iconPos: 'after',
	element: 'button',
	type: 'button',
};
