// components
import Button from "../ui/Button";
import Title from "../ui/Title";
import CardProject from "../ui/CardProject";
import { ProjectsInfo } from "../../data";

export default function Projects() {
  return (
    <section className="w-2/4 content_section" id="projects">
      <div className="text-center mb-20">
        <Title text="Featured Projects" />
        <p className="subtitle">
          A selection of projects that showcase my skills, creativity, and
          experience in building modern web applications.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectsInfo.map(
            ({ id, img, title, description, tech, demo_link, github_link }) => (
              <CardProject
                key={id}
                img={img}
                title={title}
                description={description}
                tech={tech}
                demo_link={demo_link}
                github_link={github_link}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
