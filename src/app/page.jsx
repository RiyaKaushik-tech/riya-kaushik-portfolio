
import About from "./about/page";
import HeroSection from "./HeroSection/page";
import Contact from "./contact/page";
import Skill from "./skills/page";
import Project from "./project/page";
import Experience from "../components/experience";
import Credentials from "../components/credentials";
import SectionReveal from "../components/sectionReveal";

export default function Home() {
  return (
    <>
      <div id="home">
        <SectionReveal delay={0.02}>
          <HeroSection />
        </SectionReveal>
      </div>
      <div id="about">
        <SectionReveal delay={0.04}>
          <About />
        </SectionReveal>
      </div>
      <div id="skills">
        <SectionReveal delay={0.06}>
          <Skill />
        </SectionReveal>
      </div>
      <div id="projects">
        <SectionReveal delay={0.08}>
          <Project />
        </SectionReveal>
      </div>
      <div id="experience">
        <SectionReveal delay={0.1}>
          <Experience />
        </SectionReveal>
      </div>
      <div id="credentials">
        <SectionReveal delay={0.12}>
          <Credentials />
        </SectionReveal>
      </div>
      <div id="contact">
        <SectionReveal delay={0.14}>
          <Contact />
        </SectionReveal>
      </div>
    </>
  );
}