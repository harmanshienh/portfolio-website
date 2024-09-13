import { StaticImageData } from "next/image";
import songifindLogo from "../public/logos/songifind-logo.jpg"
import studentHousingLogo from "../public/logos/studenthousing-logo.jpg"
import xCloneLogo from "../public/logos/xclone-logo.jpg"
import flappyBirdLogo from "../public/logos/flappybird-logo.jpg"

import songifind1 from "../public/projects/songifind-1.png"
import songifind2 from "../public/projects/songifind-2.png"

import studentHousing1 from "../public/projects/studenthousing-1.png"
import studentHousing2 from "../public/projects/studenthousing-2.png"
import studentHousing3 from "../public/projects/studenthousing-3.png"
import studentHousing4 from "../public/projects/studenthousing-4.png"
import studentHousing5 from "../public/projects/studenthousing-5.png"
import studentHousing6 from "../public/projects/studenthousing-6.png"

import xClone1 from "../public/projects/xclone-1.png"
import xClone2 from "../public/projects/xclone-2.png"

import flappyBird1 from "../public/projects/flappybird-1.png"
import flappyBird2 from "../public/projects/flappybird-2.png"
import flappyBird3 from "../public/projects/flappybird-3.png"

export interface ProjectDataProps {
    title: string;
    summary: string;
    description: string;
    date: string;
    link: string;
    repoLink: string;
    tags: string[];
    logo: StaticImageData;
    images: StaticImageData[];
};

export const projects: ProjectDataProps[] = [
    {
        title: "Songifind",
        summary: "Discover songs you'll love, tailored to your preferences",
        description: "Songifind allows users to pick from over 100,000 songs stored in a MySQL database to find similar songs given what was entered. I used Next and TailwindCSS for the frontend, designed using Figma. The database was populated using Pandas alongside Spotify API. Recommendations were made using Pandas for vectorization of song characteristics, NumPy for matrix operations, and Scikit-Learn for feature standardization and clustering. Flask was used to create a REST API, fetching song recommendations from the backend.",
        date: "August 2024",
        link: "https://songifind-345f23dfea60.herokuapp.com/",
        repoLink: "https://github.com/harmanshienh/song-recommendation-algorithm",
        tags: ["Spotify API", "Next", "MySQL", "Typescript", "TailwindCSS", "Figma", "Flask", "REST API", "NumPy", "Pandas", "Scikit-Learn"],
        logo: songifindLogo,
        images: [songifind1, songifind2]
    },
    {
        title: "Waterloo Student Housing",
        summary: "Need to find a place in Waterloo for the upcoming term? No problem!",
        description: "Waterloo Student Housing is a marketplace for Waterloo students to find a home for the near future. I used React and TailwindCSS for the frontend. User verification for over 100 users was done using Node. User/Listing information was stored in a MongoDB database, which was retrieved using a REST API made with Node/Express. Firebase was used for Image storage and Google OAuth.",
        date: "June 2024",
        link: "https://waterloostudenthousing.onrender.com/",
        repoLink: "https://github.com/harmanshienh/real-estate-app",
        tags: ["React", "Javascript", "TailwindCSS", "Node", "Express", "MongoDB", "Firebase", "REST API"],
        logo: studentHousingLogo,
        images: [studentHousing1, studentHousing2, studentHousing3, studentHousing4, studentHousing5, studentHousing6]
    },
    {
        title: "Frontend X(Twitter) Clone",
        summary: "A Twitter clone, with the added functionality of choosing a colour theme",
        description: "A frontend X(Twitter) clone made with React and CSS, hosted on Firebase. There is extra functionality to choose a colour theme using a colour picker. By selecting a background colour, the other colours within the website are dynamically changed to ensure legibility and excellent visual design. Users also have the ability to post tweets to the timeline through the Tweetbox at the top of the page. This acts as a collective feed for all users of the website.",
        date: "January 2024",
        link: "https://twitter-clone-7949f.web.app/",
        repoLink: "https://github.com/harmanshienh/Twitter-Clone",
        tags: ["React", "Javascript", "CSS", "Firebase"],
        logo: xCloneLogo,
        images: [xClone1, xClone2]
    },
    {
        title: "Flappy Bird Remake",
        summary: "A PC remake of the mobile game 'Flappy Bird'",
        description: "I built this project following my ICS4U1 class, covering foundational concepts in pygame. I sourced static assets from the original game, using them to create a spritesheet for smooth animations.",
        date: "August 2023",
        link: "https://github.com/harmanshienh/Flappy-Bird",
        repoLink: "https://github.com/harmanshienh/Flappy-Bird",
        tags: ["Python", "pygame"],
        logo: flappyBirdLogo,
        images: [flappyBird1, flappyBird2, flappyBird3]
    },
]