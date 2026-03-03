import "./Project.scss"

export const Project = () => {
    return <div className="project">
        <div className="project__header">
            <div className="name">Party Games</div>
            <div className="github"></div>
        </div>

        <div className="project-content">
            <div className="project-content__description">Aplikacja robiona w grupie dwuosobowej. Aplikacja do
                rozgrywania mini-gier przez wideorozmowę. W trakcie tworzenia.
            </div>
            <div className="project-content__preview"></div>
        </div>

        <div className="project-technologies">
            <div className="project-technologies__item">React</div>
            <div className="project-technologies__item">Node.js</div>
        </div>
    </div>
}