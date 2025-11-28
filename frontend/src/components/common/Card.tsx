import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface CardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Card({ children, delay = 0, className }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
