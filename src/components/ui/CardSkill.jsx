import { Icon } from "@iconify-icon/react";
import BubbleIcon from "./BubbleIcon";
import { motion } from "motion/react";

export default function CardSkill({
  IconComponent,
  title,
  description,
  skills,
}) {
  return (
    <div className="bg-card space-y-6 p-5 md:p-8 rounded-card border border-blue-bright shadow shadow-blue-bright select-none">
      <div className="flex flex-row items-center gap-5">
        <BubbleIcon IconComponent={IconComponent} />
        <div className="space-y-3">
          <div className="space-y-1.5">
            <h4 className="text-xl">{title}</h4>
            <div className="h-1.5 w-20 rounded-full bg-blue-bright" />
          </div>
          <p className="text-gray-500 text-xs md:text-base text-balance">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {skills.map(({ id, IconComponent, name }) => (
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            key={id}
            className="flex items-center gap-2 px-5 py-2 border border-blue-bright rounded-card"
          >
            <div className="flex md:text-3xl">
              <IconComponent />
            </div>
            <span>{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
