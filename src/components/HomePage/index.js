import React from 'react'

/* Styles */
import './homePage.css'

/* Utils */
import profile from '../../assets/img/developer.jpeg';
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const HomePage = () => {
	return (
		<div className="homePage">
			<div className="homePage__pic">
				<img src={profile} />
			</div>
			<div className="homePage__info">
				<span>I'm web developer</span>
				<h3>Ignacio Contreras</h3>
				<ul>
					<li><a href="https://wa.me/+542226502490" target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></a></li>
					<li><a href="https://github.com/nc-devw" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
					<li><a href="https://www.linkedin.com/in/ignacio-contreras/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
				</ul>
			</div>
		</div>
	)
}

export default HomePage
