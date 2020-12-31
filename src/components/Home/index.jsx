import React from 'react'

/* Styles */
import './home.css'

/* Utils */
import profile from '../../assets/img/developer.jpeg';
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const Home = () => {
	return (
		<section className="home" id="home">
			<div className="home__pic">
				<img src={profile} alt="ilustration profile pic" />
			</div>
			<div className="home__info">
				<p>I'm web developer</p>
				<h3>Ignacio Contreras</h3>
				<ul>
					<li><a href="https://github.com/nc-devw" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
					<li><a href="https://www.linkedin.com/in/ignacio-contreras/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
					<li><a href="https://wa.me/+542226502490" target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></a></li>
				</ul>
			</div>
		</section>
	)
}

export default Home
