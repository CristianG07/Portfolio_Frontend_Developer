// components
import Button from "../ui/Button";
import Title from "../ui/Title";
import CardProject from "../ui/CardProject";
import { ProjectsInfo } from "../../data";
import AnimatedContent from "../reactbits/AnimatedContent";

export default function Projects() {
  return (
    <section className="content_section" id="projects">
      <div className="text-center mb-20">
        <Title text="Featured Projects" />
        <AnimatedContent delay={0.2}>
          <p className="subtitle">
            A selection of projects that showcase my skills, creativity, and
            experience in building modern web applications.
          </p>
        </AnimatedContent>
      </div>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectsInfo.map(
            ({ id, img, title, description, tech, demo_link, github_link }) => (
              <AnimatedContent key={id} delay={0.3 * id}>
                <CardProject
                  img={img}
                  title={title}
                  description={description}
                  tech={tech}
                  demo_link={demo_link}
                  github_link={github_link}
                />
              </AnimatedContent>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
