import { useEffect } from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Coding from "./Coding/Coding";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";


function App() {
  useEffect(() => {
    // Detect system dark mode preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Coding />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;

