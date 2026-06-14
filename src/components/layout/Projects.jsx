// components
import Button from "../ui/Button";
import Title from "../ui/Title";
import CardProject from "../ui/CardProject";
import { ProjectsInfo } from "../../data";

export default function Projects() {
   return (
      <section className="w-11/12 content_section" id="projects">
         <div className="text-center mb-20">
            <Title text="Featured Projects" />
         </div>
         <div>
            <div className="grid grid-cols-3 gap-10">
               {ProjectsInfo.map(({ id, img, title, description, tech, demo_link, github_link }) => (
                  <CardProject key={id} img={img} title={title} description={description} tech={tech} demo_link={demo_link} github_link={github_link} />
               ))}
            </div>
         </div>
      </section>
   )
}
