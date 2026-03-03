import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import {useEffect, useMemo, useRef, useState} from "react";

export default function App() {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const [active, setActive] = useState("home");

    const sections = useMemo(
        () => [
            { id: "home", ref: homeRef },
            { id: "projects", ref: projectsRef },
            { id: "skills", ref: skillsRef },
            { id: "contact", ref: contactRef },
        ],
        [homeRef, projectsRef, skillsRef, contactRef]
    );


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => {
            if (section.ref.current) {
                section.ref.current.id = section.id;
                observer.observe(section.ref.current);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
      <div className="app-container">
          <Navbar sections={sections} active={active} />
          <Home innerRef={homeRef} />
          <Projects innerRef={projectsRef} />
          <Skills innerRef={skillsRef} />
          <Contact innerRef={contactRef} />
      </div>
  );
}
