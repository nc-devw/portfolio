import React, { useState } from 'react'

/* Components */
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Loading from './components/Loading';
import Navbar from './components/Navbar'
import Projects from './components/Projects';

function App() {
	const [loading, setLoading] = useState(true)

	const handleLoading = () => {
		setLoading(false);
	}
	if (loading)
		return <Loading handleLoading={handleLoading}/>

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
