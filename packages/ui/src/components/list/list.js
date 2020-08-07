
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';


//
//	Frontier / UI / Components / List
//


export default function List({ children, format, className }) {

	const formatClass = { [ `-format-${ format }` ]: format };
	const listClass = { '-format-list': format !== 'ordered' };
	const Component = format === 'ordered' ? 'ol' : 'ul';

	return (
		<Component className={ clsx( 'c-list', className, listClass, formatClass ) }>
			{ React.Children.map( children, ( c ) =>  c ) }
		</Component>
	);
}

export function ListItem({ children, className }) {
	return (
		<li className={ className }>
			{ children }
		</li>
	);
}

List.Item = ListItem;

List.propTypes = {
	className: PropTypes.string,
	format: PropTypes.string,
	children: PropTypes.node.isRequired,
};

ListItem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
