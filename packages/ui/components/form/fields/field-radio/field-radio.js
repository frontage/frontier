
//	Dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import clsx from 'clsx';

// App
import { Icon, VisuallyHidden } from '../../../index';


//
//	Frontier / UI / Components / Form / Field Radio
//


export function RadioGroup( props ) {
	const { className, ariaLabel, onChange, defaultChecked, children } = props;
	const [ selected, setSelected ] = useState( defaultChecked );

	useEffect( () => setSelected( defaultChecked ), [ defaultChecked ] );

	const handleChange = ( event ) => {
		const { value } = event.currentTarget;
		setSelected( value );
		if ( onChange ) onChange( event );
	};

	return (
		<div role="group" aria-label={ ariaLabel } className={ clsx( className, 'c-field', 'c-field-radio-group' ) }>
			{ React.Children.map( children, ( c ) => React.cloneElement( c, { selected, handleChange }) )}
		</div>
	);
}

export default function FieldRadio( props ) {
	const {
		className, name, label, value, disabled, hideLabel,
		useFormik, format, imgSrc, imgAlt, selected, handleChange,
	} = props;

	const formatClass = { [`-format-${ format }`]: format };
	const imgFormatClass = { [ '-format-image' ]: imgSrc };
	const classes = clsx( className, imgFormatClass, formatClass, 'c-field', 'c-field-radio' );

	let formikField = {};
	if ( useFormik ) [ formikField ] = useField( props );

	return (
		<div className={ classes }>
			<label>
				<input
					type="radio"
					className="-mr1"
					name={ name }
					checked={ selected === value }
					onChange={ handleChange }
					disabled={ disabled }
					value={ value }
					{ ...formikField }
				/>
				{ imgSrc &&
					<div className="c-field-radio_img">
						<span className="c-field-radio_img_disabled"></span>
						<div className="c-field-radio_img_tick">
							<Icon type="tick" size="xs" />
						</div>
						<img src={ imgSrc } alt={ imgAlt } />
					</div>
				}
				{ hideLabel ? (
					<VisuallyHidden>{ label }</VisuallyHidden>
				) : (
					<span className="c-field-radio_text">
						{ label }
					</span>
				) }
			</label>
		</div>
	);
}

RadioGroup.propTypes = {
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	defaultChecked: PropTypes.string,
	children: PropTypes.node,
	onChange: PropTypes.func,
};

FieldRadio.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	useFormik: PropTypes.bool,
	format: PropTypes.string,
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	value: PropTypes.string.isRequired,
	selected: PropTypes.string,
	handleChange: PropTypes.func,
	hideLabel: PropTypes.bool,
};

FieldRadio.defaultProps = {
	useFormik: false,
	selected: '',
};
