import React, { useEffect, useState } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Loading = ({ handleLoading }) => {

	const [counter, setCounter] = useState(0.00);
	const [index, setIndex] = useState(-1);

	const color= '#3e98c7'
	const text= ['Preparando modulos', 'Iniciando app', 'Revisando proyectos', 'Bebiendo cafe', 'Bienvenido :D'];

	useEffect(() => {
		counter < 1 && setTimeout(() => setCounter(c => c + 0.25), 1000);
		setIndex(i => i + 1);
	  }, [counter]);

	  if(counter.toFixed(1) >= 1){
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
					textColor: '#1B1A1F',
					trailColor: '#d6d6d6',
					backgroundColor: 'red',
				  })}
			/>
			<span>{text.length && text[index]}</span>
		</div>
	)
}

export default Loading
