
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import _ from 'lodash';

// App
import { VisuallyHidden } from '../../../index';


//
//	Frontier / UI / Components / Form / Field Input
//


export default function FieldInput( props ) {
	const {
		className, name, type, placeholder, label, size,
		disabled, readOnly, hideLabel, error, value,
		useFormik,
	} = props;

	let fieldProps = {};
	if ( useFormik ) {
		[ fieldProps ] = useField( props );
	} else {
		fieldProps = {
			value,
		};
	}

	const sizeClass = { [ `-size-${ size }` ]: size };
	const inputClasses = clsx( 'input', sizeClass );

	return (
		<div className={ clsx( className, 'c-field', 'c-field-input', { '-is-error': error }) }>
			<label className="label">
				{ hideLabel ? (
					<VisuallyHidden>{ label }</VisuallyHidden>
				) : (
					<span className="f8">{ label }</span>
				)}
				<input
					name={ name }
					className={ inputClasses }
					type={ type }
					placeholder={ placeholder }
					disabled={ disabled }
					readOnly={ readOnly }
					aria-describedby={ `${ name }-message` }
					aria-invalid={ !!error }
					{ ...fieldProps }
				/>
			</label>
			{ error && (
				<div id={ `${ name }-message` } role="alert" className="c-field_message f10">
					{ error }
				</div>
			)}
		</div>
	);
}

FieldInput.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	size: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	helper: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	hideLabel: PropTypes.bool,
	useFormik: PropTypes.bool,
};

FieldInput.defaultProps = {
	type: 'text',
	useFormik: false,
};
