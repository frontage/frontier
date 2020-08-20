
import Head from 'next/head'
import { List } from '@frontage/frontier-ui';

export default function Home() {
	return (
		<div>
			<h1>Frontier.</h1>
			<List>
				<List.Item>What is Frontier?</List.Item>
			</List>
		</div>
	);
}
