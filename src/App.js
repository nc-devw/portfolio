import React from 'react'

/* Components */
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Projects from './components/Projects';

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<Home />
				<Projects />
				<About />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
