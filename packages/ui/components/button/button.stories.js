
//	Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';


//	App
import Button from './button';


//
//	Frontier / UI / Components / Button
//


storiesOf( 'Components/Button', module ).add( 'Default', () => (
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
						<Button>Default</Button>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Button', module ).add( 'Icons', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Icons</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Button icon="arrow-right">Icon after</Button>
					</div>
					<div className="col">
						<Button icon="arrow-left" iconPos="before">Icon before</Button>
					</div>
					<div className="col">
						<Button icon="arrow-right" />
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Button', module ).add( 'Styles', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Styles</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Button className="-style-none">None</Button>
					</div>
					<div className="col">
						<Button className="-style-muted">Muted</Button>
					</div>
					<div className="col">
						<Button className="-style-secondary">Secondary</Button>
					</div>
					<div className="col">
						<Button className="-style-secondary-muted">Secondary muted</Button>
					</div>
					<div className="col">
						<Button className="-style-white">white</Button>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Button', module ).add( 'Sizes', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Sizes</h1>
					</div>
				</div>
				<div className="row -va-center">
					<div className="col">
						<Button size="s">Small</Button>
					</div>
					<div className="col">
						<Button>Default</Button>
					</div>
					<div className="col">
						<Button size="m">Medium</Button>
					</div>
					<div className="col">
						<Button size="l">Large</Button>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Button', module ).add( 'Formats', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Formats</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="f6">Format - icon</h2>
						<Button.Group className="-va-center">
							<Button icon="cross" size="s" className="-mr1" />
							<Button icon="cross" className="-mr1" />
							<Button icon="cross" size="m" className="-mr1" />
							<Button icon="cross" size="l" className="-mr1" />
						</Button.Group>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="f6">Format - full</h2>
						<Button format="full">Test</Button>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Button', module ).add( 'States', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">States</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Button disabled={ true }>Disabled</Button>
					</div>
				</div>
			</div>
		</section>
	</div>
) );

storiesOf( 'Components/Button', module ).add( 'Group', () => (
	<div className="view">
		<section>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="f5 -my3">Group</h1>
					</div>
				</div>
				<div className="row -my2">
					<div className="col">
						<h2 className="f6">Default</h2>
						<Button.Group>
							<Button>Default 1</Button>
							<Button>Default 2</Button>
						</Button.Group>
					</div>
				</div>
				<div className="row -mb2">
					<div className="col">
						<h2 className="f6">Format - vertical</h2>
						<Button.Group format="vertical">
							<Button>Vertical 1</Button>
							<Button>Vertical 2</Button>
						</Button.Group>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="f6">Format - Full</h2>
						<Button.Group format="full">
							<Button>Full 1</Button>
							<Button>Full 2</Button>
						</Button.Group>
					</div>
				</div>
			</div>
		</section>
	</div>
) );