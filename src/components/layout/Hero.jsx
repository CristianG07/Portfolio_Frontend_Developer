// data
import { SocialLinks } from "../../data";
// icons
import { Icon } from "@iconify-icon/react";
import ArrowRightAnimate from "../icons/ArrowRightAnimate";
import ArrowDownAnimate from "../icons/ArrowDownAnimate";
// image
import { heroImg, heroMobileImg } from "../../assets/image";
// components
import ShinyText from "../reactbits/ShinyText";
import TextType from "../reactbits/TextType";
import BubbleSocial from "../ui/BubbleSocial";
import Button from "../ui/Button";
import DotPing from "../ui/DotPing";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-36 pb-32" id="home">
      <div className="max-w-11/12 md:w-10/12 mx-auto">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-full object-fill hidden md:block"
          />
          <img
            src={heroMobileImg}
            alt="Hero"
            className="w-full h-full object-fill md:hidden"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative space-y-6 z-10 select-none">
          <div className="flex gap-1.5 items-center text-xs md:text-base w-fit py-2 px-4 rounded-full border-blue-bright shadow shadow-blue-bright ">
            <DotPing />
            <ShinyText text="FRONTEND DEVELOPER" className="font-bold" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ">
            Hello Everyone!,
            <br />
            I'm{" "}
            <TextType
              className="gradiant_text"
              text={[
                "Cristian Gonzalez",
                "Frontend Developer",
                "UI/UX Designer",
              ]}
              typingSpeed={110}
              showCursor
            />
          </h1>
          <p className="w-full md:max-w-2xl md:text-balance lg:texpr">
            Building Modern Web Experiences. Frontend Developer specializing in
            React, Tailwind CSS and JavaScript. I create fast, responsive and
            user-focused websites that bring ideas and designs to life.
          </p>

          <div className="flex items-center gap-6">
            <Button
              href="#contact"
              className="bg-blue-bright hover:bg-blue-bright/10 hover:border hover:border-blue-bright text-xs md:text-base group"
            >
              Hire Me{" "}
              <ArrowRightAnimate className="group-hover:translate-x-0.5 transition-all duration-300" />
            </Button>
            <Button
              href="#projects"
              className="relative text-xs overflow-hidden after:-translate-x-full md:text-base after:absolute after:inset-0 after:bg-white hover:after:translate-x-0 after:transition-all after:duration-300 hover:text-blue-bright after:-z-10 backdrop-blur-sm group"
            >
              View Projects{" "}
              <ArrowDownAnimate className="group-hover:translate-y-0.5 transition-all duration-300" />
            </Button>
          </div>
          <div className="flex gap-5 w-fit">
            {SocialLinks.map(({ id, IconComponent, href }) => (
              <a key={id} href={href} target="_blank">
                <BubbleSocial IconComponent={IconComponent} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
