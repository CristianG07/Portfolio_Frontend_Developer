import fadeIn from "../../animations/Animations";
import ShinyText from "../reactbits/ShinyText";
import { motion } from "motion/react";

export default function Title({ text }) {
  return (
    <motion.div
      initial="hidden"
      variants={fadeIn("up", 0.3)}
      whileInView={"show"}
      className="grid justify-items-center gap-y-1.5 mb-5"
    >
      <h2 className={`text-4xl font-bold`}>
        <ShinyText text={text} />
      </h2>
      <span className={`inline-block w-24 h-1 rounded-full bg-white`} />
    </motion.div>
  );
}
