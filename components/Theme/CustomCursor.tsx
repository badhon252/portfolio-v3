"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "styles/CustomCursor.module.css";
import Link from "next/link"; // Import Link from next/link if needed

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.closest("a") ||
        target.tagName === "LINK" ||
        target.closest("Link")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.closest("a") ||
        target.tagName === "LINK" ||
        target.closest("Link")
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className={styles.cursor}
        data-cursor="0"
        animate={{
          x: position.x - 2.5,
          y: position.y - 2.5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <motion.div
        className={`${styles.cursor} ${isHovering ? styles.cursorHover : ""}`}
        data-cursor="1"
        animate={{
          x: position.x - 15,
          y: position.y - 15,
          scale: isHovering ? 4 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
