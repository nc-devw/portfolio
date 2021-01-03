import React from 'react'
import { Button } from '../../styles/styled_global'
import { StyledProjects } from '../../styles/styled_projects'
import strings from './language'
import ecommercePic from '../../assets/img/ecommerce.jpg'
import webPotterPic from '../../assets/img/webpotter.jpg'
const Projects = ({ language }) => {
	return (
		<StyledProjects id="projects">
			<h3>{strings[language].title}</h3>
			<div className="project">
				<div className="project__info">
					<h4 className="project__title">E-commerce</h4>
					<div className="project__detail">
						<span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, pariatur ullam a natus dolor excepturi eligendi rerum, perspiciatis ipsum nulla tenetur numquam? Laudantium laboriosam mollitia fugiat, dignissimos veniam culpa deleniti!
					Eveniet adipisci laudantium delectus harum</span>
					</div>
					<div className="project__buttons">
						<Button color={'warning'}>In progress...</Button>
						{/* <Button>View Code</Button>
						<Button>Open Project</Button> */}
					</div>
				</div>
				<div className="project__img">
					<img src={ecommercePic} alt="Pic Ecommerce" />
				</div>
			</div>
			<div className="project">
				<div className="project__info">
					<h4 className="project__title">Web Potter</h4>
					<div className="project__detail">
						<span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, pariatur ullam a natus dolor excepturi eligendi rerum, perspiciatis ipsum nulla tenetur numquam? Laudantium laboriosam mollitia fugiat, dignissimos veniam culpa deleniti!
					Eveniet adipisci laudantium </span>
					</div>
					<div className="project__buttons">
						<Button color={'warning'}>In progress...</Button>
						{/* <Button>View Code</Button>
						<Button>Open Project</Button> */}
					</div>
				</div>
				<div className="project__img">
					<img src={webPotterPic} alt="Pic Ecommerce" />
				</div>
			</div>
		</StyledProjects>
	)
}

export default Projects
