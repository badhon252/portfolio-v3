import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Experience from "components/Experience/Experience";
import HeroSection from "components/Hero/HeroSection";
import InteractivePortfolioShowcase from "components/Works/ProjectShowcase";

export default function Home() {
  return (
    <main className="  overflow-hidden" id="MainTag">
      <HeroSection />
      <InteractivePortfolioShowcase />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
