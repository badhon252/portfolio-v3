"use client";
// components/CustomCursor.tsx
import React, { useEffect } from "react";
import styles from "styles/CustomCursor.module.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursorElements = Array.from(
      document.querySelectorAll("[data-cursor]"),
    );
    const links = Array.from(document.querySelectorAll("a"));

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorElements.forEach((cursor) => {
        if (cursor instanceof HTMLElement) {
          cursor.style.left = `${x - cursor.clientWidth / 2}px`;
          cursor.style.top = `${y - cursor.clientHeight / 2}px`;
        }
      });
    };

    const handleMouseEnter = () => {
      document.body.classList.add(styles.cursorHover);
    };

    const handleMouseLeave = () => {
      document.body.classList.remove(styles.cursorHover);
    };

    // Add event listeners to links
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div data-cursor="0" className={styles.cursor}></div>
      <div data-cursor="1" className={styles.cursor}></div>
    </>
  );
};

export default CustomCursor;
