import "./Skills.scss"
import {SkillsItem} from "./SkillsItem.jsx";

const skillsArray = [
    { name: "React" },
    { name: "SASS" },
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "SQL" },
    { name: "Postgres" },
    { name: "SQLite" },
    { name: "Node.js" },
    { name: "Git" },
]

export const Skills = () => {
    return <div className="skills">
        <div className="skills__header">Umiejętności</div>

        <div className="skills-list">
            {skillsArray.map((skill, index) => <SkillsItem key={index} name={skill.name} />)}
        </div>
    </div>
}