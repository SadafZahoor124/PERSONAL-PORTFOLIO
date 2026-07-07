import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Sadaf Zahoor | Front-End Web Developer",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sadaf Zahoor",
  jobTitle: "Front-End Web Developer",
  description:
    "Front-End Web Developer and BS Computer Science student from Pakistan, specializing in React, Next.js, and Tailwind CSS.",
  url: "https://sadaf-zahoor-portfolio.vercel.app",
  sameAs: [
    "https://github.com/your-username",
    "https://linkedin.com/in/your-username",
  ],
  knowsAbout: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Responsive Web Design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Contact />
    </>
  );
}
