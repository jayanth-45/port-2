
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Frontend Developer | Full Stack Contributor",
    icon: tekisky,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Designed complete UI/UX flows using Figma and translated them into production-ready interfaces.",
      "Developed responsive frontend using React.js and Next.js for live e-commerce and customization platforms.",
      "Worked as Full Stack Developer, integrating frontend with backend services using Node.js and Express.js.",
      "Implemented authentication, cart flow, checkout, and product management features for production applications.",
      "Collaborated with cross-functional teams to deliver features aligned with business goals.",
      "Designed and developed booking flows, seat selection UI, and dashboards for various applications.",
    ],
  },
  {
    title: "Intern",
    company_name: "VCNR Technologies Pvt. Ltd.",
    icon: tekisky,
    iconBg: "#1A1A2E",
    date: "May 2024 - June 2024",
    points: [
      "Developed backend APIs using Flask (Python).",
      "Integrated frontend and backend using Flask.",
      "Worked with MongoDB for database operations.",
      "Learned API testing, debugging, and deployment fundamentals.",
    ],
  },
  {
    title: "Intern",
    company_name: "KaNaada Phonetics Pvt. Ltd.",
    icon: tekisky,
    iconBg: "#16213E",
    date: "February 2023 - November 2023",
    points: [
      "Developed calculator using Raspberry Pi Pico.",
      "Built Ping Pong game using Arduino Uno.",
      "Converted Arduino IDE code to Python.",
      "Gained hands-on experience in IoT and embedded systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jayanth delivered exceptional UI/UX designs and seamless frontend implementation for our e-commerce platform. His attention to detail and technical expertise made a significant impact.",
    name: "Project Manager",
    designation: "Cordestitch",
    company: "E-commerce Platform",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with Jayanth on the bus booking application was a great experience. He understood our requirements quickly and delivered a user-friendly interface.",
    name: "Team Lead",
    designation: "Nandhubus",
    company: "Transportation",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Jayanth's full-stack contributions to our CRM system improved our internal operations significantly. His design skills and development expertise are impressive.",
    name: "Business Owner",
    designation: "CRM System",
    company: "Seabed2Crest",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Cordestitch",
    description:
      "Live E-commerce & Customization Platform (cordestitch.com). Designed complete UI/UX flows using Figma. Developed responsive frontend using React.js and Next.js. Implemented T-shirt customization and pant-selling workflows with full-stack integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://cordestitch.com",
  },
  {
    name: "Nandhubus",
    description:
      "Live Bus Booking Application (nandhubus.com). Designed booking flows and seat selection UI using Figma. Integrated APIs for routes, schedules, and booking operations. Focused on UX clarity, performance, and usability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://nandhubus.com",
  },
  {
    name: "CRM System",
    description:
      "Live Internal Application (crm.seabed2crest.com). Designed dashboards and workflows using Figma. Developed frontend dashboards, forms, and admin modules. Integrated backend APIs for real-time data handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://crm.seabed2crest.com",
  },
  {
    name: "HRMS",
    description:
      "Internal Human Resource Management System. Designed HR module UI and workflows using Figma. Developed frontend components for employee and HR operations. Integrated backend APIs to support HR workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://hrms.seabed2crest.com",
  },
  {
    name: "AI Astrology App",
    description:
      "AI-Based Astrology Web Application (s2c-astro.vercel.app). Designed end-to-end UI/UX using Figma. Developed using Next.js and React.js. Implemented AI-based logic for astrology predictions, Kundli generation, and live astrologer consultations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://s2c-astro.vercel.app/",
  },
  {
    name: "Online Meeting App",
    description:
      "Google Meet-like Online Meeting Application (seabedastro.vercel.app). Designed meeting screens and interaction flows using Figma. Developed frontend architecture and routing using Next.js. Implemented meeting-style user experience for astrology consultations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://seabedastro.vercel.app/",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Nagarjuna College of Management Studies, Chickballapura",
    score: "CGPA: 9.2",
    year: "2021 - 2024",
  },
  {
    degree: "Pre-University Education (PUC)",
    institution: "Shaanthikethan's PU College, Chickballapura",
    score: "88.9%",
    year: "2019 - 2021",
  },
  {
    degree: "Secondary Education (SSLC)",
    institution: "BGS English School, Agalagurki, Chickballapura",
    score: "91.84%",
    year: "2018 - 2019",
  },
];

const certificates = [
  {
    name: "DBMS & SQL",
    issuer: "Udemy",
    year: "2022",
  },
  {
    name: "HTML5 & CSS3",
    issuer: "ThinkQbator",
    year: "2022",
  },
  {
    name: "Java Programming",
    issuer: "Great Learning",
    year: "2022",
  },
  {
    name: "Python Programming",
    issuer: "Great Learning",
    year: "2022",
  },
];

const languages = [
  {
    name: "English",
    proficiency: "Fluent",
  },
  {
    name: "Kannada",
    proficiency: "Native",
  },
  {
    name: "Telugu",
    proficiency: "Fluent",
  },
];

export { services, technologies, experiences, testimonials, projects, education, certificates, languages };
