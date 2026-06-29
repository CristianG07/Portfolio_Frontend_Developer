import fadeIn from "../../animations/Animations";
import ShinyText from "../reactbits/ShinyText";
import { motion } from "motion/react";

export default function Title({ text, classNameTitle, classNameLine }) {
  return (
    <motion.div
      initial="hidden"
      variants={fadeIn("up", 0.3)}
      whileInView={"show"}
    >
      <h2 className={`text-4xl font-bold ${classNameTitle}`}>
        <ShinyText text={text} />
      </h2>
      <span
        className={`inline-block w-20 h-1 rounded-full bg-white ${classNameLine}`}
      />
    </motion.div>
  );
}
