import React from 'react'

/* Utils */
import { GrReactjs, GrNode, GrMysql } from 'react-icons/gr'
import { IoLogoJavascript } from 'react-icons/io'
import { SiRedux, SiPostgresql, SiBootstrap, SiPhp, SiLaravel } from 'react-icons/si'

/* Styles */
import { StyledAbout } from '../../styles/styled_about'

const About = () => {
	return (
		<StyledAbout id="about">
			<h3>Skills</h3>
			<div className="about__skills">
				<span title="React JS" id="react"><GrReactjs /></span>
				<span title="Javascript" id="js"><IoLogoJavascript /></span>
				<span title="Node JS" id="node"><GrNode /></span>
				<span title="Redux" id="redux"><SiRedux /></span>
				<span title="Postgresql" id="postgresql"><SiPostgresql /></span>
				<span title="MariaDB" id="mariadb"><GrMysql /></span>
				<span title="Bootstrap" id="bootstrap"><SiBootstrap /></span>
				<span title="Php" id="php"><SiPhp /></span>
				<span title="Laravel" id="laravel"><SiLaravel /></span>
			</div>
		</StyledAbout>
	)
}

export default About
