// data
import { SocialLinks } from "../../data";
// icons
import { Icon } from "@iconify-icon/react";
// image
import { heroImg } from "../../assets";
// components
import ShinyText from "../reactbits/ShinyText";
import TextType from "../reactbits/TextType";
import BubbleSocial from "../ui/BubbleSocial";
import Button from "../ui/Button";
import DotPing from "../ui/DotPing";

export default function Hero() {

   return (
      <section className="relative pt-40 pb-26">
         <div className="w-10/12 mx-auto">
            <div className="absolute inset-0">
               <img src={heroImg} alt="Hero" className="w-full h-full object-fill" />
               {/* Overlay */}
               <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />
            </div>

            <div className="relative space-y-6 z-10">
               <div className="flex gap-1.5 items-center w-fit py-2 px-3 rounded-full border-blue-bright shadow shadow-blue-bright select-none">
                  <DotPing />
                  <ShinyText text="FRONTEND DEVELOPER" color="#0EA5E9" className="font-bold" />
               </div>

               <h1 className="text-5xl font-bold leading-tight ">Hello Everyone!,<br />I'm <TextType className="gradiant_text" text={["Cristian Gonzalez", "a Frontend Developer", "UI/UX Designer"]} typingSpeed={110} showCursor />
               </h1>
               <p className="max-w-2xl text-balance">Building modern, responsive and high-performance web experiences.
                  I transform ideas and designs into fast, scalable and user-friendly applications using React, Tailwind CSS and modern web technologies.</p>

               <div className="flex items-center gap-6">
                  <Button href="/" className="bg-linear-to-br from-blue-neon to-blue-bright">Hire Me <Icon icon="maki:arrow" /></Button>
                  <Button href="../../assets/image/coding.png" download={true} >Download CV <Icon icon="tdesign:download" /></Button>
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
