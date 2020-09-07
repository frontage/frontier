
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	App
import { Icon, Link } from '../index';


//
//	Frontier / UI / Components / Card
//


const Card = React.memo( function Card({
	className, children, footer,
	theme, format, href, external,
	icon, iconSize, ...restProps
}) {
	const _isLink = ( typeof href !== 'undefined' );
	const _icon = typeof icon === 'string' ? <Icon type={ icon } size={ iconSize } /> : icon;

	const classes = clsx( 'c-card', {
		[ `-format-${ format }` ]: format,
		[ `-t-${ theme }` ]: theme,
	}, className );

	const cardProps = {
		className: classes,
		href, external,
		...restProps,
	};

	const renderContent = (
		<div className="c-card_wrapper">
			{ children && children }
			{ ( icon || footer ) &&
				<div className="c-card_footer -va-center">
					{ footer && footer }
					{ icon && (
						<span className="c-card_icon -mla">
							{ _icon }
						</span>
					)}
				</div>
			}
		</div>
	);

	return React.createElement( _isLink ? Link : 'div', cardProps, renderContent );
});

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	footer: PropTypes.node,
	theme: PropTypes.string,
	format: PropTypes.string,
	href: PropTypes.string,
	external: PropTypes.bool,
	icon: PropTypes.string,
	iconSize: PropTypes.string,
};

export default Card;
