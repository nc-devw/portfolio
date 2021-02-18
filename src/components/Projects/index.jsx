import React from 'react';
import { Button } from '../../styles/styled_global';
import { StyledProjects } from '../../styles/styled_projects';
import strings from './language';
import ecommercePic from '../../assets/img/ecommerce.jpg';
import quizmePic from '../../assets/img/quizmeapp.png';
const Projects = ({ language }) => {
	return (
		<StyledProjects id='projects'>
			<h3>{strings[language].title}</h3>
			<div className='project'>
				<div className='project__info'>
					<h4 className='project__title'>E-commerce</h4>
					<div className='project__detail'>
						<span>{strings[language].detail}</span>
					</div>
					<div className='project__buttons'>
						<Button>
							<a href='https://github.com/nc-devw/GamingHub'>
								{strings[language].viewCode}
							</a>
						</Button>
						<Button>
							<a href='https://ecommerce-ft07-g07.vercel.app'>
								{strings[language].viewDemo}
							</a>
						</Button>
					</div>
				</div>
				<div className='project__img'>
					<img src={ecommercePic} alt='Pic Ecommerce' />
				</div>
			</div>
			<div className='project'>
				<div className='project__info'>
					<h4 className='project__title'>Quizme App</h4>
					<div className='project__detail'>
						<span>{strings[language].detail2}</span>
					</div>
					<div className='project__buttons'>
						<Button>
							<a href='https://github.com/nc-devw/Quizme-app'>
								{strings[language].viewCode}
							</a>
						</Button>
						<Button>
							<a href='https://www.youtube.com/watch?v=X4CvCqODvZ4&feature=youtu.be'>
								{strings[language].viewDemo}
							</a>
						</Button>
					</div>
				</div>
				<div className='project__img quizme'>
					<img src={quizmePic} alt='Pic Quizme App' />
				</div>
			</div>
		</StyledProjects>
	);
};

export default Projects;
