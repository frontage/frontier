
//	Dependencies
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

//	App
import './_icon.scss';
import Icon, { IconMap } from './icon';


//
//	Frontier / UI / Components / Icon
//


const sizeMap = {
	'xs': 'XS',
	's': 'S',
	'': 'Default',
	'm': 'M',
	'l': 'L',
	'xl': 'XL',
	'xxl': 'XXL',
}

storiesOf( 'Components/Icon', module ).add( 'Icons', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Icons</h1>
					</div>
				</div>
				<div className="row -ss1">
					{ Object.keys( IconMap ).map( type => (
						<div key={ type } className="col -span-sixth -va-center -mb3">
							<Icon className="-pr1" type={ type } />
							<span>{ type }</span>
						</div>
					) )}
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Icon', module ).add( 'Sizes', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Sizes</h1>
					</div>
				</div>
				<div className="row">
					{ Object.keys( sizeMap ).map( s => (
						<div key={ s } className="col -va-center -mb3">
							<Icon className="-pr1" type="tw" size={ s } />
							<span>{ sizeMap[ s ] }</span>
						</div>
					) )}
				</div>
			</div>
		</section>
	</div>
) );