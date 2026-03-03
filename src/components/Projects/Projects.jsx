import "./Projects.scss"
import {Project} from "./Project.jsx";
import PropTypes from "prop-types";

export const Projects = ({ innerRef }) => {
    return <div ref={innerRef}  className="projects">
        <Project />
        <Project />
        <Project />
        <Project />
    </div>
}

Projects.propTypes = {
    innerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};