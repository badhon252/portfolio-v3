"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import caseStudiesData from "components/CaseStudy/caseStudiesData";

// Define the MagneticCardProps interface
interface MagneticCardProps {
  project: {
    serial: number;
    title: string;
    description: string;
    image: StaticImageData;
    logo: StaticImageData;
    color: string;
    url: {
      study: string;
      github: string;
      live: string;
    };
  };
  isActive: boolean;
  onClick: () => void;
}

const MagneticCard: React.FC<MagneticCardProps> = ({
  project,
  isActive,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null); // Type the ref correctly
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouse = (event: any) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      x.set(distanceX);
      y.set(distanceY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        z: 100,
        borderColor: project?.color,
      }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      onMouseOver={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer bg-white rounded-xl overflow-hidden shadow-xl transition-colors duration-300 ${
        isActive ? "border-4" : "border"
      }`}
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          className="size-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-white rounded-full p-1">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            className="size-8"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2" style={{ color: project.color }}>
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.url.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold"
          style={{ color: project.color }}
        >
          Learn More <ArrowUpRight className="ml-1 size-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default function InteractivePortfolioShowcase() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const containerRef = useRef(null);

  return (
    <section
      className="min-h-screen bg-gray-100 dark:bg-slate-800 py-20 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-black mb-12 text-center text-gray-800 dark:text-slate-50 "
        >
          Innovative Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((project) => (
            <MagneticCard
              key={project.serial.toString()} // Convert serial to string for key
              project={project}
              isActive={activeProject === project.serial.toString()}
              onClick={() =>
                setActiveProject(
                  activeProject === project.serial.toString()
                    ? null
                    : project.serial.toString(),
                )
              }
            />
          ))}
        </div>
        {/* {caseStudiesData.map((project) => (
          <FloatingParticle
            key={`particle-${project.serial}`}
            color={project.color}
          />
        ))} */}
      </div>
      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={
                caseStudiesData[parseInt(activeProject, 10) - 1]?.image ||
                "/path/to/default.jpg"
              }
              alt={
                caseStudiesData[parseInt(activeProject, 10) - 1]?.title ||
                "/path/to/default.jpg"
              }
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="flex items-center mb-4">
              <Image
                src={
                  caseStudiesData[parseInt(activeProject, 10) - 1]?.logo ||
                  "/path/to/default.jpg"
                }
                alt={`${caseStudiesData[parseInt(activeProject, 10) - 1]
                  ?.title} logo`}
                className="size-12 mr-4"
              />
              <h2
                className="text-4xl font-bold"
                style={{
                  color:
                    caseStudiesData[parseInt(activeProject, 10) - 1]?.color,
                }}
              >
                {caseStudiesData[parseInt(activeProject, 10) - 1]?.title}
              </h2>
            </div>
            <p className="text-xl mb-6 text-gray-600">
              {caseStudiesData[parseInt(activeProject, 10) - 1]?.description}
            </p>
            <div className="flex gap-4">
              <Link
                href={
                  caseStudiesData[parseInt(activeProject, 10) - 1]?.url.study ||
                  "/"
                }
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full font-bold text-white"
                style={{
                  backgroundColor:
                    caseStudiesData[parseInt(activeProject, 10) - 1]?.color,
                }}
              >
                Case Study <ArrowUpRight className="ml-2 size-5" />
              </Link>
              <a
                href={
                  caseStudiesData[parseInt(activeProject, 10) - 1]?.url.live
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full font-bold text-white border"
              >
                Preview <ArrowUpRight className="ml-2 size-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
