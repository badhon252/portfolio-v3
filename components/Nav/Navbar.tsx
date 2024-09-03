// Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 md:px-8 bg-slate-200 dark:bg-gray-800 rounded-md sticky top-0 z-50">
      {/* Logo  */}
      <div className="logo text-2xl ">
        <Link href="#">
          <h3 className="libre-barcode-128-text-regular text-indigo-600 font-black text-6xl ">
            KHB
          </h3>
        </Link>
      </div>
      <div className="flex justify-end items-center md:flex-row flex-row-reverse gap-4">
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center`}
        >
          <ul className="nav flex flex-col items-center justify-evenly md:flex-row md:space-x-6">
            <li className="nav-link gap-4 text-xl md:my-0  text-gray-800 dark:text-gray-100">
              <Link href="#experience">Experience</Link>
            </li>
            <li className="nav-link gap-4 text-xl md:my-0 text-gray-800 dark:text-gray-100">
              <Link href="/works">Work</Link>
            </li>
            <li className="nav-link gap-4 text-xl md:my-0 text-gray-800 dark:text-gray-100">
              <Link href="#about">About</Link>
            </li>
            <li className="nav-link gap-4 text-xl md:my-0 text-gray-800 dark:text-gray-100">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Theme toggle button */}
        <div className="flex justify-center items-center gap-2">
          <div className="nav-link my-2 text-xl md:my-0 text-gray-800 dark:text-gray-100 border-indigo-500 border rounded-md">
            <Link
              href="https://docs.google.com/document/d/1vb8WyJPbrLfE5a5NOw4y0TK2mAZ7gEllx0K4ptzV6O4/edit?usp=sharing"
              className="px-4 py-6 resume"
            >
              Resume
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
