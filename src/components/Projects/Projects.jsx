import "./Projects.scss"
import {Project} from "./Project.jsx";
import PropTypes from "prop-types";

export const Projects = ({ innerRef }) => {
    const projects = [
        {
            name: "Party Games",
            description: "Wieloosobowa aplikacja webowa przeznaczona dla 4–8 graczy, oferująca zestaw dynamicznych, rywalizacyjnych minigier.",
            link: "https://github.com/ProfVHS/party-games",
            image: "/partygames.png",
            technologies: ["React", "Typescript", "SCSS", "Node.js", "Express", "Socket.io"]
        },
        {
            name: "Weather App",
            description: "Aplikacja do sprawdzania pogody na podstawie twojej lokalizacji lub wybranego miasta.",
            link: "https://github.com/Oliwier-P/Weather-app",
            image: "/weather.png",
            technologies: ["React", "Typescript", "SCSS", "API"]
        },
        {
            name: "Tic Tac Toe",
            description: "Wieloosobowa gra w kółko i krzyżyk w czasie rzeczywistym z dwoma trybami gry: AI oraz online.",
            link: "https://github.com/Oliwier-P/Tic-Tac-Toe",
            image: "/tictactoe.png",
            technologies: ["React", "Typescript", "SCSS", "Node.js", "Express",  "Socket.io"]
        }
    ];

    return <div ref={innerRef}  className="projects">
        {projects.map((project, index) => (
            <Project
                key={index}
                name={project.name}
                description={project.description}
                link={project.link}
                image={project.image}
                technologies={project.technologies}
            />
        ))}
    </div>
}

Projects.propTypes = {
    innerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};