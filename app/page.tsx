import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Experience from "components/Experience/Experience";
import HeroSection from "components/Hero/HeroSection";
import InteractivePortfolioShowcase from "components/Works/ProjectShowcase";
import Works from "components/Works/Works";

export default function Home() {
  return (
    <main className="  overflow-hidden" id="MainTag">
      <HeroSection />
      <InteractivePortfolioShowcase />
      <Experience />
      {/* <Works /> */}
      <About />
      <Contact />
    </main>
  );
}
