
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Breadcrumbs from './breadcrumbs';


//
//	Frontier / UI / Components / Breadcrumbs
//


const routeArr = [
	{ path: '/', title: 'path one' },
	{ path: '/', title: 'path two' },
	{ path: '/', title: 'path three' },
];

storiesOf( 'Components/Breadcrumbs', module ).add( 'Default', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Default</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-quarter">
						<Breadcrumbs routeArr={ routeArr } />
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Breadcrumbs', module ).add( 'Styles', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Styles</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-quarter">
						<Breadcrumbs className="-style-highlight" routeArr={ routeArr } />
					</div>
				</div>
			</div>
		</section>
	</div>
) );
