
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Avatar from './avatar';


//
//	Frontier / UI / Components / Avatar
//


storiesOf( 'Components/Avatar', module ).add( 'Default', () => (
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
						<Avatar avatarDefault="FR" />
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Avatar', module ).add( 'Image', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Image</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Avatar image={{ src: 'https://picsum.photos/300', alt: 'Placeholder photo' }} avatarDefault="FR" size="xl" />
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Avatar', module ).add( 'Sizes', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Sizes</h1>
					</div>
				</div>
				<div className="row -va-center">
					<div className="col -va-center">
						<Avatar className="-mr1" avatarDefault="FR" size="s" />
						<p>S</p>
					</div>
					<div className="col -va-center">
						<Avatar className="-mr1" avatarDefault="FR" />
						<p>Default</p>
					</div>
					<div className="col -va-center">
						<Avatar className="-mr1" avatarDefault="FR" size="m" />
						<p>M</p>
					</div>
					<div className="col -va-center">
						<Avatar className="-mr1" avatarDefault="FR" size="l" />
						<p>L</p>
					</div>
					<div className="col -va-center">
						<Avatar className="-mr1" avatarDefault="FR" size="xl" />
						<p>XL</p>
					</div>
					<div className="col -va-center">
						<Avatar className="-mr1" avatarDefault="FR" size="xxl" />
						<p>XXL</p>
					</div>
				</div>
			</div>
		</section>
	</div>
) );
