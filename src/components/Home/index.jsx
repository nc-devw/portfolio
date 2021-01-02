import React from 'react'

/* Styles */
import { StyledHome } from '../../styles/styled_home'

/* Utils */
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const Home = () => {
	return (
		<StyledHome className="home" id="home">
			<div className="home__info">
				<h3>I'm Ignacio</h3>
				<span>Full Stack Web Developer</span>
				<p>Hello, I am a developer and student. I Love programming a lot of things such as: websites, bots, applications and more. I am a self taught developer and still learning new technologies every day, mostly focusing on React, Node and SQL.</p>
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
