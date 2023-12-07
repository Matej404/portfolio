import "./about.css";
import Prof from "./profile-picture.jpg";
import Fade from 'react-reveal/Fade';

export default function about() {
    return(
        <div className="about">
            <Fade top>
                <h1 className="about-hadline">About me</h1>
            </Fade>
            <div className="about-container">
                <Fade left>
                    <div className="about-img">
                        <img src={Prof} />
                    </div>
                 </Fade>
                 <Fade right>
                    <div className="about-text">
                        <p>
                            Embarking on the exhilarating journey of coding was akin to 
                            stepping into a world of challenges and endless possibilities. 
                            Through perseverance and unwavering dedication, I've paved a 
                            path that now allows me to confidently weave intricate, multi-page 
                            websites using a tapestry of HTML, CSS, and JavaScript.
                        </p>
                        <p>
                            My exploration into the realms of functional and object-oriented 
                            programming has equipped me with a diverse skill set. I've seamlessly 
                            integrated APIs, navigated frameworks like React, and utilized tools 
                            such as SASS to elevate user experiences. Familiarity with essential 
                            libraries like jQuery, state manager redux, Bootstrap, and Materialize 
                            has honed my ability to curate visually stunning and functionally robust interfaces.
                        </p>
                        <p>
                            While my primary focus lies in front-end development, I've ventured into the 
                            backend realm, acquainting myself with SQL, node.js, and cultivating a solid 
                            understanding of PHP. This comprehensive understanding allows me to create seamless, 
                            end-to-end web experiences.
                        </p>
                        <p>
                            My journey into coding has been a testament to my passion for continuous learning and my 
                            commitment to mastering the ever-evolving landscape of web development. I eagerly anticipate 
                            the challenges that lie ahead, poised to further expand my skills and contribute meaningfully 
                            to the digital landscape.
                        </p>
                    </div>
                 </Fade>
             </div>
        </div>
    )
}