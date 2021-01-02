import React from 'react'
import { MdLanguage } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'
import { StyledNavbar } from '../../styles/styled_navbar'

const Navbar = () => {
	return (
		<StyledNavbar className="navbar">
			<div className="navbar__logo">
				<h1>{'<Ignacio Contreras />'}</h1>
			</div>
			<ul className="navbar__links">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">Skills</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<ul className="navbar__links">
				<li><MdLanguage /></li>
				<li><BsMoon /></li>
			</ul>
		</StyledNavbar>
	)
}

export default Navbar
