import {
  mobile,
  backend,
  vuejs,
  nestjs,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  apj,
  anunx,
  avasus,
  siri,
  salus,
  expenseapp,
  carrent,
  jobit,
  tripguide,
  threejs,
  lais
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Requirements Engineering",
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
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Nest js",
    icon: nestjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Laboratório de Inovação Tecnológica em saúde",
    icon: lais,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta quos porro nam quas necessitatibus minus culpa itaque dolore fuga placeat quam eos numquam, aperiam, accusamus perferendis, corporis mollitia doloribus",
    name: "Jorge",
    designation: "CEO",
    company: "Jorge SA",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta quos porro nam quas necessitatibus minus culpa itaque dolore fuga placeat quam eos numquam, aperiam, accusamus perferendis, corporis mollitia doloribus",
    name: "Jaqueline Dantas",
    designation: "COO",
    company: "JAQ Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta quos porro nam quas necessitatibus minus culpa itaque dolore fuga placeat quam eos numquam, aperiam, accusamus perferendis, corporis mollitia doloribus",
    name: "Lisa",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Avasus",
    description:
      "Web mobile-first app React application which provide several health courses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "highChart",
        color: "pink-text-gradient",
      },
    ],
    image: avasus,
    source_code_link: "https://github.com/Juciano-Farias",
  },
  {
    name: "Siri",
    description:
      "The Institutional Relations System allows intelligent monitoring of missions carried out by LAIS researchers and partners",
    tags: [
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: siri,
    source_code_link: "https://github.com/Juciano-Farias",
  },
  {
    name: "Salus",
    description:
    "Diagnosis and Intelligent Monitoring of cases of acquired, pregnant, congenital and exposed child syphilis.",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "django-tamplates",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: salus,
    source_code_link: "https://github.com/Juciano-Farias",
  },
  {
    name: "Anunx",
    description:
    "A web app with an interface and backend similar to OLX",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: anunx,
    source_code_link: "https://github.com/Juciano-Farias",
  },
  {
    name: "Expenses App",
    description:
      "A mobile app where you can create, view, and delete your financial data.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "androidStudio",
        color: "pink-text-gradient",
      },
    ],
    image: expenseapp,
    source_code_link: "https://github.com/Juciano-Farias",
  },
  {
    name: "Nest JS API",
    description:
      "A RESTfull API created with the best of Nest JS and TypeScript",
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "",
      },
    ],
    image: nestjs,
    source_code_link: "https://github.com/Juciano-Farias",
  },
  {
    name: "APJ Blog",
    description:
      "It's the company APJ blog and website developed primarily with Next.js and the GraphCMS platform",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "graphcms",
        color: "pink-text-gradient",
      },
    ],
    image: apj,
    source_code_link: "https://github.com/Juciano-Farias",
  },
];

export { services, technologies, experiences, testimonials, projects };
