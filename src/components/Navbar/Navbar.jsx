import "./Navbar.scss"
import PropTypes from "prop-types";

export const Navbar = ({ sections, active }) => {
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className={`navbar__item ${active === section.id ? "active" : ""}`}
                    onClick={() => scrollToSection(section.ref)}
                >
                    {section.id === "home" ? "Strona Główna" :
                        section.id === "projects" ? "Projekty" :
                            section.id === "skills" ? "Umiejętności" : "Kontakt"}
                </button>
            ))}
        </div>
    );
};

Navbar.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            ref: PropTypes.shape({ current: PropTypes.any })
        })
    ).isRequired,
    active: PropTypes.string.isRequired,
};