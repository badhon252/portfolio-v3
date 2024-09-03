"use client";
import { motion } from "framer-motion";
import Work from "components/Works/Works";
export default function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Work />
      </motion.div>
    </section>
  );
}
