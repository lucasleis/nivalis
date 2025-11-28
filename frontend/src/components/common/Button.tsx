import { cn } from "../../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105",
    secondary:
      "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:scale-105",
  };

  const finalClass = cn(base, variants[variant], className);

  if (href)
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    );

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}
