import { motion } from "motion/react";
// icons
import { Icon } from "@iconify-icon/react";
import Download from "../icons/Download";
// image
import { coding } from "../../assets/image";
// data
import { AboutSkills } from "../../data";
// components
import Title from "../ui/Title";
import ShinyText from "../reactbits/ShinyText";
import Button from "../ui/Button";
import TextIcons from "../ui/TextIcons";
import fadeIn from "../../animations/Animations";

export default function About() {
  return (
    <section className="w-4/5 content_section" id="about">
      <div className="flex flex-col items-center gap-1 text-center mb-16">
        <Title text="About Me" />

        <motion.p
          initial="hidden"
          variants={fadeIn("up", 0.4)}
          whileInView={"show"}
          className="subtitle"
        >
          Passionate about building modern, responsive, and user-focused web
          experiences with clean code and creative solutions.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-5 lg:gap-10">
        <figure className="border border-blue-bright rounded-card shadow shadow-blue-bright overflow-hidden">
          <img src={coding} alt="About Image" className="h-full object-cover" />
        </figure>

        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold">
            <ShinyText
              text="Crafting modern digital experiences with React and Tailwind CSS."
              color="#b5b5b5"
            />
          </h3>

          <p className=" text-pretty text-gray-400">
            I'm Cristian Gonzalez, a Frontend Developer specializing in React,
            Tailwind CSS, and JavaScript. I build responsive, modern, and
            user-friendly websites, transforming Figma designs into clean and
            production-ready web experiences for desktop, tablet, and mobile
            devices.
          </p>

          <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-x-6 gap-y-2.5 items-center text-nowrap">
            {AboutSkills.map(({ id, text, IconComponent }) => (
              <TextIcons key={id} IconComponent={IconComponent} text={text} />
            ))}
          </div>

          <Button
            href="../../assets/image/coding.png"
            className="w-fit relative text-xs overflow-hidden after:-translate-x-full md:text-base after:absolute after:inset-0 after:bg-white hover:after:translate-x-0 after:transition-all after:duration-300 hover:text-blue-bright after:-z-10 group"
            download={true}
          >
            Download CV{" "}
            <Download className="w-5 text-xl group-hover:translate-y-0.5 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
