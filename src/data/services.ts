import { FaLaptopCode, FaMobileAlt, FaReact, FaPaintBrush } from "react-icons/fa";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "Front-End Development",
    description:
      "Building clean, fast, and maintainable user interfaces with modern HTML, CSS, and JavaScript best practices.",
    icon: FaLaptopCode,
  },
  {
    title: "Responsive Website Development",
    description:
      "Designing websites that look and work great on every device, from small phones to large desktop screens.",
    icon: FaMobileAlt,
  },
  {
    title: "React Development",
    description:
      "Creating dynamic, component-based web apps with React and Next.js, focused on performance and reusability.",
    icon: FaReact,
  },
  {
    title: "Website Redesign",
    description:
      "Refreshing outdated websites with a modern look, improved UX, and better performance without losing existing content.",
    icon: FaPaintBrush,
  },
];
