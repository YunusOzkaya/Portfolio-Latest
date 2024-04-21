import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  postgresql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  python,
  flutter,
  sql,
  datascience,
  ai,
  ArDev,
  GameDev,
  mssql,
  pandas,
  streamlit,
  cs,
  cpp,
  unity
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'AI Development',
    icon: ai,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'AR Development',
    icon: ArDev,
  },
  {
    title: 'Game Development',
    icon: GameDev,
  },
  {
    title: 'Data Science',
    icon: datascience,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Streamlit',
    icon: streamlit,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Ms SQL',
    icon: mssql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'C#',
    icon: cs,
  },
  {
    name: 'Unity',
    icon: unity,
  },

];

const experiences = [
  {
    title: 'Web Designer',
    company_name: 'Freelance',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2018 - Oct 2019',
  },
  {
    title: 'Tech Officer',
    company_name: 'Presidency Of The Republic Of Turkey',
    icon: microverse,
    iconBg: '#333333',
    date: 'Oct 2019 - May 2021',
  },
  {
    title: 'It Personnel',
    company_name: 'Republic Of Turkey Ministry of Justice',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2021 - Present',
  },

];

const projects = [
  {
    id: 'project-1',
    name: 'iShare',
    description: 'A social media app. Tailwind, Sanity and NextJS are used for making it.',
    tags: [
      {
        name: 'next-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/YunusOzkaya/iShare',
    demo: 'https://github.com/YunusOzkaya/iShare',
  },
  {
    id: 'project-2',
    name: 'Data Visualization App',
    description:
      'An app for data visualization. You can filter and play with the data even as a newbie for data. Made for and used by Ministry.',
    tags: [
      {
        name: 'streamlit',
        color: 'blue-text-gradient',
      },
      {
        name: 'pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/YunusOzkaya/B-lge-B-lge-Personel-Ortalamalar----Streamlit',
    demo: 'https://github.com/YunusOzkaya/B-lge-B-lge-Personel-Ortalamalar----Streamlit',
  },
  {
    id: 'project-3',
    name: 'Food Chat Bot',
    description: 'This is a chat bot for recipes and nutrition. I used Gemini API for AI, ElevenLabs for speech and Streamlit for UI.',
    tags: [
      {
        name: 'streamlit',
        color: 'blue-text-gradient',
      },
      {
        name: 'gemini-ai',
        color: 'green-text-gradient',
      },
      {
        name: 'elevenlabs.io',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/YunusOzkaya/FoodBot',
    demo: 'https://github.com/YunusOzkaya/FoodBot',
  },
  {
    id: 'project-4',
    name: 'Rienalyns Kitchen',
    description: `A single-page application that allows users to search for any type of food or cuisine. My wife is a chef so i gave the app her name. I used React, Firebase and Tailwind.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/YunusOzkaya/react-recipe-site',
    demo: 'https://rienalynskitchen.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Planets AR',
    description:
      'This is an AR application for mobile devices. I used Unity and Vuforia this. My kids love space so I did this project for them.',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'c#',
        color: 'green-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/YunusOzkaya/planets-ar',
    demo: 'https://github.com/YunusOzkaya/planets-ar',
  },
];

export { services, technologies, experiences, projects };
