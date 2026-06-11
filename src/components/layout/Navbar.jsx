import { Icon } from "@iconify-icon/react";
import { Navlinks } from "../../data";
import ShinyText from "../reactbits/ShinyText";

export default function Navbar() {
   return (
      <header className="fixed w-11/12 max-w-7xl top-6 inset-x-0 mx-auto z-50">
         <section className="flex justify-between items-center py-4 px-8 rounded-2xl glassmorphism border-blue-bright">
            <a href="/">
               <ShinyText text="Cristian G." color="#0EA5E9" className="text-4xl font-bold" />
            </a>
            <nav>
               <ul className="flex gap-12">
                  {Navlinks.map((link) => (
                     <li key={link.id}>
                        <a href={link.href}>{link.name}</a>
                     </li>
                  ))}
               </ul>
            </nav>
            <button className="flex items-center gap-2 border border-blue-bright px-4 py-2 rounded-xl cursor-pointer">
               <Icon icon="hugeicons:sent-02" className="text-blue-neon" />
               <span>Hire Me</span>
            </button>
         </section>
      </header>
   )
}
