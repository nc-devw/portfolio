import React from 'react'

/* Utils */
import profile from '../../assets/img/perfil.png';
import { FaChessKnight } from 'react-icons/fa'
import { FaSwimmer } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/gr'

/* Styles */
import './about.css'

const About = () => {
	return (
		<div className="about">
			<h3 className="about__title">About me</h3>
			<div className="about__detail">
				<div className="about__pic">
					<img src={profile} />
				</div>
				<div className="about__info">
					<span>
						I live in Cañuelas, Buenos Aires, Argentina.
						I'm 24 years old. I am a student of Henry, I also have a rich experience in the area of ​​technology.
					</span>
				</div>
				<div className="about__skills">
					<span className="bg-react">ReactJS</span>
					<span className="bg-js">Javascript</span>
					<span className="bg-node">NodeJS</span>
					<span className="bg-redux">Redux</span>
					<span className="bg-express">Express</span>
					<span className="bg-sequelize">Sequelize</span>
					<span className="bg-postgres">Postgresql</span>
					<span className="bg-mysql">Mysql</span>
					<span className="bg-bootstrap">Bootstrap</span>
					<span className="bg-php">PHP</span>
					<span className="bg-laravel">Laravel</span>
				</div>
			</div>
			<h3 className="about__title">Hobbies</h3>
			<div className="about__hobbies">
				<div className="about__hobbie">
					<FaSwimmer />
					<span>Swimming</span>
				</div>
				<div className="about__hobbie">
					<FaChessKnight />
					<span>Chess</span>
				</div>
				<div className="about__hobbie">
					<GrPersonalComputer />
					<span>Try Coding</span>
				</div>
			</div>
		</div>
	)
}

export default About
