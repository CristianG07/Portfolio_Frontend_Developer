import { Code } from "../icons/Code";
// data
import { SkillsInfo } from "../../data";
// components
import Title from "../ui/Title";
import CardSkill from "../ui/CardSkill";
import GlareHover from "../reactbits/GlareHover";
import { motion } from "motion/react";
import fadeIn from "../../animations/Animations";

export default function Skills() {
  return (
    <section className="w-11/12 content_section" id="skills">
      <div className="text-center mb-16">
        <Title text="My Skills" />
        <motion.p
          initial="hidden"
          variants={fadeIn("up", 0.4)}
          whileInView={"show"}
          className="subtitle"
        >
          Technologies and tools I use to build modern, scalable, and
          high-performance web applications.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {SkillsInfo.map(({ id, IconComponent, title, description, skills }) => (
          <motion.div
            initial="hidden"
            variants={fadeIn("up", id * 0.25, 0.9)}
            whileInView={"show"}
            whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            whileTap={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            key={id}
          >
            <GlareHover>
              <CardSkill
                IconComponent={IconComponent}
                title={title}
                description={description}
                skills={skills}
              />
            </GlareHover>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        variants={fadeIn("up", 0.9)}
        whileInView={"show"}
        className="text-center mt-14 max-w-fit mx-auto space-y-2.5"
      >
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Code className="text-2xl text-blue-bright" />
          <span className="inline-block">
            Always learning. Always building. Always improving.
          </span>
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-blue-bright/70 to-transparent" />
      </motion.div>
    </section>
  );
}
