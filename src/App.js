import { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import MajorProjects from "./components/MajorProjects/MajorProjects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const heroRef = useRef();
  const aboutMeRef = useRef();
  const skillsRef = useRef();
  const workExperienceRef = useRef();
  const majorProjectsRef = useRef();
  const contactFormRef = useRef();

  const navbarElements = [
    {
      text: "Home",
      elementRef: heroRef,
    },
    {
      text: "About",
      elementRef: aboutMeRef,
    },
    {
      text: "Skills",
      elementRef: skillsRef,
    },
    {
      text: "Experience",
      elementRef: workExperienceRef,
    },
    {
      text: "Projects",
      elementRef: majorProjectsRef,
    },
    {
      text: "Contact",
      elementRef: contactFormRef,
    },
  ];

  return (
    <div className="App">
      <Navbar elements={navbarElements} />

      <Hero elementRef={heroRef} aboutMeRef={aboutMeRef} />

      <AboutMe elementRef={aboutMeRef} />

      <Skills elementRef={skillsRef} />

      <WorkExperience elementRef={workExperienceRef} />

      <MajorProjects elementRef={majorProjectsRef} />

      <Contact elementRef={contactFormRef} />

      <Footer />
    </div>
  );
}

export default App;
