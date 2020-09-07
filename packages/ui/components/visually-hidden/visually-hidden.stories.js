//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import VisuallyHidden from './visually-hidden';


//
//	Frontier / UI / Components / Visually Hidden
//


storiesOf( 'Components/VisuallyHidden', module ).add( 'Default', () => (
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
						<h2 className="f6 -mb3">Nothing to see here!</h2>
						<p>VisuallyHidden is used for cases where the design calls for something to be hidden but for accessibility reasons you still need to have have a description.</p>
						<p>A common case for this would be an icon button, for visually impaired users you need to have an indication of what the button functionality is.</p>
						<p>Below is a VisuallyHidden component, feel free to use a screen reader to pick up on the hidden copy.</p>
						<VisuallyHidden>
							Secret Content - Content here is hidden visually, but still able to be picked up by a screen reader.
						</VisuallyHidden>
					</div>
				</div>
			</div>
		</section>
	</div>
) );
