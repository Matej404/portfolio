import "./Style.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

export default function Main() {

    return(
        <div>
            <Navbar />
            <div id="home" />
            <Home />
        </div>
    )
}