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
                            Learning to code been dificult and arduous journey,
                            however, I have never done somenthing so rewarding. Now, I feel at
                            a point where I can build multipage websites with my HTML and CSS 
                            skills. I have also spent time learning and practicing  JavaScript
                            (including working with API's), functional programming and object
                            oriented programming.
                        </p>
                        <p>
                            I am aware this is a fast growing modern industry. Therefore, I 
                            made sure to learn and use frameworks and tools such a React,
                            SASS and most recently, styled components in order to
                            efficently build websites using the last tools.
                        </p>
                        <p>
                            I am a developer because I'm inspired to be a better me today then 
                            I was yesterday. Put simply, I love to learn and coding
                            is great example of that.
                        </p>
                    </div>
                 </Fade>
             </div>
        </div>
    )
}