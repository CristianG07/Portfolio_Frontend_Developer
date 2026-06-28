// data
import { ServicesInfo } from "../../data";
// components
import Title from "../ui/Title";
import CardService from "../ui/CardService";
import GlareHover from "../reactbits/GlareHover";
import { motion } from "motion/react";

export default function Services() {
  return (
    <section className="content_section text-center" id="services">
      <div className="mb-16">
        <Title text="My Services" />

        <p className="subtitle">
          Providing high-quality frontend solutions tailored to create fast,
          scalable, and engaging digital experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ServicesInfo.map(({ id, name, description, IconComponent }) => (
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
          >
            <GlareHover key={id} className="h-full">
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
