import "./Contact.scss"

export const Contact = () => {
    return <div className="contact">
        <div className="contact-item">
            <div className="contact-item__logo"></div>
            <div className="contact-item__text">Email</div>
            <div className="contact-item__data">oliwierpasko25@gmail.com</div>
        </div>

        <div className="contact-item">
            <div className="contact-item__logo"></div>
            <div className="contact-item__text">Telefon</div>
            <div className="contact-item__data">732 253 341</div>
        </div>

        <div className="contact-item">
            <div className="contact-item__logo"></div>
            <div className="contact-item__text">GitHub</div>
            <div className="contact-item__data">Oliwier-P</div>
        </div>
    </div>
}