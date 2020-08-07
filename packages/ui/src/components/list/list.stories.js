
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import List from './list';


//
//	Frontier / UI / List
//


const listItems = [
	{ text: 'List item 1', icon: 'cross' },
	{ text: 'List item 2', icon: 'check' },
	{ text: 'List item 3', icon: 'check' },
]

storiesOf( 'Components/List', module ).add( 'List', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row -ss1">
					<div className="col -span-quarter">
						<p>Default List</p>
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
