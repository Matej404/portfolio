import "./Style.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";

export default function Main() {

    return(
        <div>
            <Navbar />
            <div id="home" />
            <Home />
            <div id="about" />
            <About />
            <div id="projects" />
            <Projects />
        </div>
    )
}