"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent) => {
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
        willChange: "transform", // optimize animation rendering
      }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
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

export default MagneticCard;
