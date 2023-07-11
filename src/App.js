import { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const heroRef = useRef();

  const navbarElements = [
    {
      text: "Home",
      elementRef: heroRef,
    },
    {
      text: "About",
      elementRef: heroRef,
    },
    {
      text: "Skills",
      elementRef: heroRef,
    },
    {
      text: "Experience",
      elementRef: heroRef,
    },
    {
      text: "Projects",
      elementRef: heroRef,
    },
    {
      text: "Contact",
      elementRef: heroRef,
    },
  ];

  return (
    <div className="App">
      <Navbar elements={navbarElements} />
      <Hero elementRef={heroRef} />
    </div>
  );
}

export default App;
