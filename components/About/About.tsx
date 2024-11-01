"use client";

import { motion } from "framer-motion";
import {
  CodeIcon,
  GraduationCapIcon,
  LightbulbIcon,
  RocketIcon,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { ScrollArea } from "components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <ScrollArea className="h-screen bg-slate-50 text-black dark:bg-slate-800 dark:text-slate-50">
      <section className=" px-4 py-12  md:py-24">
        <motion.div
          className="container mx-auto max-w-3xl space-y-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div className="text-center" variants={fadeIn}>
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">
              About Me
            </h1>
            <p className="mt-2 text-lg font-medium text-primary">
              &quot;Turning Ideas into Interactive Reality.&quot;💡
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  Hi, I&apos;m Khalid Hossain, a dedicated Frontend Engineer and
                  Python Instructor based in Barishal, Bangladesh. My passion
                  lies in crafting seamless, user-centric web applications using
                  the latest technologies, including Next.js, TypeScript, and
                  TailwindCSS. I&apos;m committed to delivering innovative
                  solutions that not only meet but exceed expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Tabs defaultValue="journey" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="journey">
                  <GraduationCapIcon className="mr-2 size-4" />
                  Journey
                </TabsTrigger>
                <TabsTrigger value="work">
                  <CodeIcon className="mr-2 size-4" />
                  Work
                </TabsTrigger>
                <TabsTrigger value="beyond">
                  <RocketIcon className="mr-2 size-4" />
                  Beyond
                </TabsTrigger>
                <TabsTrigger value="certifications">
                  <LightbulbIcon className="mr-2 size-4" />
                  Certifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="journey">
                <Card>
                  <CardHeader>
                    <CardTitle>My Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">
                      With a BSc in Computer Science and Engineering from the
                      Global University of Bangladesh, I&apos;ve built a solid
                      foundation in software development. Over the years,
                      I&apos;ve honed my skills through various projects and
                      roles, including my current position as a Python
                      Programming Instructor at Sheikh Russel Digital Lab. This
                      role allows me to share my knowledge and passion for
                      programming with the next generation of developers, which
                      is incredibly rewarding.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="work">
                <Card>
                  <CardHeader>
                    <CardTitle>What I Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">
                      As a self-employed Frontend Engineer, I specialize in
                      creating fast, responsive, and visually appealing web
                      applications. My expertise includes JavaScript,
                      TypeScript, React, Next.js, and TailwindCSS, among others.
                      I&apos;m particularly skilled in building environments
                      that are not only technically robust but also conducive to
                      collaboration and innovation, using tools like Husky,
                      Commitizen, and Jest.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="beyond">
                <Card>
                  <CardHeader>
                    <CardTitle>Beyond the Code</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">
                      When I&apos;m not immersed in code, I&apos;m brainstorming
                      ideas for an AI-powered SaaS product aimed at empowering
                      both technical and non-technical users. I believe in the
                      potential of technology to create meaningful impacts, and
                      I&apos;m excited about the possibilities that lie ahead as
                      I explore this new venture as a solopreneur and indie
                      hacker.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="certifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-inside list-disc space-y-2">
                      <li>
                        <Link
                          href="https://ledp.ictd.gov.bd/certificate/?regid=282683"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          Web Design and Development - WDD
                          <Badge variant="outline" className="ml-2">
                            View Certificate
                          </Badge>
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </section>
    </ScrollArea>
  );
}
