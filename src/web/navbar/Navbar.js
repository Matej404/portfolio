import "./navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return(
        <div className="navbar">
            <div className="mobile-icon" onClick={toggleNav}>
                    <FaBars />
                </div>
            {(toggleMenu || screenWidth > 768) && (<div className="nav-container">
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
                
            </div>)}
                <div className="nav-btn">
                    <a className="nav-btn-link" href="https://github.com/Matej404" target="_blank">GitHub</a>
                </div>
        </div>
    )
}