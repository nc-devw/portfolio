import React from 'react'
import { StyledProjects } from '../../styles/styled_projects'
import strings from './language'
const Projects = ({ language }) => {
	return (
		<StyledProjects id="projects">
			<h3>{strings[language].title}</h3>
			<div className="project">
				<h4 className="project__title">E-commerce</h4>
				<div className="project__detail">
					<span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, pariatur ullam a natus dolor excepturi eligendi rerum, perspiciatis ipsum nulla tenetur numquam? Laudantium laboriosam mollitia fugiat, dignissimos veniam culpa deleniti!
					Eveniet adipisci laudantium delectus harum</span>
				</div>
				<div className="project__buttons">
					<button>View Code</button>
					<button>Open Project</button>
				</div>
			</div>
			<div className="project">
				<h4 className="project__title">Web Potter</h4>
				<div className="project__detail">
					<span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, pariatur ullam a natus dolor excepturi eligendi rerum, perspiciatis ipsum nulla tenetur numquam? Laudantium laboriosam mollitia fugiat, dignissimos veniam culpa deleniti!
					Eveniet adipisci laudantium </span>
				</div>
				<div className="project__buttons">
					<button>View Code</button>
					<button>Open Project</button>
				</div>
			</div>
			<div className="project">
				<h4 className="project__title">Potter Api</h4>
				<div className="project__detail">
					<span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, pariatur ullam a natus dolor excepturi eligendi rerum, perspiciatis ipsum nulla tenetur numquam? Laudantium laboriosam mollitia fugiat, dignissimos veniam culpa deleniti!
					Eveniet adipisci laudantium delectus harum neque</span>
				</div>
				<div className="project__buttons">
					<button>View Code</button>
				</div>
			</div>
		</StyledProjects>
	)
}

export default Projects
