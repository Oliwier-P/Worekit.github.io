import "./Navbar.scss"

export const Navbar = () => {
    return <div className="navbar">
        <button className="navbar__item">Strona Główna</button>
        <button className="navbar__item">Projekty</button>
        <button className="navbar__item">Umiejętności</button>
        <button className="navbar__item">Kontakt</button>
    </div>
}