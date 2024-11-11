/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { CaseStudyProp } from "components/types/CaseStudy";

import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { ImageCarousel } from "hooks/ImageCarousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  delay?: number;
}> = ({ title, children, delay = 0 }) => (
  <motion.section
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-semibold">{title}</h2>
    {children}
  </motion.section>
);

const TechStack: React.FC<{ technologies: string[] }> = ({ technologies }) => (
  <div className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <Badge
        key={tech}
        className="bg-slate-50 hover:bg-slate-100  dark:bg-slate-950 px-4 py-2 rounded-lg"
      >
        {tech}
      </Badge>
    ))}
  </div>
);

const Challenge: React.FC<{
  challenges: string[];
  solution: string[];
}> = ({ challenges, solution }) => (
  <Card>
    <CardContent className="p-6 space-y-4">
      <div>
        <h3 className="text-lg font-bold text-red-500">Challenge</h3>
        {challenges.map((data) => (
          <li key={data} className="text-muted-foreground">
            {data}
          </li>
        ))}
      </div>
      <div>
        {" "}
        <h4 className="text-md font-bold text-green-500">Solution:</h4>
        {solution.map((data) => (
          <li key={data} className="text-muted-foreground">
            {data}
          </li>
        ))}
      </div>
    </CardContent>
  </Card>
);

// TODO: fix image carousel issue and change layout ui
export default function CaseStudy({
  caseStudyData,
}: {
  caseStudyData: CaseStudyProp;
}) {
  return (
    <div className="min-h-screen container mx-auto  p-6 md:p-12 space-y-12">
      <>
        <Section title="">
          <h1 className="text-4xl font-bold tracking-tight text-center">
            {caseStudyData.title}
          </h1>
          <p className="text-xl text-muted-foreground text-center">
            {caseStudyData.moto}
          </p>
        </Section>

        <ImageCarousel images={caseStudyData.image} />

        <Section title="Project Overview" delay={0.4}>
          <p className="text-muted-foreground">{caseStudyData.description}</p>
        </Section>

        <Section title="Technologies Used" delay={0.6}>
          <TechStack technologies={caseStudyData.stack} />
        </Section>

        <Section title="Challenges and Solutions" delay={0.8}>
          {caseStudyData.challengesAndSolutions.map((data) => {
            return (
              <Challenge
                key={data.challenge.join(",") + data.solution.join(",")}
                challenges={data.challenge}
                solution={data.solution}
              />
            );
          })}
        </Section>

        <Section title="Key Features" delay={1}>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {caseStudyData.features.map((data) => (
              <li key={data}>{data}</li>
            ))}
          </ul>
        </Section>

        <Section title="Results and Impact" delay={1.2}>
          <p className="text-muted-foreground">
            {caseStudyData.resultsAndImpact}
          </p>
        </Section>

        <Section title="Lessons Learned" delay={1.4}>
          <p className="text-muted-foreground">
            {caseStudyData.lessonsLearned}
          </p>
        </Section>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href={caseStudyData.url.github} target="_blank">
            <Button className="gap-2 text-slate-50">
              View Source Code
              <Github className="size-4" />
            </Button>
          </Link>
          <Link href={caseStudyData.url.live} target="_blank">
            <Button className="gap-2 text-slate-50 bg-indigo-600">
              View Live Project
              <ExternalLink className="size-4" />
            </Button>
          </Link>
        </motion.div>

        {/* <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex justify-between items-center pt-8 border-t"
        >
          <Button variant="ghost" className="gap-2">
            Previous Project
          </Button>
          <Button variant="ghost" className="gap-2">
            Next Project
          </Button>
        </motion.div> */}
      </>
    </div>
  );
}
