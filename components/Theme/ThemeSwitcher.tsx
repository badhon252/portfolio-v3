import { motion } from "framer-motion";
import toggleTheme from "./ThemeToggle";

const themeTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

function ThemeSwitcher() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={themeTransition}
    >
      <button onClick={toggleTheme}>Toggle Dark/Light Mode</button>
    </motion.div>
  );
}

export default ThemeSwitcher;
