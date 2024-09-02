// HeroSection.tsx
"use client";
import "./Hero.style.css";
import Image from "next/image";
import hero from "Assets/image/badhon252.png";
import Navbar from "../Nav/Navbar";

export default function HeroSection() {
  return (
    <header
      id="heroSection"
      className="flex flex-col justify-between md:min-h-screen dark:bg-gray-900"
    >
      <section className="container mx-auto">
        <Navbar />
        <div
          id="hero"
          className="container mx-auto flex flex-col items-center justify-center px-4 py-12 text-center md:pb-24 dark:text-gray-300"
        >
          {/* Introduction */}
          <div className="mb-4">
            <p className="text-xl font-semibold text-slate-700 dark:text-gray-200 sm:text-2xl md:text-3xl">
              Hello 👋
            </p>
            <h1 className="name my-6 text-3xl font-extrabold text-slate-700 dark:text-gray-100 sm:text-4xl md:text-5xl">
              I'm Khalid Hossain.
            </h1>
            <h2 className="text-indigo-500 my-2 px-4 text-3xl font-extrabold  sm:text-4xl md:text-6xl xl:text-8xl">
              Frontend Engineer
            </h2>
          </div>

          {/* Hero image and slogans side by side */}
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0 lg:space-x-12">
            <p className="slogan text-lg font-medium text-slate-600 dark:text-gray-400 md:w-1/3 md:text-2xl lg:text-nowrap">
              "Turning Ideas into Interactive Reality.💡"
            </p>
            <div className="lg:w-128 xl:w-128 sm:w-56 w-96">
              <Image
                src={hero}
                alt="Khalid Hossain - Image"
                layout="responsive"
                className="hero-img rounded-full border-4 border-indigo-500 dark:border-indigo-300 shadow-lg"
              />
            </div>
            <p className="slogan text-center text-lg font-medium text-slate-600 dark:text-gray-400 md:w-1/3 md:text-left md:text-2xl">
              "Determined to Deliver, Passionate to Innovate - Expert in
              Next.js.🚀"
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="call-to-action mt-8 flex w-full flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mt-12">
            <button className="out-line px-6 py-3 text-lg dark:border-gray-600 dark:text-gray-300">
              Hire me
            </button>
            <button className="primary px-6 py-3 text-lg dark:bg-indigo-500 dark:text-gray-100">
              View Projects.
            </button>
          </div>
        </div>
        <svg className="... size-6 animate-bounce"></svg>
      </section>
    </header>
  );
}
