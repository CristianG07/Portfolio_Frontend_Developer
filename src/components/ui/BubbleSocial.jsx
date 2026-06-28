import { Icon } from "@iconify-icon/react";
import { motion } from "motion/react";

export default function BubbleSocial({ IconComponent, className }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        color: "#0ea5e9",
        transition: { duration: 0.25 },
      }}
      whileTap={{ scale: 1.15 }}
      transition={{ duration: 0.25 }}
      className={`flex text-3xl p-3 rounded-full bg-linear-30 from-transparent via-blue-neon/5 to-blue-electric/10 shadow shadow-blue-electric 
         ${className}`}
    >
      <IconComponent />
    </motion.div>
  );
}
