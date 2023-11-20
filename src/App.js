import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';

const BigGreenHeading = styled.h1`
	color: green;
	font-size: 96px;
`;

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Articles = lazy(() => import('./pages/Articles'));
const App = () => {
	return (
			<>
				<BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/articles">Articles</Link>
					</li>
				</ul>
				<Suspense fallback={<p>Loading...</p>}>
					<Switch>
						<Route path="/" exact>
							<Home/>
						</Route>
						<Route path="/about">
							<About/>
						</Route>
						<Route path="/articles">
							<Articles/>
						</Route>
					</Switch>
				</Suspense>
		</>
	);
}

export default App;
