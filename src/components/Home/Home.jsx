import "./Home.scss"
import PropTypes from "prop-types";

export const Home = ({ innerRef }) => {
    return <div ref={innerRef} className="home">
        <div className="home__header">
            <div className="home__name">
                <span>Oliwier Paśko</span>
                <span className="home__name-highlight">Developer</span>
            </div>
            <div className="home__image"></div>
        </div>

        <div className="home__title">O mnie</div>
        <div className="home__description">
            Loqweqsdvjska wqjdfnjk s qsjfv jqsdfjv qwerj qwadjb fvashj n asdjasd  asd fsadf asdfasdfasds
        </div>
    </div>
}

Home.propTypes = {
    innerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};