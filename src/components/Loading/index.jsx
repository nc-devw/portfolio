import React, { useEffect, useState } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AiOutlineSmile } from 'react-icons/ai';
import { StyledLoading } from '../../styles/styled_global'
import strings from './language'
const Loading = ({ handleLoading, theme, language }) => {

	const [counter, setCounter] = useState(0.00);
	const [index, setIndex] = useState(-1);


	useEffect(() => {
		counter < 1 && setTimeout(() => setCounter(c => c + 0.25), 750);
		setIndex(i => i + 1);
	}, [counter]);

	if (counter.toFixed(1) >= 1) {
		setTimeout(() => handleLoading(), 1500)
	}

	return (
		<StyledLoading id="loading" theme={theme}>
			<CircularProgressbar
				value={counter.toFixed(2)}
				maxValue={1}
				text={`${(counter.toFixed(2)) * 100}%`}
				styles={buildStyles({
					// Colors
					pathColor: 'var(--clr-primary)',
					textColor: 'currentColor'
				})}
			/>
			<span>{strings[language].text[index]}{index === 4 && (<div className="welcome"><AiOutlineSmile /></div>)}</span>
		</StyledLoading>
	)
}

export default Loading
