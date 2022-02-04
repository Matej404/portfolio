import {BsFillChatLeftDotsFill, BsFillCalculatorFill, BsBlockquoteLeft, BsSliders} from 'react-icons/bs';
import {MdPassword} from 'react-icons/md';

export const projects = [
    {
        id: "chat",
        icon: <BsFillChatLeftDotsFill className='project-icon' />,
        name: "Chat App",
        ghPages: "https://matej404.github.io/chat/",
        ghCode: "https://github.com/Matej404/chat",
        techStack:"React, Node.js",
        about: "When app is started it generates You a random name and random color. To have multiple users online You need to open the app in multiple tabs. Scaledrone Chat Service used. Scaledrone provides features like realtime messaging, message history and user presence so you can focus on the business logic."
    },
    {
        id: "calc",
        icon: <BsFillCalculatorFill className='project-icon' />,
        name: "Calculator App",
        ghPages: "https://matej404.github.io/Calculator-App/",
        ghCode: "https://github.com/Matej404/Calculator-App",
        techStack:"JavaScript, CSS, HTML5",
        about: "App has the option of addition, subtraction, multiplication and division."
    },
    {
        id: "quote",
        icon: <BsBlockquoteLeft className='project-icon' />,
        name: "Quote Machine App",
        ghPages: "https://matej404.github.io/Quote-machine-react/",
        ghCode: "https://github.com/Matej404/Quote-machine-react",
        techStack:"React, Node.js",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "slider",
        icon: <BsSliders className='project-icon' />,
        name: "Image Slider App",
        ghPages: "https://matej404.github.io/Img-slider/",
        ghCode: "https://github.com/Matej404/Img-slider",
        techStack:"JavaScript, CSS, HTML5",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "generator",
        icon: <MdPassword className='project-icon' />,
        name: "Pasword Generator",
        ghPages: "https://matej404.github.io/password-generator/",
        ghCode: "https://github.com/Matej404/password-generator",
        techStack:"JavaScript, sCSS, HTML5",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
]