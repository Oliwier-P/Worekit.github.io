import "./Contact.scss"
import {Icon} from "../../assets/Icon.jsx";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

export const Contact = ({ innerRef }) => {
    const [visible, setVisible] = useState(false);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setVisible(true);
        } catch (err) {
            console.error("Nie udało się skopiować: ", err);
        }
    };

    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => setVisible(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [visible]);

    return <div ref={innerRef}  className="contact">
        <div className="contact-item" onClick={() => copyToClipboard("oliwierpasko25@gmail.com")}>
            <div className="contact-item__logo"><Icon name="email"/></div>
            <div className="contact-item__text">Email</div>
            <div className="contact-item__data">oliwierpasko25@gmail.com</div>
        </div>

        <div className="contact-item" onClick={() => copyToClipboard("732253341")}>
            <div className="contact-item__logo"><Icon name="phone" /></div>
            <div className="contact-item__text">Telefon</div>
            <div className="contact-item__data">732 253 341</div>
        </div>

        <a className="link" href="https://github.com/Oliwier-P" target="_blank" rel="noopener noreferrer">
            <div className="contact-item">
                <div className="contact-item__logo"><Icon name="github"/></div>
                <div className="contact-item__text">GitHub</div>
                <div className="contact-item__data">Oliwier-P</div>
            </div>
        </a>

        {visible && <div className="clipboard-toast">Skopiowano do schowka!</div>}
    </div>
}

Contact.propTypes = {
    innerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};