import {BsFillChatLeftDotsFill, BsBlockquoteLeft, BsSliders, BsSpotify} from 'react-icons/bs';
import {MdPassword} from 'react-icons/md';
import { CgGym } from 'react-icons/cg';

export const projects = [
    {
        id: "gym",
        icon: <CgGym className='project-icon' />,
        name: "Gym Website",
        ghPages: "https://matej404.github.io/TimGym/",
        ghCode: "https://github.com/Matej404/TimGym",
        techStack:"React, React-router-dom, Node.js",
        about: "I made a gym website here. I didn't have enough details and pictures about the gym, but I used everything I had."
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
        id: "quote",
        icon: <BsBlockquoteLeft className='project-icon' />,
        name: "Quote Machine App",
        ghPages: "https://matej404.github.io/Quote-machine-react/",
        ghCode: "https://github.com/Matej404/Quote-machine-react",
        techStack:"React, Node.js",
        about: "This was suggestion from freeCodeCamp. I used my own code."
    },
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
        id: "generator",
        icon: <MdPassword className='project-icon' />,
        name: "Pasword Generator",
        ghPages: "https://matej404.github.io/password-generator/",
        ghCode: "https://github.com/Matej404/password-generator",
        techStack:"JavaScript, sCSS, HTML5",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "spotify",
        icon: <BsSpotify className='project-icon' />,
        name: "Spotify",
        ghPages: "https://matej404.github.io/Spotify/",
        ghCode: "https://github.com/Matej404/Spotify",
        techStack:"React, React-router-dom, Node.js",
        about: "This website is still in process. I am copying the look and functionality of the actual Spotify website here but, I am using my own code."
    }
]