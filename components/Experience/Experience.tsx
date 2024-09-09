"use client";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { useState } from "react";
import "styles/style.css";

// Data structure to hold experience details
interface ExperienceDetails {
  companyName: string;
  jobTitle: string;
  timePeriod: string;
  responsibilities: string[];
}

// Array of job experiences for each company
const experienceDetails: ExperienceDetails[] = [
  {
    companyName: "Babylon Resource ltd",
    jobTitle: "Software Engineer",
    timePeriod: "March 2022 - September 2023",
    responsibilities: [
      "Developed and maintained web applications using modern JavaScript frameworks.",
      "Collaborated with cross-functional teams to deliver projects within tight deadlines.",
      "Improved application performance and ensured code quality through testing.",
      "Mentored junior developers and provided code reviews.",
    ],
  },
  {
    companyName: "Freelance",
    jobTitle: "Full-stack Developer",
    timePeriod: "September 2023 - present",
    responsibilities: [
      "Worked on various freelance projects, delivering end-to-end solutions.",
      "Specialized in React, Node.js, and PostgreSQL to create full-stack applications.",
      "Provided consultation services to clients, focusing on performance optimization.",
      "Maintained long-term relationships with clients, ensuring their satisfaction.",
    ],
  },
];

export default function Experience() {
  // State to keep track of which company's job description is currently open
  const [selectedCompany, setSelectedCompany] = useState<string>(
    experienceDetails[0]?.companyName || "", // Default to an empty string if experienceDetails is undefined or empty
  );

  // Function to handle company clicks and expand the corresponding job description
  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <main className="md:min-h-screen mx-auto md:flex md:items-center bg-gradient-to-t from-slate-100 to-cyan-200 dark:text-gray-100 dark:bg-gradient-to-t dark:from-slate-800 dark:to-gray-950 text-slate-700 py-12">
      {/* Main container for the experience section */}
      <section
        id="experience"
        className="sm:w-12/12 mx-auto flex flex-col justify-center md:w-4/6 xl:w-3/6 container text-slate-700 dark:text-gray-200"
      >
        {/* Section title */}
        <h1 className="h1 text-bold mb-12 text-center text-4xl font-black md:text-6xl lg:text-8xl">
          Experiences
        </h1>

        {/* Experience layout */}
        <div className="experience flex flex-wrap">
          {/* Sidebar: List of companies */}
          <div className="md:basis-1/3 text-lg font-semibold">
            <ul className="company mx-8">
              {experienceDetails.map((experience) => (
                <li
                  key={experience.companyName} // Unique key for each list item
                  className={` rounded-lg py-2 md:px-4 my-4 text-base cursor-pointer ${
                    selectedCompany === experience.companyName
                      ? "bg-teal-300 dark:text-slate-800" // Highlight the selected company
                      : ""
                  }`}
                  onClick={() => handleCompanyClick(experience.companyName)} // Handle click to show job description
                >
                  <>{experience.companyName}</>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content: Job Description */}
          <div
            id="jobDescription"
            className="md:basis-2/3 border-l-2 border-slate-100 px-8"
          >
            {experienceDetails.map(
              (experience) =>
                selectedCompany === experience.companyName && (
                  <motion.div
                    key={experience.companyName}
                    initial={{ opacity: 0, y: -10 }} // Animation starts from here (hidden)
                    animate={{ opacity: 1, y: 0 }} // Animates to visible and moves into place
                    transition={{ duration: 0.5 }} // Duration of the animation
                  >
                    {/* Job title and time period */}
                    <h2 className="text-xl">{experience.jobTitle}</h2>
                    <p className="text-sm text-indigo-500">
                      {experience.timePeriod}
                    </p>

                    {/* Responsibilities list */}
                    <ul className="my-4 text-slate-700 dark:text-slate-300">
                      {experience.responsibilities.map(
                        (responsibility, index) => (
                          <li
                            key={index}
                            className="experience-details my-4 text-slate-600 dark:text-slate-400"
                          >
                            <article>{responsibility}</article>
                          </li>
                        ),
                      )}
                    </ul>
                  </motion.div>
                ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
