
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Headline from './headline';


//
//	Frontier / UI / Components / Tag
//


storiesOf( 'Components/Headline', module ).add( 'Sizes', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Sizes</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-full">
						<Headline className="-my2">H1 Headline</Headline>
					</div>
					<div className="col -span-full">
						<Headline className="-my2" type="h2">H2 Headline</Headline>
					</div>
					<div className="col -span-full">
						<Headline className="-my2" type="h3">H3 Headline</Headline>
					</div>
					<div className="col -span-full">
						<Headline className="-my2" type="h4">H4 Headline</Headline>
					</div>
					<div className="col -span-full">
						<Headline className="-my2" type="h5">H5 Headline</Headline>
					</div>
					<div className="col -span-full">
						<Headline className="-my2" type="h6">H6 Headline</Headline>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Headline', module ).add( 'Highlight', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Highlight</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-full">
						<Headline type="h2" className="-style-highlight">H1 Headline</Headline>
					</div>
				</div>
			</div>
		</section>
	</div>
) );
