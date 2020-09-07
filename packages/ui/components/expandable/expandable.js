
//	Dependencies
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated as a } from 'react-spring';
import clsx from 'clsx';

//	App
import { Icon } from '../index';
import { useMeasure } from '../../hooks';


//
//	Frontier / UI / Components / Expandable
//


export default function Expandable({ title, icon, iconColor, className, children }) {
	if ( !title ) return;

	const id = title.toLowerCase().split( ' ' ).join( '_' );
	const contentRef = useRef();
	const [ isOpen, setIsOpen ] = useState( false );
	const [ bind, { height: viewHeight } ] = useMeasure();

	const { height, opacity, pointerEvents } = useSpring({
		from: { height: 0, opacity: 0, pointerEvents: 'none'  },
		to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' },
	});

	useEffect( () => {
		if ( isOpen ) contentRef.current.focus();
	}, [ isOpen ]);

	return (
		<div className={ clsx( 'c-expandable', className, { '-is-open': isOpen }) }>
			<button
				className="c-expandable_button"
				aria-label={ `${ isOpen ? 'Hide' : 'Show' } ${ ( title ).toLowerCase() } information` }
				aria-controls={ `faq-content-${ id }` }
				onClick={ () => setIsOpen( !isOpen ) }
				id={ `faq-${ id }` }
			>
				<span className="-f-medium">{ title }</span>
				<Icon className={ clsx( '-mla', { [ `-color-${iconColor}` ]: iconColor }) } type={ icon } />
			</button>
			<a.div className="c-expandable_viewport" style={{ opacity, height, pointerEvents }}>
				<div { ...bind } className="c-expandable_panel">
					<div
						aria-labelledby={ `faq-${ id }` }
						aria-expanded={ isOpen }
						tabIndex="-1"
						id={ `faq-content-${ id }` }
						className="c-expandable_content"
						ref={ contentRef }
					>
						{ children }
					</div>
				</div>
			</a.div>
		</div>
	);
}

Expandable.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	icon: PropTypes.string,
	iconColor: PropTypes.string,
};

Expandable.defaultProps = {
	icon: 'angle-down',
};
