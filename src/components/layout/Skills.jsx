import { Code } from "../icons/Code";
// data
import { SkillsInfo } from "../../data";
// components
import Title from "../ui/Title";
import CardSkill from "../ui/CardSkill";
import GlareHover from "../reactbits/GlareHover";
import AnimatedContent from "../reactbits/AnimatedContent";

export default function Skills() {
  return (
    <section className="w-11/12 content_section" id="skills">
      <div className="text-center mb-20">
        <Title text="My Skills" />
        <AnimatedContent delay={0.2}>
          <p className="subtitle">
            Technologies and tools I use to build modern, scalable, and
            high-performance web applications.
          </p>
        </AnimatedContent>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {SkillsInfo.map(({ id, IconComponent, title, description, skills }) => (
          <AnimatedContent key={id} delay={0.3 * id}>
            <GlareHover className="hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
              <CardSkill
                IconComponent={IconComponent}
                title={title}
                description={description}
                skills={skills}
              />
            </GlareHover>
          </AnimatedContent>
        ))}
      </div>
      <AnimatedContent delay={1}>
        <div className="text-center mt-14 max-w-fit mx-auto space-y-2.5">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Code className="text-2xl text-blue-bright" />
            <span className="inline-block">
              Always learning. Always building. Always improving.
            </span>
          </div>
          <div className="h-px bg-linear-to-r from-transparent via-blue-bright/70 to-transparent" />
        </div>
      </AnimatedContent>
    </section>
  );
}
