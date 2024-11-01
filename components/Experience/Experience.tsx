"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { ScrollArea } from "components/ui/scroll-area";

interface ExperienceDetails {
  companyName: string;
  jobTitle: string;
  timePeriod: string;
  responsibilities: string[];
}

const experienceDetails: ExperienceDetails[] = [
  {
    companyName: "Babylon Resource ltd",
    jobTitle: "Programming Instructor",
    timePeriod: "November 2023 - June 2024",
    responsibilities: [
      "Delivered Comprehensive Training: Led engaging and interactive practical Python programming courses, passionately teaching a diverse group of students and equipping them with essential skills in Python for real-world applications.",
      "Developed Custom Curricula: Created and refined course materials to meet the evolving needs of students, ensuring a deep understanding of Python fundamentals, object-oriented programming, and advanced concepts.",
      "Achieved High Student Success Rates: Fostered an interactive learning environment, resulting in exceptional student performance and high course completion rates. Received positive feedback for making complex topics accessible and engaging.",
      "Mentored Aspiring Developers: Provided ongoing support and mentorship to students, helping them build confidence in their coding abilities and guiding them in their journey towards becoming proficient Python developers.",
    ],
  },
  {
    companyName: "Freelance",
    jobTitle: "Full-stack Developer",
    timePeriod: "September 2023 - Present",
    responsibilities: [
      "Specialized in React, Next.js, Node.js, and TypeScript to create full-stack applications.",
      "Provided consultation services to clients, focusing on performance optimization.",
      "Maintained long-term relationships with clients, ensuring their satisfaction.",
    ],
  },
];

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState<string>(
    experienceDetails[0]?.companyName || "",
  );

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-50 to-secondary/20 py-12 dark:from-slate-950 dark:to-slate-900 dark:text-white">
      <section id="experience" className="container mx-auto px-4 md:px-6">
        <h1 className="mb-12 text-center text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-white">
          Experiences
        </h1>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <Card className="h-fit overflow-hidden">
            <ScrollArea className="h-[300px] md:h-[400px]">
              <div className="p-4">
                {experienceDetails.map((experience) => (
                  <Button
                    key={experience.companyName}
                    variant={
                      selectedCompany === experience.companyName
                        ? "default"
                        : "ghost"
                    }
                    className="w-full justify-start gap-2 rounded-lg py-6 text-left hover:bg-slate-600 focus:text-slate-100"
                    onClick={() => handleCompanyClick(experience.companyName)}
                  >
                    <ChevronRight
                      className={`size-4 transition-transform ${
                        selectedCompany === experience.companyName
                          ? "rotate-90"
                          : ""
                      }`}
                    />
                    {experience.companyName}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </Card>
          <AnimatePresence mode="wait">
            {experienceDetails.map(
              (experience) =>
                selectedCompany === experience.companyName && (
                  <motion.div
                    key={experience.companyName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold">
                          {experience.jobTitle}
                        </h2>
                        <p className="mb-4 text-sm text-muted-foreground">
                          {experience.timePeriod}
                        </p>
                        <ul className="space-y-4">
                          {experience.responsibilities.map(
                            (responsibility, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.1,
                                }}
                                className="flex items-start gap-2"
                              >
                                <ChevronRight className="mt-1 size-4 shrink-0 text-primary" />
                                <p className="text-sm">{responsibility}</p>
                              </motion.li>
                            ),
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
