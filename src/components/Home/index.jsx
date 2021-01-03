import React from 'react'

/* Styles */
import { StyledHome } from '../../styles/styled_home'

/* Utils */
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

import strings from './language'

const Home = ({ language }) => {
	return (
		<StyledHome id="home">
			<div className="home__info">
				<h3>{strings[language].title}</h3>
				<h4>Full Stack Web Developer</h4>
				<p>{strings[language].description}</p>
				<ul>
					<li><a href="https://github.com/nc-devw" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
					<li><a href="https://www.linkedin.com/in/ignacio-contreras/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
					<li><a href="https://wa.me/+542226502490" target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></a></li>
				</ul>
			</div>
		</StyledHome>
	)
}

export default Home
