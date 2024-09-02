// HeroSection.tsx
/* eslint-disable react/no-unescaped-entities */
import "./Hero.style.css"
import Image from "next/image"
import hero from "Assets/image/badhon252.png"
import { Button } from "components/Button/Button"
import Navbar from "../Nav/Navbar"

export default function HeroSection() {
  return (
    <header id="heroSection" className="flex flex-col justify-between md:min-h-screen ">
      <section className="container mx-auto">
        <Navbar />
        <div
          id="hero"
          className="container mx-auto flex flex-col items-center justify-center px-4 py-12 text-center md:pb-24"
        >
          {/* Introduction */}
          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">Hello 👋</p>
            <h1 className="name my-6 text-3xl font-extrabold  sm:text-4xl md:text-5xl">I'm Khalid Hossain.</h1>
            <h2 className="title my-2 px-4 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-6xl xl:text-8xl">
              Frontend Engineer
            </h2>
          </div>

          {/* Hero image and slogans side by side */}
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0 lg:space-x-12">
            <p className="slogan text-lg font-medium text-gray-600 md:w-1/3 md:text-2xl lg:text-nowrap">
              "Turning Ideas into Interactive Reality.💡"
            </p>
            <div className="w-48 sm:w-56 md:w-64 lg:w-128 xl:w-128">
              <Image
                src={hero}
                alt="Khalid Hossain - Image"
                layout="responsive"
                className="hero-img rounded-full border-4 border-indigo-500 shadow-lg"
              />
            </div>
            <p className="slogan  text-center text-lg font-medium text-gray-600 md:w-1/3 md:text-left md:text-2xl">
              "Determined to Deliver, Passionate to Innovate - Expert in Next.js.🚀"
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="call-to-action mt-8 flex w-full flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mt-12">
            <Button href="#" intent={"secondary"} className="out-line px-6 py-3 text-lg">
              Hire me
            </Button>
            <Button href="#work" className="primary px-6 py-3 text-lg ">
              View Projects.
            </Button>
          </div>
        </div>
        <svg className="... h-6 w-6 animate-bounce"></svg>
      </section>
    </header>
  )
}
