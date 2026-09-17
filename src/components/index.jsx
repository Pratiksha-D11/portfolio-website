import { useState, useEffect } from "react";
import { GLOBAL_CSS } from "./globalStyles";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import CertAchieve from "./CertAchieve";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div>
      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <CertAchieve dark={dark} />
      <Contact dark={dark} />
      <Footer />
    </div>
  );
}