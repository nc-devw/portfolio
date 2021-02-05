import React from "react";
import { Button } from "../../styles/styled_global";
import { StyledProjects } from "../../styles/styled_projects";
import strings from "./language";
import ecommercePic from "../../assets/img/ecommerce.jpg";
const Projects = ({ language }) => {
	return (
		<StyledProjects id="projects">
			<h3>{strings[language].title}</h3>
			<div className="project">
				<div className="project__info">
					<h4 className="project__title">E-commerce</h4>
					<div className="project__detail">
						<span>{strings[language].detail}</span>
					</div>
					<div className="project__buttons">
						<Button>{strings[language].viewCode}</Button>
						<Button><a href="https://ecommerce-ft07-g07.vercel.app/">{strings[language].viewDemo}</a></Button>
					</div>
				</div>
				<div className="project__img">
					<img src={ecommercePic} alt="Pic Ecommerce" />
				</div>
			</div>
			<div className="project">
				<div className="project__info">
					<h4 className="project__title">Quizme App</h4>
					<div className="project__detail">
						<span>{strings[language].detail2}</span>
					</div>
					<div className="project__buttons">
						<Button color='warning'>{strings[language].inProcess}</Button>
					</div>
				</div>
				<div className="project__img">
					<img src={ecommercePic} alt="Pic Ecommerce" />
				</div>
			</div>
		</StyledProjects>
	);
};

export default Projects;
