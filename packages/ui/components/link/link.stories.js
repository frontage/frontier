
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Link from './link';


//
//	Frontier / UI / Components / Link
//


storiesOf( 'Components/Link', module ).add( 'Default', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Default</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Link>Test</Link>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Link', module ).add( 'Styles', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Styles</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Link className="-style-brand">Test</Link>
					</div>
				</div>
			</div>
		</section>
	</div>
) );
