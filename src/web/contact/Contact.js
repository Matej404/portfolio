import "./contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import  Fade  from "react-reveal/Fade";
import emailjs from "emailjs-com";
import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [popUpMessage, setPopUpMessage] = useState(false);
    const isTextareaDisabled = message.length === 0;

    
    const handlePopUpMessage = () => {
        setPopUpMessage(!popUpMessage);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        handlePopUpMessage();
        emailjs.sendForm("service_844y6qe", "template_p7u54e4", e.target, "user_nP5ZPxQvHxvU4nh8EF4Hz").then(res => {
            console.log(res);
        }).catch(err=> console.log(err));
    }


    return(
        <div className="contact">
            {popUpMessage && (
                <div className="pop-up-message">
                    <AiOutlineClose className="close-message" onClick={handlePopUpMessage} />
                    <p>Your message has been successfully submitted!</p>
                </div>)}
           
            <Fade clear>
                <h1 className="contact-hadline">Contact</h1>
            </Fade>
            <Fade bottom>
                <div className="contact-container">
                    <div className="contact-informations-container">
                        <div className="contact-information">
                            <div className="icon">
                                <BsTelephoneFill />                         
                            </div>
                            <p><a href="tel:+447547381355">+447547381355</a></p>
                        </div>
                        <div className="contact-information">
                            <div className="icon">
                                <AiOutlineMail />                           
                            </div>
                            <p><a href="mailto:matejjurin278@gmail.com">matejjurin278@gmail.com</a></p>
                        </div>
                        <div className="contact-information">
                            <div className="icon">
                                <GoLocation />                            
                            </div>
                            <p>105 Gloucester Place, W1U 6AW</p>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-grup">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-grup">
                                <label>Your E-mail</label>
                                <input type="email" id="email" name="email" placeholder="Enter your E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-grup">
                                <label for="message">Your Message</label>
                                <textarea id="message" name="message" rows="6" cols="80" placeholder="Enter Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button type="submit" className="btn-submit" disabled={isTextareaDisabled}>Submit</button>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    )
}