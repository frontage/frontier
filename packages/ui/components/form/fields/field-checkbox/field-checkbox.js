
//	Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import clsx from 'clsx';


// App
import { Icon } from '../../../index';


//
//	Frontier / UI / Components / Form / Field Input
//


export default function FieldCheckbox( props ) {
	const { className, name, label, labelPos, error, disabled, useFormik } = props;
	const [ checked, setChecked ] = useState( false );
	const toggle = () => setChecked( !checked );

	let formikField = {};
	if ( useFormik ) [ formikField ] = useField({ ...props, multiple: true, type: 'checkbox' });

	const classes = clsx( className, 'c-field', 'c-field-checkbox',
		{ '-layout-reverse': labelPos === 'before' },
		{ '-is-error': error },
	);

	return (
		<div className={ classes }>
			<label>
				<span className="c-field-checkbox_input">
					<input
						name={ name }
						checked={ checked }
						onChange={ toggle }
						aria-describedby={ `${ name }-message` }
						aria-invalid={ !!error }
						disabled={ disabled }
						type="checkbox"
						{ ...formikField }
					/>
					<Icon size="xs" type="check" />
				</span>
				<span className="c-field_label">{ label }</span>
			</label>
			<div id={ `${ name }-message` } role="alert" className="message f10">
				{ error }
			</div>
		</div>
	);
}

FieldCheckbox.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	labelPos: PropTypes.string,
	error: PropTypes.string,
	disabled: PropTypes.bool,
	useFormik: PropTypes.bool,
};

FieldCheckbox.defaultProps = {
	useFormik: false,
	labelPos: 'after',
};
