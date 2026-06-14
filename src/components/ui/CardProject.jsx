// icons
import { Icon } from "@iconify-icon/react";
import { github, rocket } from "../../assets/icons";
// components
import ElectricBorder from "../reactbits/ElectricBorder";
import GlareHover from "../reactbits/GlareHover";
import Button from "./Button";

export default function CardProject({ img, title, description, tech, demo_link, github_link }) {
   return (
      <ElectricBorder className="shadow shadow-blue-bright select-none">
         <GlareHover>
            <div className="space-y-3 border border-blue-bright bg-card p-6 rounded-card">
               <figure className="rounded-card h-56 overflow-hidden">
                  <img src={img} alt="" className="h-full object-cover object-center" />
               </figure>
               <h5 className="text-2xl font-medium">{title}</h5>
               <p className="text-gray-500">{description}</p>
               <div className=" flex gap-2">
                  {tech.map((tech) => (
                     <span key={tech} className="bg-blue-bright/5 px-3 py-1 rounded-full">{tech}</span>
                  ))}
               </div>
               <div className="grid grid-cols-2 gap-5 mt-5">
                  <Button href={demo_link} className="justify-center">
                     Live Demo
                     <img src={rocket} alt="Rocket Icon" />
                  </Button>
                  <Button href={github_link} className="justify-center">
                     Github
                     <img src={github} alt="Github Icon" />
                  </Button>
               </div>
            </div>
         </GlareHover>
      </ElectricBorder>
   )
}
