import "./SkillsItem.scss"
import PropTypes from "prop-types";
import {Icon} from "../../assets/Icon.jsx";

export const SkillsItem = ({ name, logo }) => {
    return <div className="skills-list__item">
        <div className="logo"><Icon name={logo} /></div>
        <div className="name">{name}</div>
    </div>
}

SkillsItem.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
};