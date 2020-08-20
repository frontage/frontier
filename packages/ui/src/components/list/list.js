
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	App
// import Icon from '@Frontage/core/Button';


//
//	Frontier / UI / Components / List
//


export default function List({ children, format, className, iconType }) {

	const formatClass = { [ `-format-${ format }` ]: format };
	const listClass = { '-format-list': format !== 'ordered' };
	const Component = format === 'ordered' ? 'ol' : 'ul';

	const props = {};
	if ( iconType ) props.iconType = iconType;

	return (
		<Component className={ clsx( 'c-list', className, listClass, formatClass ) }>
			{ React.Children.map( children, ( c ) =>  React.cloneElement( c, props ) ) }
		</Component>
	);
}

export function ListItem({ children, className, iconType }) {
	const classes = clsx( className, { [ '-format-icon' ]: iconType } );
	return (
		<li className={ classes ? classes : null }>
			{/* { iconType && <Icon type={ iconType } className="c-list_icon" /> } */}
			{ children }
		</li>
	);
}

List.Item = ListItem;

const sharedListProptypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	iconType: PropTypes.string,
};

List.propTypes = {
	...sharedListProptypes,
	format: PropTypes.string,
};

ListItem.propTypes = {
	...sharedListProptypes,
};
