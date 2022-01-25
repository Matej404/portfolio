import "./home.css";
import Fade from "react-reveal/Fade";

export default function Home() {
    return(
        <div className="main-header">
            <div className="move-up">
                <Fade left>
                <p className="header-top">
                    Hi, my name is <span className="my-name">Matej Jurin.</span>
                </p>
                <p className="headre-bottom">I'm a front-end web developer</p>
                </Fade>
            </div>
        </div>
    )
}