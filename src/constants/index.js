import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  GDSC,
  PSS,
  Elevators,
  agri,
  insight,
  PSSWeb,
  ElevatorsWeb
} from "../assets";

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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "UI Design",
    icon: creator,
  },
  {
    title: "Database Management",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack web developer",
    company_name: "PSS Financial Services",
    iconBg: "#383E56",
    icon: PSS,
    date: "March 2024 - present",
    points: [
      "Developed and designed the company’s landing page, service offerings page, Login, and Sign Up page using React.js for the frontend",
      "Integrated the frontend with the backend built in express.js to ensure seamless functionality and user experience.",
      "The UI prioritized user-friendliness, leading to a 3% improvement in average session duration and 10%decrease in bounce rate.",
      "Successfully tested and debugged all functionalities to ensure optimal performance and user interaction",
      "Implemented responsive design principles to ensure compatibility across various devices and screen sizes"
    ],
  },
  {
    title: "Web Developer Associate",
    company_name: "GOOGLE DEVELOPER STUDENT CLUBS, IIIT-BH ",
    icon: GDSC,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developed and maintained 3 web applications (membership portal, event registration system, and internal communication platform) using HTML, CSS, and JavaScript (React.js) for the front-end and Express.js for the back-end, for the Google Developer Student Clubs (GDSC) of my college.",

      "Developed and delivered web development workshops for college students, covering core front-end and back-end concepts.",
      "Led hands-on coding sessions to guide students in building functional web applications.",
      "Presented lectures on various web development frameworks, providing students with an understanding of advanced web development tools.",
    ],
  },
  {
    title: "Full Stack Web developer Freelance",
    company_name: "Elevators Media",
    icon: Elevators,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Made the complete website on time, Improved user interface and color combinations were just apt for our financial website",
    name: "Srimanta Nayak",
    designation: "",
    company: "PSS Financial Services",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "After Swayam optimized our website, our traffic increased by 55%. We can't thank him enough!",
    name: "Marco Bellagente",
    designation: "",
    company: "SummerWrap",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const projects = [
  {
    name: "Elevators Media Landing Page",
    description:
      "Landing Page for our client Elevators Media made using Next.js.",
    tags: [
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "css animations",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: ElevatorsWeb,
    source_code_link: "https://elevators-media.vercel.app/",
  },
  {
    name: "PSS Financial Website",
    description:
      "Complete website for our client PSS Financial Services developed using Next.js",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: PSSWeb,
    source_code_link: "https://pss-nextjs-app.vercel.app/",
  },
  {
    name: "INSIGHT ED: EDTECH PLATFORM FOR PERSONALIZED EDUCATION",
    description:
      "Effortless Classroom Management for teachers includes course creation, live session scheduling, and student enrollment management in a single platform. Personalized Learning for students offers tailored courses, live sessions, AI-driven understanding analysis, personalized YouTube videos, and quizzes for better recall. This approach leads to Improved Student Engagement, boosting test scores, and Enhanced Student Performance through targeted resources and self-assessment tools, fostering academic excellence.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "ChromaDB",
        color: "green-text-gradient",
      },
      {
        name: "GCP APIs",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
      {
        name: "GeminiPro-SDK",
        color: "pink-text-gradient",
      },
      {
        name: "HuggingFace API (Emotion LLM)",
        color: "blue-text-gradient",
      },
    ],
    image: insight,
    source_code_link: "https://github.com/swataswayam-14/HackNITR5.0",
  },
  {
    name: "AGROMARKETLINK: EMPOWERING FARMERS",
    description:
      "In this project, key features include enhanced farmer income by 20% through direct sales, bypassing middlemen, and efficient management of crop listings and harvest details. Additionally, the platform enables decreased food waste by allowing farmers to adjust harvests using real-time market data, potentially reducing crop waste by 15-20%. Moreover, the system promotes fair pricing by providing vegetable shop owners and consumers access to farmer profiles by location and harvest, ensuring competitive prices for fresh produce sourced directly from farmers. Lastly, farmers can extend their market reach by 30% through expanding beyond local markets, leveraging the platform's reach for growth. These features collectively contribute to empowering farmers, reducing waste, ensuring fair pricing, and expanding market opportunities.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: agri,
    source_code_link: "https://github.com/swataswayam-14/AgroMarketLink",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
