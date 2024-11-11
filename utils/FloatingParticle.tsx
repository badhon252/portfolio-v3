"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useWindowSize } from "react-use";

export const FloatingParticle = ({ color }: { color: string }) => {
  const { width, height } = useWindowSize(); // Get window dimensions
  const x = useMotionValue(Math.random() * width);
  const y = useMotionValue(Math.random() * height);
  const size = Math.random() * 10 + 5;

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        x.set(Math.random() * window.innerWidth);
        y.set(Math.random() * window.innerHeight);
      },
      Math.random() * 5000 + 3000,
    );

    return () => clearInterval(intervalId);
  }, [x, y]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        x,
        y,
        width: size,
        height: size,
        backgroundColor: color,
        opacity: 0.6,
      }}
      transition={{ duration: 100, ease: "easeInOut" }}
    />
  );
};
