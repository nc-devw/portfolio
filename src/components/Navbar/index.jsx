import React from 'react'
import { MdLanguage } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { StyledNavbar } from '../../styles/styled_navbar'
import { Dropdown } from '../../styles/styled_global'
import strings from './language'

const Navbar = ({ language, setLanguage, theme, setTheme }) => {

	const handleLanguage = (ev) => {
		if (ev.target.id) {
			setLanguage(ev.target.id);
			localStorage.setItem('language', ev.target.id)
		}
	}

	const handleTheme = () => {
		setTheme(prev => prev === 'dark' ? 'light' : 'dark')
	}

	const handleLink = (ev) => {
		document.getElementById(ev.target.dataset.value).scrollIntoView(false);
		if (ev.target.dataset.value === 'about') {
			window.scrollTo({
				top: 800,
				left: 100,
				behavior: 'smooth'
			})
		}
	}

	return (
		<StyledNavbar className="navbar">
			<div className="navbar__logo">
				<h1>{'<Ignacio Contreras />'}</h1>
			</div>
			<ul className="navbar__links">
				<li><button data-value="home" onClick={handleLink}>{strings[language].home}</button></li>
				<li><button data-value="about" onClick={handleLink}>{strings[language].skills}</button></li>
				<li><button data-value="projects" onClick={handleLink}>{strings[language].projects}</button></li>
				<li><button data-value="contact" onClick={handleLink}>{strings[language].contact}</button></li>
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
