import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="
        relative w-14 h-7
        rounded-full
        flex items-center
        px-1
        bg-gray-200 dark:bg-slate-700
        transition-colors duration-300
        shadow-inner
      "
    >
      {/* Thumb deslizante */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="
          w-6 h-6 rounded-full 
          bg-white dark:bg-slate-900 
          shadow-md absolute
        "
        style={{
          left: theme === "light" ? "2px" : "calc(100% - 28px)",
        }}
      >
        {/* Ícono interno animado */}
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 45 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center text-yellow-500"
            >
              <Sun size={14} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0.7, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: -45 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center text-blue-300"
            >
              <Moon size={14} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
