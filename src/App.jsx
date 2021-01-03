import React, { useRef, useState } from 'react'

/* Components */
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Loading from './components/Loading';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import { ButtonTop, StyledGlobal } from './styles/styled_global';
import { darkTheme, lightTheme } from './styles/theme';
import { BsChevronUp } from 'react-icons/bs';
import { animateScroll } from 'react-scroll'

function App() {
	const [loading, setLoading] = useState(true)
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
	const scrollButton = useRef();
	window.onscroll = function () { scrollFunction() };
	const scrollDistance = 700;

	const handleLoading = () => {
		setLoading(false);
	}

	const scrollFunction = () => {
		if (scrollButton.current) {
			if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
				scrollButton.current.style.pointerEvents = 'auto';
				scrollButton.current.style.opacity = '100';
			} else {
				scrollButton.current.style.pointerEvents = 'none';
				scrollButton.current.style.opacity = '0';
			}
		}
	}
	const scrollToTop = () => {
		animateScroll.scrollToTop()
	}

	if (loading) return <Loading theme={theme} handleLoading={handleLoading} language={language} />

	return (
		<>
			<StyledGlobal theme={theme === 'light' ? lightTheme : darkTheme} />
			<Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
			<div className="container">
				<Home language={language} />
				<About />
				<Projects language={language} />
				<Contact language={language} />
			</div>
			<Footer language={language} />
			<ButtonTop ref={scrollButton} onClick={scrollToTop}>
				<BsChevronUp />
			</ButtonTop>
		</>
	);
}

export default App;
