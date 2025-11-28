/*import { motion } from "framer-motion";*/

interface Props {
  title: string;
  highlight: string;
  description?: string;
}

export default function SectionTitle({ title, highlight, description }: Props) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {title} <span className="text-orange-500">{highlight}</span>
      </h2>

      <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full mb-8" />

      {description && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
