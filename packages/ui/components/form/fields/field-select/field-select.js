
//	Dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import clsx from 'clsx';


//	App
import { Icon, VisuallyHidden } from '../../../index';


//
//	Frontier / UI / Components / Form / Field Select
//


export default function FieldSelect( props ) {
	const {
		className, format, label, hideLabel, name, options, initialValue,
		placeholder, disabled, error, useFormik, onChange,
	} = props;

	const classes = clsx( className, 'c-field', 'c-field-select', {
		'-is-error': error,
		[`-format-${ format }`]: format,
	});

	let formikField = {};
	if ( useFormik ) [ formikField ] = useField( props );

	const [ selectedValue, setSelectedValue ] = useState();

	useEffect( () => {
		setSelectedValue( initialValue );
	}, [ initialValue ] );

	const handleChange = ( e ) => {
		const { value } = e.currentTarget;
		setSelectedValue( value );
		if ( onChange ) onChange( e );
	};

	const handleBlur = ( e ) => {
		const { value } = e.currentTarget;
		if ( value !== selectedValue ) {
			setSelectedValue( value );
			if ( onChange ) onChange( e );
		}
	};

	return (
		<div className={ classes }>
			<label>
				{ hideLabel ? (
					<VisuallyHidden>{ label }</VisuallyHidden>
				) : (
					label
				)}
				<select
					name={ name }
					disabled={ disabled }
					aria-describedby={ `${ name }-message` }
					aria-invalid={ !!error }
					onChange={ handleChange }
					onBlur={ handleBlur }
					value={ selectedValue }
					{ ...formikField }
				>
					{ placeholder && <option value="" disabled>{ placeholder }</option> }
					{ options.map( o => <option key={ o.value } value={ o.value } disabled={ o.disabled }>{ o.text }</option> )}
				</select>
				<Icon type="angle-down" />
			</label>
			<div id={ `${ name }-message` } role="alert" className="message f10">
				{ error }
			</div>
		</div>
	);
}

FieldSelect.propTypes = {
	disabled: PropTypes.bool,
	label: PropTypes.string,
	hideLabel: PropTypes.bool,
	name: PropTypes.string.isRequired,
	options: PropTypes.array,
	placeholder: PropTypes.string,
	useFormik: PropTypes.bool,
	error: PropTypes.string,
	className: PropTypes.string,
	format: PropTypes.string,
	onChange: PropTypes.func,
	initialValue: PropTypes.string,
};

FieldSelect.defaultProps = {
	useFormik: false,
};
