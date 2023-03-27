import "./projects.css";
import { BsFillChatLeftDotsFill, BsBlockquoteLeft, BsSliders } from 'react-icons/bs';
import { CgGym } from 'react-icons/cg';
import { RiCoinFill } from 'react-icons/ri';
import { FaRedditAlien } from 'react-icons/fa'

export const projects = [
    {
        id: "reddit",
        icon: <FaRedditAlien className='project-icon' />,
        name: "Reddit App",
        ghPages: "https://reddit-app-matej.netlify.app/",
        ghCode: "https://github.com/Matej404/reddit-app",
        techStack:"React.js, Redux",
        about: "The application allows users to view and search posts and comments provided by the API"
    },
    {
        id: "gym",
        icon: <CgGym className='project-icon' />,
        name: "Gym Website",
        ghPages: "https://matej404.github.io/TimGym/",
        ghCode: "https://github.com/Matej404/TimGym",
        techStack:"React.js, React-router-dom",
        about: "I made a gym website here. I didn't have enough details and pictures about the gym, but I used everything I had."
    },
    {
        id: "budget",
        icon: <RiCoinFill className='project-icon' />,
        name: "Budget App",
        ghPages: "https://matej404.github.io/budget-app/",
        ghCode: "https://github.com/Matej404/budget-app",
        techStack:"React, Bootstrap",
        about: "In this App we can add expenses, view expenses, remove them, dealing with uncategorised expenses, dealing with totals and create budgets."
    },
    {
        id: "slider",
        icon: <BsSliders className='project-icon' />,
        name: "Image Slider App",
        ghPages: "https://matej404.github.io/Img-slider/",
        ghCode: "https://github.com/Matej404/Img-slider",
        techStack:"React.js",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "chat",
        icon: <BsFillChatLeftDotsFill className='project-icon' />,
        name: "Chat App",
        ghPages: "https://matej404.github.io/chat/",
        ghCode: "https://github.com/Matej404/chat",
        techStack:"React.js, scaledron",
        about: "When app is started it generates You a random name and random color. To have multiple users online You need to open the app in multiple tabs. Scaledrone Chat Service used. Scaledrone provides features like realtime messaging, message history and user presence so you can focus on the business logic."
    },
]