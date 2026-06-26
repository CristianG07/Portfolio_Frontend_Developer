// components
import Github from "../icons/Github";
import OpenLink from "../icons/OpenLink";
import ElectricBorder from "../reactbits/ElectricBorder";
import GlareHover from "../reactbits/GlareHover";
import Button from "./Button";

export default function CardProject({
  img,
  title,
  description,
  tech,
  demo_link,
  github_link,
}) {
  return (
    <ElectricBorder className="shadow h-full shadow-blue-bright select-none hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ">
      <GlareHover>
        <div className="space-y-3 border border-blue-bright bg-card p-6 rounded-card">
          <figure className="rounded-card h-56 overflow-hidden">
            <img
              src={img}
              alt=""
              className="h-full object-cover object-center"
            />
          </figure>
          <h5 className="text-xl md:text-2xl font-medium">{title}</h5>
          <p className="text-base md:text-xs lg:text-base text-gray-500">
            {description}
          </p>
          <div className="flex gap-2">
            {tech.map((tech) => (
              <span
                key={tech}
                className="bg-blue-bright/5 text-nowrap px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <Button href={demo_link} className="justify-center hover:scale-105">
              Demo
              <OpenLink className="text-base md:text-xl" />
            </Button>
            <Button
              href={github_link}
              className="justify-center hover:scale-105"
            >
              Github
              <Github className="text-base md:text-xl" />
            </Button>
          </div>
        </div>
      </GlareHover>
    </ElectricBorder>
  );
}
