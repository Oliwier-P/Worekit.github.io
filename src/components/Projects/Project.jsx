import "./Project.scss"
import {Icon} from "../../assets/Icon.jsx";
import PropTypes from "prop-types";

export const Project = ({ name, description, link, image, technologies }) => {
    return <div className="project">
        <div className="project__header">
            <div className="name">{name}</div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="github"><Icon name="github" /></div>
            </a>
        </div>

        <div className="project-content">
            <div className="project-content__description">{description}</div>
            <div className="project-content__preview">
                <img src={image} alt="project image" />
            </div>
        </div>

        <div className="project-technologies">
            {technologies.map((item, index) => (
                <div className="project-technologies__item" key={index}>{item}</div>
            ))}
        </div>
    </div>
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string)
};