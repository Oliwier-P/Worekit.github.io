import "./Home.scss"
import PropTypes from "prop-types";

export const Home = ({ innerRef }) => {
    return <div ref={innerRef} className="home">
        <div className="home__header">
            <div className="home__name">
                <span>Oliwier Paśko</span>
                <span className="home__name-highlight">Full-Stack Developer</span>
            </div>
            <div className="home__image"></div>
        </div>

        <div className="home__title">O mnie</div>
        <div className="home__description">
            Junior Full-Stack Developer pracujący z React, TypeScript i Node.js.
            Od 6 lat rozwijam się w programowaniu, od 3 lat tworzę projekty full-stack.
            Skupiam się na czystym kodzie i budowie nowoczesnych aplikacji webowych w czasie rzeczywistym.
        </div>
    </div>
}

Home.propTypes = {
    innerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};