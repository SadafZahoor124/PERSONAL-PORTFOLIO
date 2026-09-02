import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "React.js",
        icon: FaReact,
        color: "text-sky-400",
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "text-ink-900 dark:text-white",
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        color: "text-teal-400",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "text-purple-600",
      },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-ink-900 dark:text-white",
      },
      {
        name: "REST APIs",
        icon: SiPostman,
        color: "text-orange-500",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-600",
      },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        color: "text-red-500",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-blue-600",
      },
    ],
  },

  {
    title: "Tools & Version Control",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-red-500",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-ink-900 dark:text-white",
      },
    ],
  },
];
