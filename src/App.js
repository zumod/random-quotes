import React, { useState } from 'react';
import './sass/App.scss';

import Quote from './component/Quote';

const App = () => {
	const images = [
		'art',
		'imagination',
		'inspire',
		'mobiledev',
		'omega',
		'opinions',
		'people',
		'socials',
		'tea',
		'time'
	];
	const img = images[Math.floor(Math.random() * images.length)];
	const [ randomImage, setRandomImage ] = useState(img);
	return (
		<div className="App">
			<div className="quote-container">
				<h1 className="title">Quote of the day</h1>
				<Quote />
			</div>
			<div className="image-container">
				<img alt="main" src={require(`./assets/imgs/${randomImage}.svg`)} />
			</div>
		</div>
	);
};

export default App;
