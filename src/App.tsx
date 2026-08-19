import { useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import GitHub from "./components/GitHub";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  useEffect(() => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    if (path && path !== "hero") {
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <GitHub />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
