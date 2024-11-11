"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingUI() {
  const [stage, setStage] = useState(0);
  const fullName = ["Khalid", "Hossain", "Badhon"];
  const initials = "KHB";

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prevStage) => (prevStage < 4 ? prevStage + 1 : prevStage));
    }, 100); // Change stage every 1.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold space-x-4">
          {fullName.map((part, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{
                opacity: stage > index ? 0 : 1,
                y: stage > index ? -20 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {part}
            </motion.span>
          ))}
        </div>
        <div className="text-6xl md:text-8xl font-bold mt-4 h-24 relative">
          {initials.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: stage > index ? 1 : 0,
                y: stage > index ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="inline-block"
              style={{
                color: ["#ff6b6b", "#4ecdc4", "#45b7d1"][index],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
