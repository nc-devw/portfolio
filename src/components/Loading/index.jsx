import React, { useEffect, useState } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AiOutlineSmile } from 'react-icons/ai';

const Loading = ({ handleLoading }) => {

	const [counter, setCounter] = useState(0.00);
	const [index, setIndex] = useState(-1);

	const color = '#3e98c7'
	const text = ['Preparing modules', 'Starting app', 'Reviewing projects', 'Drinking Coffee', 'Welcome'];

	useEffect(() => {
		counter < 1 && setTimeout(() => setCounter(c => c + 0.25), 750);
		setIndex(i => i + 1);
	}, [counter]);

	if (counter.toFixed(1) >= 1) {
		setTimeout(() => handleLoading(), 1500)
	}

	return (
		<div className="loading">
			<CircularProgressbar
				value={counter.toFixed(2)}
				maxValue={1}
				text={`${(counter.toFixed(2)) * 100}%`}
				styles={buildStyles({
					// Colors
					pathColor: color,
					textColor: 'var(--clr-white)',
					backgroundColor: 'red',
				})}
			/>
			<span>{text.length && text[index]}{index === 4 && (<div className="welcome"><AiOutlineSmile /></div>)}</span>
		</div>
	)
}

export default Loading
