import React from 'react'
import { MdLanguage } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'
import { StyledNavbar } from '../../styles/styled_navbar'
import { Dropdown } from '../../styles/styled_global'
import strings from './language'

const Navbar = ({ language, setLanguage }) => {

	const handleLanguage = (ev) => {
		setLanguage(ev.target.id);
		localStorage.setItem('language', ev.target.id)
	}
	const handleTheme = () => {

	}

	console.log(language);

	return (
		<StyledNavbar className="navbar">
			<div className="navbar__logo">
				<h1>{'<Ignacio Contreras />'}</h1>
			</div>
			<ul className="navbar__links">
				<li><a href="#home">{strings[language].home}</a></li>
				<li><a href="#about">{strings[language].skills}</a></li>
				<li><a href="#projects">{strings[language].projects}</a></li>
				<li><a href="#contact">{strings[language].contact}</a></li>
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
						<BsMoon />
						<span>{strings[language].theme}</span>
					</button>
				</li>
			</ul>
		</StyledNavbar>
	)
}

export default Navbar
