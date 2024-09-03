import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Signature from "components/Contact/Signature";
import Experience from "components/Experience/Experience";
import HeroSection from "components/Hero/HeroSection";
import Navbar from "components/Nav/Navbar";
import CustomCursor from "components/Theme/CustomCursor";
import Works from "components/Works/Works";

export default function Home() {
  return (
    <main className=" relative overflow-hidden" id="MainTag">
      <HeroSection />
      <Experience />
      <Works />
      <About />
      <Contact />
      <Signature />
    </main>
  );
}
