import "./contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import  Fade  from "react-reveal/Fade";

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="contact">
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
                            <p>+4407547381355</p>
                        </div>
                        <div className="contact-information">
                            <div className="icon">
                                <AiOutlineMail />                           
                            </div>
                            <p>matejjurin278@gmail.com</p>
                        </div>
                        <div className="contact-information">
                            <div className="icon">
                                <GoLocation />                            
                            </div>
                            <p>45 Matheson Road, W14 8SN</p>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-grup">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-grup">
                                <label>Your E-mail</label>
                                <input type="email" id="email" name="email" placeholder="Enter your E-mail" />
                            </div>
                            <div className="form-grup">
                                <label for="message">Your Message</label>
                                <textarea id="message" name="message" rows="6" cols="80" placeholder="Enter Your message" />
                            </div>
                            <button type="submit" className="btn-submit">Send</button>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    )
}