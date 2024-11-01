"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Briefcase,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Input } from "components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import { Textarea } from "components/ui/textarea";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook />,
      href: "https://www.facebook.com/badhon252",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/khalidhossainbadhon/",
    },
    { name: "GitHub", icon: <Github />, href: "https://github.com/badhon252/" },
    {
      name: "Twitter",
      icon: <Twitter />,
      href: "https://twitter.com/badhon252",
    },
  ];

  const freelanceLinks = [
    // { name: "Upwork", href: "https://www.upwork.com/freelancers/badhon252" },
    { name: "Fiverr", href: "https://www.fiverr.com/fiverr/dev_khalid_007" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b bg-slate-50 to-secondary/20 dark:bg-slate-900 dark:text-slate-50 dark:to-secondary/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <main className="container relative mx-auto min-h-screen px-4 py-12 md:py-24">
        <motion.h1
          className="mb-12 text-center text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          Let&apos;s Connect
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="size-5 text-primary dark:text-white" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <AnimatePresence>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center text-green-500"
                      >
                        Message sent successfully!
                      </motion.div>
                    ) : (
                      <Button type="submit" className="w-full text-white">
                        Send Message
                      </Button>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <Tabs defaultValue="social" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-200 dark:bg-slate-950">
                <TabsTrigger
                  value="social"
                  className="data-[state=active]:bg-gray-100 data-[state=active]:text-black dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-white"
                >
                  Social Media
                </TabsTrigger>
                <TabsTrigger
                  value="freelance"
                  className="data-[state=active]:bg-gray-100 data-[state=active]:text-black dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-white"
                >
                  Freelance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="social">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 ">
                      {socialLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full"
                          >
                            {link.icon}
                            <span className="ml-2">{link.name}</span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="freelance">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="md:space-y-4">
                      {freelanceLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:underline dark:text-indigo-200"
                          >
                            <Briefcase className="size-4" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardContent className="p-6">
                <p className="text-md leading-relaxed ">
                  I&apos;m always open to discussing new opportunities,
                  collaborating on exciting projects, or simply exchanging
                  ideas. Feel free to reach out via{" "}
                  <Link
                    href="mailto:dev.khalidhossain@gmail.com"
                    className="text-primary dark:text-blue-400 hover:underline"
                  >
                    email
                  </Link>{" "}
                  or connect with me on{" "}
                  <Link
                    href="https://www.linkedin.com/in/khalidhossainbadhon/"
                    className="text-primary dark:text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </Link>
                  . Let&apos;s create something extraordinary together!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="mailto:dev.khalidhossain@gmail.com"
            className="inline-flex items-center gap-2 text-primary hover:underline dark:text-indigo-500 font-semibold"
          >
            <Mail className="size-4" />
            dev.khalidhossain@gmail.com
          </Link>
        </motion.div>

        <motion.p
          className="mt-4 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          All rights reserved by{" "}
          <Link
            href="https://github.com/badhon252"
            className="text-primary underline dark:text-indigo-500"
          >
            @badhon252
          </Link>
        </motion.p>
      </main>

      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="size-4" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </footer>
  );
}
