import React, { useState, useEffect } from 'react';
import '../sass/Quote.scss';

const Quote = () => {
	const [ quote, setQuote ] = useState(null);
	const [ fetching, isFetching ] = useState(false);

	useEffect(
		() => {
			async function fetchData() {
				const response = await fetch('https://api.quotable.io/random');
				const data = await response.json();
				setQuote(data.content);
			}
			fetchData();
		},
		[ fetching ]
	);

	return (
		<div className="Quote">
			<h1>{quote}</h1>
			<button onClick={() => isFetching(!fetching)} className="generate-btn">
				New quote
			</button>
		</div>
	);
};

export default Quote;
