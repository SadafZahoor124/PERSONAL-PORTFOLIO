import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import type { SkillItem } from "@/types";

export const skills: SkillItem[] = [
  {
    name: "HTML5",
    icon: FaHtml5,
    level: 95,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    level: 90,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    level: 88,
    color: "text-yellow-400",
  },
  {
    name: "React.js",
    icon: FaReact,
    level: 85,
    color: "text-sky-400",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    level: 80,
    color: "text-ink-900 dark:text-white",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    level: 90,
    color: "text-teal-400",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    level: 82,
    color: "text-red-500",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    level: 85,
    color: "text-ink-900 dark:text-white",
  },
  {
    name: "Responsive Design",
    icon: FaMobileAlt,
    level: 92,
    color: "text-brand-500",
  },
];
