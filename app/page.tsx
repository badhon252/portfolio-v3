import About from "components/About/About"
import Contact from "components/Contact/Contact"
import Experience from "components/Experience/Experience"
import HeroSection from "components/Hero/HeroSection"
import Works from "components/Works/Works"

export default function Home() {
  return (
    <main className="mx-auto">
      <HeroSection />
      <Experience />
      <Works />
      <About />
      <Contact />
    </main>
  )
}
