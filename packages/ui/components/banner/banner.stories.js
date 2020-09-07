
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Banner from './banner';


//
//	Frontier / UI / Components / Banner
//


storiesOf( 'Components/Banner', module ).add( 'Default', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Default</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-full">
						<Banner title="Alert" text="critical information" />
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Banner', module ).add( 'Types', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Types</h1>
					</div>
				</div>
				<div className="row -mb2">
					<div className="col">
						<Banner title="Alert" text="critical information" type="warning" />
					</div>
				</div>
				<div className="row -mb2">
					<div className="col">
						<Banner title="Alert" text="critical information" type="error" />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Banner title="Alert" text="critical information" type="success" />
					</div>
				</div>
			</div>
		</section>
	</div>
) );