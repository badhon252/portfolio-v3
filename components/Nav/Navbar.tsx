// Navbar.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "Assets/favicon/android-chrome-192x192.png";
import ThemeToggle from "../Theme/ThemeToggle";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the mobile menu overlay
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <header className="md:px-8 bg-slate-100 dark:bg-gray-800 sticky top-0 z-50 shadow-sm shadow-gray-300 dark:shadow-gray-600">
      {/* Logo */}
      <section className="container mx-auto flex items-center justify-between px-4 py-2 md:px-8">
        <div className="logo basis-5/12">
          <Link href="/">
            <Image src={logo} alt="KHB" width={40} />
          </Link>
        </div>

        <div className="flex md:justify-between items-center  justify-end basis-7/12">
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Navigation links for larger screens */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <ul className="nav flex flex-row items-center">
              <li className="nav-link text-lg text-gray-800 dark:text-gray-100">
                <Link href="/works">Work</Link>
              </li>
              <li className="nav-link text-lg text-gray-800 dark:text-gray-100">
                <Link href="#about">About</Link>
              </li>
              <li className="nav-link text-lg text-gray-800 dark:text-gray-100">
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <Link
                  href="https://docs.google.com/document/d/1vb8WyJPbrLfE5a5NOw4y0TK2mAZ7gEllx0K4ptzV6O4/edit?usp=sharing"
                  className="text-lg text-slate-900 dark:text-gray-100  hover:bg-indigo-500 border border-indigo-500 rounded-md px-4 hover:px-6 py-2 transition-all"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>

          {/* Navigation overlay for mobile screens */}
          <motion.nav
            className={`${
              isOpen ? "flex" : "hidden"
            } fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex flex-col items-center justify-center`}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="nav flex flex-col items-center justify-center ">
              <li className="nav-link text-2xl text-white">
                <Link href="/works" onClick={() => setIsOpen(false)}>
                  Work
                </Link>
              </li>
              <li className="nav-link text-2xl text-white">
                <Link href="#about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li className="nav-link text-2xl text-white">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/18Q6N1RkN8kGTEC-OgnEYQxNt77Nx5dF8/view?usp=sharing"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  className="text-2xl text-white bg-indigo-500 border border-white rounded-md p-2"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* Theme toggle - remains visible */}
          <div className="md:flex justify-center items-center pb-2">
            <ThemeToggle />
          </div>
        </div>
      </section>
    </header>
  );
}
