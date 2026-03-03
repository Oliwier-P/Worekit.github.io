import "./Skills.scss"
import {SkillsItem} from "./SkillsItem.jsx";
import PropTypes from "prop-types";

const skillsArray = [
    { name: "React", logo: "react" },
    { name: "SASS", logo: "sass" },
    { name: "Javascript", logo: "javascript" },
    { name: "Typescript", logo: "typescript" },
    { name: "Postgres", logo: "postgres" },
    { name: "SQLite", logo: "sqlite" },
    { name: "Node.js", logo: "nodejs" },
    { name: "Git", logo: "git" },
    { name: "GitHub", logo: "github" },
    { name: "Figma", logo: "figma" },
    { name: "Docker", logo: "docker" },
]

export const Skills = ({ innerRef }) => {
    return <div ref={innerRef}  className="skills">
        <div className="skills__header">Umiejętności</div>

        <div className="skills-list">
            {skillsArray.map((skill, index) => <SkillsItem key={index} name={skill.name} logo={skill.logo} />)}
        </div>
    </div>
}

Skills.propTypes = {
    innerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};