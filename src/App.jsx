import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./components/Home/Home.jsx";

export default function App() {

    return (
    <>
      <div className="app-container">
          <Navbar />
          <Home />
      </div>
    </>
  );
}
