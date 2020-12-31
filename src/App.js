import React from 'react'

/* Components */
import About from './components/About';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'
import Projects from './components/Projects';

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<HomePage />
				<Projects />
				<About />
			</div>
		</div>
	);
}

export default App;
