import React from 'react';

/* Utils */
import { GrReactjs, GrNode, GrMysql } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import {
	SiRedux,
	SiPostgresql,
	SiBootstrap,
	SiPhp,
	SiLaravel,
} from 'react-icons/si';

/* Styles */
import { StyledAbout } from '../../styles/styled_about';
import { Flex } from '../../styles/styled_global';

const About = () => {
	return (
		<StyledAbout id='about'>
			<h3>Skills</h3>
			<div className='about__skills'>
				<Flex column={true} align='center'>
					<span title='React JS' id='react'>
						<GrReactjs />
					</span>
					<span>React JS</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='Javascript' id='js'>
						<IoLogoJavascript />
					</span>
					<span>Javascript</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='Node JS' id='node'>
						<GrNode />
					</span>
					<span>Node JS</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='Redux' id='redux'>
						<SiRedux />
					</span>
					<span>Redux</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='Postgresql' id='postgresql'>
						<SiPostgresql />
					</span>
					<span>Postgresql</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='MariaDB' id='mariadb'>
						<GrMysql />
					</span>
					<span>MariaDB</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='Bootstrap' id='bootstrap'>
						<SiBootstrap />
					</span>
					<span>Bootstrap</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='Php' id='php'>
						<SiPhp />
					</span>
					<span>PHP</span>
				</Flex>
				<Flex column={true} align='center'>
					<span title='Laravel' id='laravel'>
						<SiLaravel />
					</span>
					<span>Laravel</span>
				</Flex>
			</div>
		</StyledAbout>
	);
};

export default About;
