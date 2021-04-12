
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Loader from './loader';


//
//	Frontier / UI / Components / Loader
//


storiesOf( 'Components/Loader', module ).add( 'Default', () => (
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
						<Loader />
					</div>
				</div>
			</div>
		</section>
	</div>
) );
