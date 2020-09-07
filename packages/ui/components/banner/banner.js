
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	App
import { Button } from '../index';


//
//	Frontier / UI / Components / Banner
//


export default function Banner({ children, className, title, text, type, onClose }) {
	return (
		<div className={ clsx( 'c-banner', '-t-dark', className, { [`-style-${ type }`]: type } ) }>
			<div className="container">
				<div className="row">
					<div className="col">
						{ ( title && text ) &&
							<p>{ title && <span className="-f-bold">{ title }:</span> } { text }</p>
						}
						{ children && children }
					</div>
				</div>
			</div>
			{/* <Button icon="cross" size="s" iconSize="xs" className="c-banner_close -style-none" onClick={ onClose } /> */}
		</div>
	);
}

Banner.propTypes = {
	className: PropTypes.string,
	image: PropTypes.string,
	onClose: PropTypes.func,
	size: PropTypes.string,
};
