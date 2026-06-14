import { Icon } from "@iconify-icon/react";
// image
import { coding } from "../../assets/image";
// data
import { AboutSkills } from "../../data";
// components
import Title from "../ui/Title";
import ShinyText from "../reactbits/ShinyText";
import Button from "../ui/Button";
import TextIcons from "../ui/TextIcons";

export default function About() {
   return (
      <section className="w-4/5 content_section" id="about">
         <div className="flex flex-col items-center gap-1 text-center mb-20">
            <Title text="About Me" />
         </div>
         <div className="grid grid-cols-2 gap-10">
            <figure className="border border-blue-bright rounded-card shadow shadow-blue-bright overflow-hidden">
               <img src={coding} alt="About Image" className="h-full object-cover" />
            </figure>
            <div className="space-y-4">
               <h3 className="text-3xl font-semibold"><ShinyText text="Crafting modern digital experiences with React and Tailwind CSS." color="#b5b5b5" /></h3>
               <p className="text-gray-500">
                  I'm Cristian Gonzalez, a Frontend Developer specializing in React, Tailwind CSS, and JavaScript.
                  I build responsive, modern, and user-friendly websites, transforming Figma designs into clean and production-ready web experiences for desktop, tablet, and mobile devices.
               </p>
               <div className="flex flex-wrap gap-x-6 gap-y-2.5 items-center text-nowrap">
                  {AboutSkills.map((skill) => (
                     <TextIcons key={skill.id} icon={skill.icon} text={skill.text} classNameContent="" />
                  ))}
               </div>
               <div>
                  <Button href="../../assets/image/coding.png" className="w-fit" download={true} >Download CV <Icon icon="line-md:download" className="text-xl" /></Button>
               </div>
            </div>
         </div>
      </section>
   )
}
