
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import { Form } from './index';


//
//	Frontier / UI / Components / Form
//


const sizes = 	[
	{ text: 'small', value: 's', id: 's' },
	{ text: 'medium', value: 'm', id: 'm' },
	{ text: 'large', value: 'l', id: 'l' },
];

storiesOf( 'Components/Form', module ).add( 'Checkbox', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Checkbox</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-half">
						<Form.Checkbox
							label="Check here"
							labelPos="before"
							name="Checkbox example"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Form', module ).add( 'Input', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Input</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-half">
						<Form.Input
							label="Email"
							placeholder="Email"
							name="email"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Form', module ).add( 'Radio', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Radio</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-half">
						<Form.RadioGroup>
							{ sizes.map( ( o ) => (
								<Form.Radio
									name="Sizes"
									key={ o.id }
									label={ o.text }
									value={ o.value }
								/>
							) ) }
						</Form.RadioGroup>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Form', module ).add( 'Select', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Select</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-half">
						<Form.Select
							name="Size"
							label="size"
							options={ sizes.map( ( o ) => ({ text: o.text, value: o.value }) ) }
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
) );
