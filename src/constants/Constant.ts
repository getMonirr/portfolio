import { BsStack } from "react-icons/bs";
import { FiHome, FiPhoneCall, FiUser } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import chef from "../../public/images/chef-master.png";
import dream from "../../public/images/dream.png";
import edu from "../../public/images/edu.png";
import foreign from "../../public/images/foreign.png";
import solution from "../../public/images/solution.png";
import tscServer from "../../public/images/tsc-server.png";

const edu_toy = edu.src;
const foreign_pic = foreign.src;
const chef_pic = chef.src;
const solution_pic = solution.src;
const dream_pic = dream.src;
const tsc_server_pic = tscServer.src;

// hero
const hero = {
  name: "Md. Monir Hoshen",
  title: "Full Stack MERN Developer",
};

// menu
const menu = [
  {
    icon: FiHome,
    title: "home",
    path: "/",
  },
  {
    icon: FiUser,
    title: "about",
    path: "about",
  },
  {
    icon: GiSkills,
    title: "skills",
    path: "skills",
  },
  {
    icon: BsStack,
    title: "portfolio",
    path: "portfolio",
  },
  {
    icon: FiPhoneCall,
    title: "Contact",
    path: "contact",
  },
];

// about me
const about = {
  title: "About me",
  subtitle: "Who am I?",
  details: {
    miniTitle: "welcome my world",
    title: "i am full stack developer",
  },
};

// portfolio
const portfolios = [
  {
    name: "Dream destination Travel",
    stack: "Full stack",
    url: "https://dream-destination-travel.vercel.app/",
    image: dream_pic,
    details: [
      {
        title: "Connect Travelers with dream Destinations",
        description: `Our platform connects travelers with their dream destinations, offering a seamless booking experience. Users can browse, select, and book their preferred travel packages.`,
      },
      {
        title: "Manage Bookings and Payments",
        description: `Our platform simplifies the booking process, allowing users to manage their bookings and payments effortlessly. Users can view their booking history, make payments, and more.`,
      },
      {
        title: "User-Friendly Dashboard",
        description: `Our platform offers a user-friendly dashboard, enabling users to manage their bookings, view their booking history, and more. Users can access all necessary information in one place.`,
      },
    ],
    technologies: [
      "Next JS",
      "TypeScript",
      "Redux",
      "Prisma",
      "React",
      "JWT",
      "PostgreSQL",
      "Swiper JS",
      "Ant Design",
    ],
    server: "https://github.com/getMonirr/Dream-Destination-Server.git",
    client: "https://github.com/getMonirr/Dream-Destinations.git",
  },
  {
    name: "Multi-Client Services (like Fiverr) [Team Project] [Duration – Over 2 month]",
    stack: "full stack",
    url: "https://career-solutions.vercel.app",
    image: solution_pic,
    details: [
      {
        title: "Ordering System",
        description: `Our platform simplifies the service ordering process, making it user-friendly and
efficient. Clients can browse, select, and place orders for services they need.`,
      },
      {
        title: "Service Creation:",
        description: `Sellers can effortlessly create and offer their services on our platform. They can
showcase their expertise and skills, set pricing, and provide all necessary details`,
      },
      {
        title: "Powerful Filtering Options:",
        description: `Our marketplace offers robust filtering options, allowing users to refine
their search for services. Users can specify criteria like price range, delivery time and more.`,
      },
    ],
    technologies: [
      "Next JS",
      "TypeScript",
      "Redux",
      "Mongoose",
      "React",
      "JWT",
      "MongoDB",
      "Swiper JS",
      "Next Auth",
      "etc.",
    ],
    server: "https://github.com/getMonirr/multi-client-services",
    client: "https://github.com/getMonirr/multi-client-services",
  },
  {
    name: "foreign language camp",
    stack: "full stack",
    url: "https://foreign-language-camp.web.app",
    image: foreign_pic,
    details: [
      {
        title: "Multi-Dashboard Functionality:",
        description: `Different Dashboards exist for students, instructors, and admin.
Instructors can add and update their classes. Admin can make a user to admin or instructor`,
      },
      {
        title: "Seamless Card Payment Integration via Stripe:",
        description: `Secure and efficient card payment system
Integration with Stripe. Students can hassle-free payments with a card for individual classes `,
      },
      {
        title: "Optimized Class Display on the Classes Page:",
        description: `AOn the Classes page, show only the approved class
and turn off the "add select" button if available seats are 0 or instructor or admin login.`,
      },
    ],
    technologies: ["react", "react router", "firebase", "stripe", "axios"],
    server: "https://github.com/getMonirr/foreign-language-camp-server",
    client: "https://github.com/getMonirr/foreign-language-camp-client",
  },
  {
    name: "Educational Toy",
    stack: "full stack",
    url: "https://edu-toy.web.app/",
    image: edu_toy,
    details: [
      {
        title: "User Authentication and Hosting",
        description: `The project establishes secure user authentication and utilizes
Firebase for hosting, ensuring a robust foundation for user management.`,
      },
      {
        title: "Efficient Data Handling:",
        description: `Execute MongoDB CRUD operations via an Express server in conjunction
with NodeJS, incorporating JWT for enhanced API security`,
      },
      {
        title: "User-Centric Functionality:",
        description: `Enforce access controls for toy operations, permitting actions only for
authenticated users. Elevate the backend server with search, sorting, limits`,
      },
    ],
    technologies: ["react", "react router", "firebase", "stripe", "axios"],
    server: "https://github.com/getMonirr/edu-toy-server",
    client: "https://github.com/getMonirr/edu-toy-client",
  },
  {
    name: "Chef Master",
    stack: "full stack",
    url: "https://chef-master-30a95.web.app/",
    image: chef_pic,
    details: [
      {
        title: "Multi-Dashboard Functionality:",
        description: `Different Dashboards exist for students, instructors, and admin.
Instructors can add and update their classes. Admin can make a user to admin or instructor`,
      },
    ],
    technologies: ["react", "react router", "firebase", "stripe", "axios"],
    server: "https://github.com/getMonirr/chef-master-server",
    client: "https://github.com/getMonirr/chef-master-client",
  },
  {
    name: "Typescript express server boilerplate NPM package",
    stack: "NPM Package",
    url: "https://www.npmjs.com/package/create-tsc-server",
    image: tsc_server_pic,
    details: [
      {
        title: "🚀 Quick Setup",
        description: `Instantly clone a TypeScript server template and get started.`,
      },
      {
        title: "🧹 Linting and Formatting",
        description: `Automatically format your code and catch errors with ESLint and Prettier.`,
      },
      {
        title: "📂 Builtin module create:",
        description: "Create a module with a single command.",
      },
    ],
    technologies: [
      "TypeScript",
      "Express",
      "Nodemon",
      "ESLint",
      "Prettier",
      "Cors",
      "Zod",
      "Dotenv",
      "bcrypt",
      "JWT",
      "Cookie-parser",
    ],
    server: "https://github.com/getMonirr/tsc-server-boilerplate.git",
    client: "https://www.npmjs.com/package/create-tsc-server",
  },
];

// skill

export { hero, menu, portfolios };
