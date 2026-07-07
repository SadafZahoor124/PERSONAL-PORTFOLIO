import type { IconType } from "react-icons";

export interface SkillItem {
  name: string;
  icon: IconType;
  level: number; // 0 - 100, used for the animated progress bar
  color: string; // tailwind text color class for the icon
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: IconType;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  status: "completed" | "in-progress";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
