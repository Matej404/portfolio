import "./projects.css";
import { BsFillChatLeftDotsFill, BsBlockquoteLeft, BsSliders, BsSpotify } from 'react-icons/bs';
import { MdPassword } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { RiCoinFill } from 'react-icons/ri';

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
        id: "budget",
        icon: <RiCoinFill className='project-icon' />,
        name: "Budget App",
        ghPages: "https://matej404.github.io/budget-app/",
        ghCode: "https://github.com/Matej404/budget-app",
        techStack:"React, Bootstrap, Node.js",
        about: "In this App we can add expenses, view expenses, remove them, dealing with uncategorised expenses, dealing with totals and create budgets."
    },
    {
        id: "slider",
        icon: <BsSliders className='project-icon' />,
        name: "Image Slider App",
        ghPages: "https://matej404.github.io/Img-slider/",
        ghCode: "https://github.com/Matej404/Img-slider",
        techStack:"React, Node.js",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "chat",
        icon: <BsFillChatLeftDotsFill className='project-icon' />,
        name: "Chat App",
        ghPages: "https://matej404.github.io/chat/",
        ghCode: "https://github.com/Matej404/chat",
        techStack:"React, scaledron, Node.js",
        about: "When app is started it generates You a random name and random color. To have multiple users online You need to open the app in multiple tabs. Scaledrone Chat Service used. Scaledrone provides features like realtime messaging, message history and user presence so you can focus on the business logic."
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