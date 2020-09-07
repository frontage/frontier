
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Card from './card';


//
//	Frontier / UI / Components / Card
//


storiesOf( 'Components/Card', module ).add( 'Default', () => (
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
						<Card>Main body card content</Card>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Card', module ).add( 'Options', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Options</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-quarter">
						<Card href="/" footer={ <p>Follow this link</p> } icon="angle-right">
							Main body card content
						</Card>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Card', module ).add( 'Format', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Format</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-quarter">
						<Card format="auto">
							Main body card content - format auto
						</Card>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Card', module ).add( 'Styles', () => (
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
						<Card className="-style-flat">
							Main body card content - style flat
						</Card>
					</div>
				</div>
			</div>
		</section>
	</div>
) );