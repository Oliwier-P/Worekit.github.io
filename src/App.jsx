import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

export default function App() {

    return (
    <>
      <div className="app-container">
          <Navbar />
          <Home />
          <Projects />
          <Skills />
          <Contact />
      </div>
    </>
  );
}
