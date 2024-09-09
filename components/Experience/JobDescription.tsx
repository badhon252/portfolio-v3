"use client";
import Link from "next/link";
import { useState } from "react";
import "styles/style.css";

interface ExperienceDetails {
  companyName: string;
  jobTitle: string;
  timePeriod: string;
  responsibilities: string[];
}

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
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const handleCompanyClick = (company: string) => {
    if (selectedCompany === company) {
      setSelectedCompany(null); // Collapse if clicked again
    } else {
      setSelectedCompany(company); // Show selected company's job description
    }
  };

  return (
    <main className="mx-auto bg-gradient-to-t from-slate-100 to-cyan-200 dark:text-gray-100 dark:bg-gradient-to-t dark:from-slate-800 dark:to-gray-950 text-slate-700 py-12">
      <section
        id="experience"
        className="sm:w-12/12 mx-auto flex flex-col justify-center md:w-4/6 xl:w-3/6 container text-slate-700 dark:text-gray-200"
      >
        <h1 className="h1 text-bold mb-12 text-center text-4xl font-black md:text-6xl lg:text-8xl">
          Experiences
        </h1>

        <div className="experience flex flex-wrap">
          {/* Company List */}
          <div className="md:basis-1/3 text-lg font-semibold">
            <ul className="company mx-8">
              {experienceDetails.map((experience) => (
                <li
                  key={experience.companyName}
                  className="brlbd rounded-lg py-2 my-4 text-base cursor-pointer"
                  onClick={() => handleCompanyClick(experience.companyName)}
                >
                  <Link href="#">{experience.companyName}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Description */}
          <div
            id="jobDescription"
            className="md:basis-2/3 border-l-2 border-slate-100 px-8"
          >
            {experienceDetails.map(
              (experience) =>
                selectedCompany === experience.companyName && (
                  <div key={experience.companyName}>
                    <h2 className="text-xl">{experience.jobTitle}</h2>
                    <p className="text-sm text-indigo-500">
                      {experience.timePeriod}
                    </p>
                    <ul className="my-4 text-slate-700 dark:text-slate-300">
                      {experience.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index} className="experience-details my-4">
                            <article>{responsibility}</article>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
