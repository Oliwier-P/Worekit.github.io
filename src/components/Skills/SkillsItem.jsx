import "./SkillsItem.scss"
import PropTypes from "prop-types";

export const SkillsItem = ({ name }) => {
    return <div className="skills-list__item">
        <div className="logo"></div>
        <div className="name">{name}</div>
    </div>
}

SkillsItem.propTypes = {
    name: PropTypes.string.isRequired,
};