// data
import { ServicesInfo } from "../../data";
// components
import Title from "../ui/Title";
import CardService from "../ui/CardService";
import GlareHover from "../reactbits/GlareHover";
import { motion } from "motion/react";
import fadeIn from "../../animations/Animations";

export default function Services() {
  return (
    <section className="content_section text-center" id="services">
      <div className="mb-16">
        <Title text="My Services" />

        <motion.p
          initial="hidden"
          variants={fadeIn("up", 0.4)}
          whileInView={"show"}
          className="subtitle"
        >
          Providing high-quality frontend solutions tailored to create fast,
          scalable, and engaging digital experiences.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ServicesInfo.map(({ id, name, description, IconComponent }) => (
          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.35 * id)}
            whileInView={"show"}
            whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            whileTap={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
            key={id}
          >
            <GlareHover className="h-full">
              <CardService
                title={name}
                IconComponent={IconComponent}
                description={description}
              />
            </GlareHover>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
