import "./projects.css";
import { BsSliders } from 'react-icons/bs';
import { CgGym } from 'react-icons/cg';
import { RiCoinFill } from 'react-icons/ri';
import { FaRedditAlien } from 'react-icons/fa'
import { IoGlobeOutline } from "react-icons/io5";

export const projects = [
    {
        id: "gazeetter",
        icon: <IoGlobeOutline className='project-icon' />,
        name: "Gazeetter",
        ghPages: "https://matejjurin.co.uk/gazeetter/gazeetter/",
        ghCode: "https://github.com/Matej404/gazetteer",
        techStack:"HTML, SASS, JavaScript, PHP, jQuery, Bootstrap, Leaflet",
        about: "The interface enables users to explore and gather comprehensive information about different countries, including geographical data, weather forecasts, time zone details, currency information, news articles, and Wikipedia summaries."
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
        id: "reddit",
        icon: <FaRedditAlien className='project-icon' />,
        name: "Reddit App",
        ghPages: "https://reddit-app-matej.netlify.app/",
        ghCode: "https://github.com/Matej404/reddit-app",
        techStack:"React.js, Redux",
        about: "The application allows users to view and search posts and comments provided by the API"
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
]