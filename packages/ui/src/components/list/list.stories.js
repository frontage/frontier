
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import List from './index';


//
//	Frontier / UI / Components / List
//


const listItems = [
	{ text: 'List item 1', icon: 'cross' },
	{ text: 'List item 2', icon: 'check' },
	{ text: 'List item 3', icon: 'check' },
];

storiesOf( 'Components/List', module ).add( 'Default', () => (
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
						<List>
							{ listItems.map( ( l, i ) => (
								<List.Item key={ i }>{ l.text }</List.Item>
							) )}
						</List>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/List', module ).add( 'Ordered', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Ordered</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-quarter">
						<List format="ordered">
							{ listItems.map( ( l, i ) => (
								<List.Item key={ i }>{ l.text }</List.Item>
							) )}
						</List>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/List', module ).add( 'Icon', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Icon</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-quarter">
						<List>
							{ listItems.map( ( l, i ) => (
								<List.Item iconType={ i % 2 ? 'check' : 'cross' } key={ i }>{ l.text }</List.Item>
							) )}
						</List>
					</div>
				</div>
			</div>
		</section>
	</div>
) );
