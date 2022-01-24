import "./navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="nav-container">
                <ul className="nav-menu">
                    <li className="nav-link">
                        <Link className="nav-link" to="home" smooth={true} duration={1000} >
                            Home
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link" to="home" smooth={true} duration={1000} >
                            About
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link" to="home" smooth={true} duration={1000} >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link" to="home" smooth={true} duration={1000} >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="nav-btn">
                    <a className="nav-btn-link" href="https://github.com/Matej404" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    )
}