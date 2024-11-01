/* eslint-disable react/no-unescaped-entities */
// HeroSection.tsx
"use client";
import "./Hero.style.css";
import Image from "next/image";
import Link from "next/link";
import hero from "Assets/image/badhon252.png";

export default function HeroSection() {
  return (
    <header
      id="heroSection"
      className="flex flex-col justify-between  bg-gradient-to-b from-slate-50 to-slate-100  dark:text-gray-100 dark:bg-gradient-to-b dark:from-slate-800 dark:to-gray-950 text-slate-700 "
    >
      <section className="container mx-auto">
        <div
          id="hero"
          className="flex flex-col items-center justify-center px-4 py-12 text-center  dark:text-gray-300"
        >
          {/* Introduction */}
          <div className="mb-4">
            <p className="text-xl font-semibold sm:text-xl md:text-2xl">
              Hello 👋
            </p>
            <h1 className="name my-4 text-2xl font-extrabold  sm:text-3xl md:text-5xl">
              I'm Khalid Hossain.
            </h1>
            <h2 className=" text-purple-500 dark:text-purple-500 my-2 px-4 text-4xl font-extrabold  sm:text-5xl md:text-6xl xl:text-8xl">
              Fullstack Developer
            </h2>
          </div>
          {/* Hero content ======================== */}
          <div
            id="hero-content"
            className="flex flex-col justify-center items-center mb-16"
          >
            {/* Hero image and slogans side by side */}
            <div className="flex flex-col-reverse items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0 lg:space-x-12">
              <div className="flex flex-col md:items-end my-4 gap-8">
                <p className="slogan text-base font-medium text-slate-600 dark:text-gray-100 md:text-xl bg-slate-50 dark:bg-gray-800 p-6  rounded-lg shadow-md dark:shadow-2xl">
                  "Determined to Deliver, Passionate to Innovate - Expert in
                  Next.js, TypeScript and Node.js 🚀"
                </p>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                  <button className="">
                    <Link
                      href="#work"
                      className=" transition-all mx-auto px-4 py-2 md:px-6 md:py-4 md:text-lg hover:bg-purple-600 hover:text-slate-100 border-gray-400 border font-semibold  hover:px-8 rounded-md  my-6 -tracking-tight"
                    >
                      View Projects🛠️
                    </Link>
                  </button>
                  <button className="">
                    <Link
                      href="mailto:dev.khalidhossain@gmail.com"
                      className=" transition-all mx-auto px-4 py-2 md:px-6 md:py-4 md:text-lg bg-indigo-600 text-slate-100 font-semibold  hover:px-8 rounded-md  my-6 -tracking-tight"
                    >
                      Let's collaborate.
                    </Link>
                  </button>
                </div>
              </div>
              {/* Hero img  */}
              <div className="lg:w-128 xl:w-128 sm:min-w-max w-96 rounded-full shadow-lg overflow-hidden ">
                <Image
                  src={hero}
                  alt="Khalid Hossain - Image"
                  className="hero-img relative"
                  layout="responsive"
                />
              </div>
            </div>

            {/* Call-to-action buttons */}
            {/* <div className="call-to-action mt-8 flex w-full flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mt-12 md:absolute bottom-8 z-10 gap-1">
              <button>
                <Link
                  href="#"
                  className="transition-all px-6 py-2 text-lg bg-blue-500 text-slate-100  hover:px-8 rounded-md"
                >
                  View Projects.
                </Link>
              </button>
              <button>
                <Link
                  href="mailto:dev.khalidhossain@gmail.com"
                  className="transition-all px-6 py-2 text-md hover:bg-black text-gray-100 border hover:px-8 rounded-md"
                >
                  Email
                </Link>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </header>
  );
}
