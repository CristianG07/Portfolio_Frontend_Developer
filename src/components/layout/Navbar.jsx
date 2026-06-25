import { useState } from "react";
// icons
import Sent from "../icons/Sent";
import { Bar } from "../icons/Bar";
import { Close } from "../icons/Close";
// data
import { Navlinks } from "../../data";
// components
import Logo from "../ui/Logo";
import useActiveSection from "../../data/hooks/useActiveSection";
import NavbarMobile from "./NavbarMobile";
import Button from "../ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="fixed h-fit w-[93%] md:w-11/12 max-w-7xl top-5 inset-0 mx-auto z-50">
      <section className="flex justify-between items-center py-4 px-8 rounded-xl glassmorphism border-blue-bright">
        <Logo />
        <nav>
          <ul className="hidden lg:flex gap-12">
            {Navlinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.href}`}
                  className={`relative pb-1.5 after:absolute after:w-0 after:h-0.5 after:bg-blue-bright after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-300
                    ${activeSection === link.href ? "after:w-full" : ""}
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          href="#contact"
          className="hidden lg:flex items-center gap-2 border border-blue-bright px-4 py-2 rounded-card cursor-pointer hover:scale-105 hover:shadow hover:shadow-blue-bright transition-all duration-300"
        >
          <Sent className="text-blue-neon" />
          <span>Hire Me</span>
        </Button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-4xl text-blue-bright lg:hidden"
        >
          {isMenuOpen ? <Close /> : <Bar />}
        </button>
      </section>
    </header>
  );
}
