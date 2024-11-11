// eslint-disable-next-line @typescript-eslint/no-unused-vars

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp, ChevronRight, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { ScrollArea } from "components/ui/scroll-area";
import { useMediaQuery } from "hooks/use-media-query";

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
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLPreElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company);
    setTypedText("");
    setCurrentTextIndex(0);
    setIsTyping(true);
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
    } else {
      setIsTyping(false);
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
      const previousCompany = experienceDetails[currentIndex - 1];
      if (previousCompany) {
        handleCompanyClick(previousCompany.companyName);
      }
    } else if (
      e.key === "ArrowDown" &&
      currentIndex < experienceDetails.length - 1
    ) {
      const nextCompany = experienceDetails[currentIndex + 1];
      if (nextCompany) {
        handleCompanyClick(nextCompany.companyName);
      }
    }
  };

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <section id="experience" className="w-full max-w-7xl mx-auto">
        <h1 className="mb-12 text-center text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-slate-800 dark:text-slate-200">
          &lt;Experiences /&gt;
        </h1>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <Card className="shadow-lg bg- dark:bg-slate-800 border-slate-200 dark:border-slate-700 ">
            <ScrollArea className="h-[200px] md:h-[400px]">
              <div className="p-4 space-y-2">
                {experienceDetails.map((experience) => (
                  <Button
                    key={experience.companyName}
                    variant={
                      selectedCompany === experience.companyName
                        ? "ghost" // Use "ghost" instead of "primary"
                        : "ghost"
                    }
                    className="w-full justify-start gap-2 rounded-lg py-4 text-left transition-all duration-200 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-700 "
                    onClick={() => handleCompanyClick(experience.companyName)}
                  >
                    <ChevronRight
                      className={`size-4 transition-transform duration-200 ${
                        selectedCompany === experience.companyName
                          ? "rotate-90 text-blue-600 dark:text-blue-400"
                          : ""
                      }`}
                    />
                    <p
                      className={`${
                        selectedCompany === experience.companyName
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {experience.companyName}
                    </p>
                  </Button>
                ))}
              </div>
            </ScrollArea>
            {!isMobile && (
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <ArrowUp className="size-4 mr-1" /> Previous
                </div>
                <div className="flex items-center">
                  Next <ArrowDown className="size-4 ml-1" />
                </div>
              </div>
            )}
          </Card>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCompany}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-slate-900 border-blue-500/20 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
                    <div className="flex items-center">
                      <Terminal className="mr-2 size-5 text-blue-400" />
                      <span className="text-blue-400 font-mono text-sm">
                        experience.sh
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="size-3 rounded-full bg-red-500" />
                      <div className="size-3 rounded-full bg-yellow-500" />
                      <div className="size-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <ScrollArea className="h-[400px] md:h-[500px]">
                    <pre
                      ref={terminalRef}
                      className="font-mono text-sm text-green-400 p-4 whitespace-pre-wrap break-words"
                    >
                      <code>{typedText}</code>
                    </pre>
                  </ScrollArea>
                  <div className="p-4 border-t border-slate-700 flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <div
                      className={`h-4 w-2 bg-green-400 ${
                        isTyping ? "animate-pulse" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
