import "./projects.css";
import { projects } from "./projectArry";
import { Flip } from "react-reveal";
import React, {useState} from "react";

export default function Projects() {
    const [popUp, setPopUp] = useState("");

    const handlePopUp = (e, id) => {
        setPopUp(id);
    }

    const handleRemovePopUp = () => {
        setPopUp("");
    }

    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-container">
                {projects.map((project) => {
                    const { id, icon, name, ghPages, ghCode, techStack, about} = project;
                    return(
                        <div key={id}>
                            <Flip left>
                                <div className="project" onClick={(e) => handlePopUp(e, id)}>
                                    {icon}
                                    <h3>{name}</h3>
                                    <span>VIEW DETAILS</span>
                                </div>
                            </Flip>
                            {popUp === id ? (
                                <div key={id + "app"} className="pop-up">
                                    <span className="close" onClick={() => handleRemovePopUp()}>
                                         &times;
                                    </span>
                                    <div className="pop-up-content">
                                        {icon}
                                        <h1>{name}</h1>
                                        <div>
                                            <a href={ghPages} target="_blank" rel="noreferrer">LIVE WEBSITE</a>
                                            <a href={ghCode} target="_blank" rel="noreferrer">SOURCE CODE</a>
                                        </div>
                                            <h3>
                                                Tech stack: <span>{techStack}</span>
                                            </h3>
                                            <p>{about}</p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}