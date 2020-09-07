
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';


//
//	Frontier / UI / Components / Avatar
//


export default function Avatar({ className, image, size, onClick, avatarDefault }) {
	const sizeClass = { [ `-size-${ size }` ]: size };

	return (
		<div className={ clsx( 'c-avatar', className, sizeClass, { '-style-default': !image } )} onClick={ onClick }>
			{ image ? ( <img src={ image.src } alt={ image.alt } /> ) : avatarDefault }
		</div>
	);
}

Avatar.propTypes = {
	className: PropTypes.string,
	default: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	image: PropTypes.object,
	size: PropTypes.string,
	onClick: PropTypes.func,
};

Avatar.defaultProps = {
	avatarDefault: '',
};
