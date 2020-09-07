
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	App
import { Link, Icon } from '../index';


//
//	Frontier / UI / Components / Breadcrumbs
//


export default function Breadcrumbs({ className, children, icon, iconSize, routeArr }) {
	return (
		<nav className={ clsx( 'c-breadcrumbs', className ) } aria-label="breadcrumbs">
			{ children && children }
			<ul>
				{ Array.isArray( routeArr ) && routeArr.map( ( r, i ) => {
					if ( typeof r === 'string' ) return null;
					const _path = _.get( r, 'path', '/' );
					const _title = _.get( r, 'title', '' );
					return (
						<BreadcrumbItem
							key={ _path }
							title={ _title }
							href={ _path }
							icon={ icon }
							iconSize={ iconSize }
							current={ routeArr.length === i + 1 }
						/>
					);
				})}
			</ul>
		</nav>
	);
}

function BreadcrumbItem({ title, href, current, icon, iconSize }) {
	return (
		<li>
			<Link className="f10" href={ href }>{ title }</Link>
			{ !current &&
				<Icon type={ icon } size={ iconSize } />
			}
		</li>
	);
}

BreadcrumbItem.propTypes = {
	title: PropTypes.string,
	href: PropTypes.string,
	current: PropTypes.bool,
	icon: PropTypes.string,
	iconSize: PropTypes.string,
};

Breadcrumbs.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.string,
	iconSize: PropTypes.string,
};

Breadcrumbs.defaultProps = {
	icon: 'angle-right',
	iconSize: 'xxs',
}
