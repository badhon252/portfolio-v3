"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <>
      <motion.header
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" />
        <nav className="container mx-auto p-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="shrink-0">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                KHB
              </span>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block text-slate-950 dark:text-slate-50">
            <div className="flex items-center space-x-4">
              <Link href="/works" onClick={closeMenu}>
                Work
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
          {/* Right Side Actions */}
          <div className="hidden md:block">
            <div className="flex items-center">
              <Link
                href="https://docs.google.com/document/d/1vb8WyJPbrLfE5a5NOw4y0TK2mAZ7gEllx0K4ptzV6O4/edit?usp=sharing"
                className=" text-slate-50 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium "
              >
                Resume
              </Link>
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-50 dark:bg-gray-900 overflow-y-auto text-gray-800 dark:text-slate-50">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="text-slate-800 dark:text-slate-50 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="grow flex flex-col items-center justify-center space-y-8">
              <Link href="/works" onClick={closeMenu}>
                Work
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
              <Link
                href="https://docs.google.com/document/d/1vb8WyJPbrLfE5a5NOw4y0TK2mAZ7gEllx0K4ptzV6O4/edit?usp=sharing"
                onClick={closeMenu}
                className="px-3 py-2 rounded-md text-base font-medium  bg-indigo-600 hover:bg-indigo-700 transition-colors text-slate-50"
              >
                Resume
              </Link>
            </nav>

            <div className="p-4 flex justify-center">
              <button
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
