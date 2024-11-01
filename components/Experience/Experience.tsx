"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Download, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { ScrollArea } from "components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "components/ui/tooltip";

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
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const terminalRef = useRef<HTMLPreElement>(null);

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company);
    setTypedText("");
    setCurrentTextIndex(0);
  };

  useEffect(() => {
    const experience = experienceDetails.find(
      (exp) => exp.companyName === selectedCompany,
    );
    if (!experience) return;

    const textToType = `$ cat ${experience.companyName
      .toLowerCase()
      .replace(/\s+/g, "-")}.txt\n\n${experience.jobTitle}\n${
      experience.timePeriod
    }\n\n${experience.responsibilities
      .map((resp, index) => `${index + 1}. ${resp}`)
      .join("\n\n")}`;

    if (currentTextIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType[currentTextIndex]);
        setCurrentTextIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [selectedCompany, currentTextIndex]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [typedText]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = experienceDetails.findIndex(
      (exp) => exp.companyName === selectedCompany,
    );

    if (e.key === "ArrowUp" && currentIndex > 0) {
      // Check if the previous index is within bounds
      const previousExperience = experienceDetails[currentIndex - 1];
      if (previousExperience) {
        handleCompanyClick(previousExperience.companyName);
      }
    } else if (
      e.key === "ArrowDown" &&
      currentIndex < experienceDetails.length - 1
    ) {
      // Check if the next index is within bounds
      const nextExperience = experienceDetails[currentIndex + 1];
      if (nextExperience) {
        handleCompanyClick(nextExperience.companyName);
      }
    }
  };

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-gradient-to-b y-12 bg-slate-50 dark:bg-slate-800"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <section id="experience" className="container mx-auto px-4 md:px-6 ">
        <h1 className="mb-12 text-center text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl ">
          &lt;Experiences /&gt;
        </h1>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <Card className=" shadow-lg bg-slate-100 dark:bg-slate-800 ">
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
                    className="w-full justify-start gap-2 rounded-lg py-6 text-left dark:text-white hover:bg-bg-black hover:bg-blue-50 focus:text-blue-500"
                    onClick={() => handleCompanyClick(experience.companyName)}
                  >
                    <ChevronRight
                      className={`size-4 transition-transform ${
                        selectedCompany === experience.companyName
                          ? "rotate-90 text-blue-600"
                          : ""
                      }`}
                    />
                    <p className="data-[state=active]:text-white">
                      {experience.companyName}
                    </p>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </Card>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCompany}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900 border-blue-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Terminal className="mr-2 size-5 text-blue-400" />
                      <span className="text-blue-400 font-mono">
                        experience.sh
                      </span>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="size-8"
                          >
                            <Download className="size-4 text-blue-400" />
                            <span className="sr-only">Download Resume</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download Resume</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <ScrollArea className="h-[400px] md:h-[500px]">
                    <pre
                      ref={terminalRef}
                      className="font-mono text-green-400 whitespace-pre-wrap break-words"
                    >
                      <code>{typedText}</code>
                    </pre>
                  </ScrollArea>
                  <div className="mt-4 h-4 w-2 bg-green-400 animate-pulse" />
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
