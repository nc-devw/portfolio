import React from 'react'
import './navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<h1>{'<Ignacio Contreras />'}</h1>
			</div>
			<ul className="navbar__links">
				<li><a href="#home">Home</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#about">About me</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navbar
