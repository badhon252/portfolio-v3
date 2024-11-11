"use client";
import { motion } from "framer-motion";
import InteractivePortfolioShowcase from "components/Works/ProjectShowcase";
export default function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <InteractivePortfolioShowcase />
      </motion.div>
    </section>
  );
}
