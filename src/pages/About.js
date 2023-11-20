import React, { lazy, Suspense } from 'react';

const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));
export const About = () => {
	return (
			<>
				<h1>About</h1>
				<Suspense fallback={<p>Loading Components...</p>}>
					<One/>
					<Two/>
					<Three/>
				</Suspense>
			</>
	);
}
