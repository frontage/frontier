
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Tag from './tag';


//
//	Frontier / UI / Components / Tag
//


storiesOf( 'Components/Tag', module ).add( 'Default', () => (
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
						<Tag>Tag</Tag>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Tag', module ).add( 'Format Outline', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Format Outline</h1>
					</div>
				</div>
				<div className="row">
					<div className="col -span-quarter">
						<Tag format="outline">Tag</Tag>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Tag', module ).add( 'Sizes', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Sizes</h1>
					</div>
				</div>
				<div className="row -va-center">
					<div className="col -va-center -mb3">
						<Tag className="-mr1" size="s">Tag</Tag>
						<p>S</p>
					</div>
					<div className="col -va-center -mb3">
						<Tag className="-mr1">Tag</Tag>
						<p>Default</p>
					</div>
					<div className="col -va-center -mb3">
						<Tag className="-mr1" size="m">Tag</Tag>
						<p>M</p>
					</div>
					<div className="col -va-center -mb3">
						<Tag className="-mr1" size="l">Tag</Tag>
						<p>L</p>
					</div>
				</div>
			</div>
		</section>
	</div>
) );