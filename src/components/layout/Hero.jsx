// data
import { SocialLinks } from "../../data";
// icons
import { Icon } from "@iconify-icon/react";
// image
import { heroImg } from "../../assets/image";
// components
import ShinyText from "../reactbits/ShinyText";
import TextType from "../reactbits/TextType";
import BubbleSocial from "../ui/BubbleSocial";
import Button from "../ui/Button";
import DotPing from "../ui/DotPing";

export default function Hero() {

   return (
      <section className="relative h-screen pt-40" id="home">
         <div className="w-10/12 mx-auto">
            <div className="absolute inset-0 -z-10">
               <img src={heroImg} alt="Hero" className="w-full h-full object-contain object-right" />
               {/* Overlay */}
               <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
            </div>

            <div className="relative space-y-6 z-10 select-none">
               <div className="flex gap-1.5 items-center w-fit py-2 px-4 rounded-full border-blue-bright shadow shadow-blue-bright ">
                  <DotPing />
                  <ShinyText text="FRONTEND DEVELOPER" className="font-bold" />
               </div>

               <h1 className="text-5xl font-bold leading-tight ">Hello Everyone!,<br />I'm <TextType className="gradiant_text" text={["Cristian Gonzalez", "a Frontend Developer", "UI/UX Designer"]} typingSpeed={110} showCursor />
               </h1>
               <p className="max-w-2xl text-balance">
                  Building Modern Web Experiences.

                  Frontend Developer specializing in React, Tailwind CSS and JavaScript.

                  I create fast, responsive and user-focused websites that bring ideas and designs to life.
               </p>

               <div className="flex items-center gap-6">
                  <Button href="/" className="bg-blue-bright">Hire Me <Icon icon="line-md:arrow-right" /></Button>
                  <Button href="/">View Projects <Icon icon="line-md:arrow-down" /></Button>
               </div>
               <div className="flex gap-5 w-fit">
                  {SocialLinks.map((social) => (
                     <a href={social.href} key={social.id} target="_blank">
                        <BubbleSocial icon={social.icon} />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
