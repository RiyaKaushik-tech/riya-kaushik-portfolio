
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
        <SectionReveal delay={0}>
          <HeroSection />
        </SectionReveal>
      </div>
      <div id="about">
        <SectionReveal delay={0}>
          <About />
        </SectionReveal>
      </div>
      <div id="skills">
        <SectionReveal delay={0}>
          <Skill />
        </SectionReveal>
      </div>
      <div id="projects">
        <SectionReveal delay={0}>
          <Project />
        </SectionReveal>
      </div>
      <div id="experience">
        <SectionReveal delay={0}>
          <Experience />
        </SectionReveal>
      </div>
      <div id="credentials">
        <SectionReveal delay={0}>
          <Credentials />
        </SectionReveal>
      </div>
      <div id="contact">
        <SectionReveal delay={0}>
          <Contact />
        </SectionReveal>
      </div>
    </>
  );
}