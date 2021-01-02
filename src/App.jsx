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
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

	const handleLoading = () => {
		setLoading(false);
	}
	if (loading) return <Loading handleLoading={handleLoading} />


	return (
		<div className="app">
			<Navbar language={language} setLanguage={setLanguage} />
			<div className="container">
				<Home language={language} />
				<About language={language} />
				<Projects language={language} />
				<Contact language={language} />
			</div>
			<Footer language={language} />
		</div>
	);
}

export default App;
