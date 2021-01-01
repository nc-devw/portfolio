import React from 'react'

/* Utils */
import { GrReactjs, GrNode, GrMysql } from 'react-icons/gr'
import { IoLogoJavascript } from 'react-icons/io'
import { SiRedux, SiPostgresql, SiBootstrap, SiPhp, SiLaravel } from 'react-icons/si'

/* Styles */
import './about.css'

const About = () => {
	return (
		<section className="about" id="about">
			<h3 className="about__title">My skills</h3>
				<div className="about__skills">
					<span><GrReactjs /></span>
					<span><IoLogoJavascript /></span>
					<span><GrNode /></span>
					<span><SiRedux/></span>
					<span><SiPostgresql /></span>
					<span><GrMysql /></span>
					<span><SiBootstrap/></span>
					<span><SiPhp/></span>
					<span><SiLaravel/></span>
				</div>
		</section>
	)
}

export default About