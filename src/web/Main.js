import "./Style.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";

export default function Main() {

    return(
        <div>
            <Navbar />
            <div id="home" />
            <Home />
            <div id="about" />
            <About />
        </div>
    )
}