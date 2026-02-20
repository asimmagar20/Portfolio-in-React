import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Expertise from "./components/Expertise.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { usePortfolioEffects } from "./hooks/usePortfolioEffects.js";

export default function App() {
  usePortfolioEffects();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
