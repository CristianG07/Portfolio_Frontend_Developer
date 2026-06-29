import { motion } from "motion/react";

export default function Button({
  href,
  children,
  className,
  download = false,
  target,
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
      transition={{ duration: 0.25 }}
      whileTap={{ scale: 1.15 }}
      href={href}
      className={`flex items-center gap-3 text-base font-medium py-3 px-5 border rounded-card border-blue-neon  shadow-blue-bright cursor-pointer ${className}`}
      download={download}
      target={target}
    >
      {children}
    </motion.a>
  );
}
