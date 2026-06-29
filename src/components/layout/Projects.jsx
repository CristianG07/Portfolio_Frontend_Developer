import { motion } from "motion/react";
// components
import Button from "../ui/Button";
import Title from "../ui/Title";
import CardProject from "../ui/CardProject";
import { ProjectsInfo } from "../../data";
import fadeIn from "../../animations/Animations";

export default function Projects() {
  return (
    <section className="content_section" id="projects">
      <div className="text-center mb-16">
        <Title text="Featured Projects" />

        <motion.p
          initial="hidden"
          variants={fadeIn("up", 0.4)}
          whileInView={"show"}
          className="subtitle"
        >
          A selection of projects that showcase my skills, creativity, and
          experience in building modern web applications.
        </motion.p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectsInfo.map(
            ({ id, img, title, description, tech, demo_link, github_link }) => (
              <motion.div
                initial="hidden"
                variants={fadeIn("up", 0.3 * id)}
                whileInView={"show"}
                className="grid"
              >
                <CardProject
                  key={id}
                  img={img}
                  title={title}
                  description={description}
                  tech={tech}
                  demo_link={demo_link}
                  github_link={github_link}
                />
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
