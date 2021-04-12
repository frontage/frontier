
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

//	App
import { Icon } from '../index';


//
//	Frontier / UI / Components / Loader
//


export default function Loader({ className, size }) {
	return (
		<div className={ clsx( 'c-loader', className )} aria-label="Loading, please wait." aria-live='polite'>
			<Icon type="load" size={ size } />
		</div>
	);
}

Loader.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
};
