import React from 'react'
import { MdLanguage } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { StyledNavbar } from '../../styles/styled_navbar'
import { Dropdown } from '../../styles/styled_global'
import strings from './language'
import { Link } from 'react-scroll'

const Navbar = ({ language, setLanguage, theme, setTheme }) => {

	const handleLanguage = (ev) => {
		if (ev.target.id) {
			setLanguage(ev.target.id);
			localStorage.setItem('language', ev.target.id)
		}
	}

	const handleTheme = () => {
		localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
		setTheme(prev => prev === 'dark' ? 'light' : 'dark')
	}

	return (
		<StyledNavbar className="navbar">
			<div className="navbar__logo">
				<Link to="home" smooth={true} offset={-1000}>{'<Ignacio Contreras/>'}</Link>
			</div>
			<ul className="navbar__links">
				<li><Link to="about" smooth={true} offset={-175}>{strings[language].skills}</Link></li>
				<li><Link to="projects" smooth={true} offset={-175}>{strings[language].projects}</Link></li>
				<li><Link to="contact" smooth={true} offset={-180}>{strings[language].contact}</Link></li>
			</ul>
			<ul className="navbar__options">
				<Dropdown>
					<MdLanguage />
					<span>{strings[language].language}</span>
					<ul onClick={handleLanguage}>
						<li>
							<a id="en" className={language === 'en' ? 'selected' : null}>
								{strings[language].language_en}
							</a> </li>
						<li>
							<a id="es" className={language === 'es' ? 'selected' : null}>
								{strings[language].language_es}
							</a>
						</li>
					</ul>
				</Dropdown>
				<li>
					<button onClick={handleTheme}>
						{theme === 'dark' ? <BsMoon /> : <FiSun />}
						<span>{strings[language].theme}</span>
					</button>
				</li>
			</ul>
		</StyledNavbar>
	)
}

export default Navbar
