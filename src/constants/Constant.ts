import { FiHome, FiUser } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { BsStack } from "react-icons/bs";

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
];

// about me
const about = {
  title: "About me",
  subtitle: "I am monir from bangladesh",
  details: {
    miniTitle: "welcome my world",
    title: "i am full stack developer",
  },
};

// portfolio
const portfolios = [
  {
    name: "foreign language camp",
    stack: "full stack",
    url: "https://foreign-language-camp.web.app",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur doloremque repudiandae maxime cupiditate, facere deserunt nulla sunt. Minima, repellat? Totam commodi, quod ea error dignissimos quas nisi voluptatem aliquam dolore.",
    technologies: ["react", "react router", "firebase", "stripe", "axios"],
    server: "https://github.com/getMonirr/foreign-language-camp-server",
    client: "https://github.com/getMonirr/foreign-language-camp-client",
  },
  {
    name: "Educational Toy",
    stack: "full stack",
    url: "https://foreign-language-camp.web.app",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur doloremque repudiandae maxime cupiditate, facere deserunt nulla sunt. Minima, repellat? Totam commodi, quod ea error dignissimos quas nisi voluptatem aliquam dolore.",
    technologies: ["react", "react router", "firebase", "stripe", "axios"],
    server: "https://github.com/getMonirr/foreign-language-camp-server",
    client: "https://github.com/getMonirr/foreign-language-camp-client",
  },
  {
    name: "Chef Master",
    stack: "full stack",
    url: "https://foreign-language-camp.web.app",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur doloremque repudiandae maxime cupiditate, facere deserunt nulla sunt. Minima, repellat? Totam commodi, quod ea error dignissimos quas nisi voluptatem aliquam dolore.",
    technologies: ["react", "react router", "firebase", "stripe", "axios"],
    server: "https://github.com/getMonirr/foreign-language-camp-server",
    client: "https://github.com/getMonirr/foreign-language-camp-client",
  },
];

export { hero, menu, portfolios };
