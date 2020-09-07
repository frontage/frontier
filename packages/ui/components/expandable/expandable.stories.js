
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Expandable from './expandable';


//
//	Frontier / UI / Components / Expandable
//


storiesOf( 'Components/Expandable', module ).add( 'Default', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Default</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-half">
						<Expandable title="Expandable Item 1">
							<h2 className="f5">Expdanable Content</h2>
							<p>Expandable content is passed in as children, this can be any standard html content: paragraphs, headlines, lists, buttons / links, etc.</p>
						</Expandable>
						<Expandable title="Expandable Item 2">
							<p>Expandable content is passed in as children, this can be any standar html content: paragraphs, headlines, lists, buttons / links, etc.</p>
						</Expandable>
					</div>
				</div>
			</div>
		</section>
	</div>
) );
