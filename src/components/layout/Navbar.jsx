import { Icon } from "@iconify-icon/react";
// data
import { Navlinks } from "../../data";
// components
import Logo from "../ui/Logo";
import Sent from "../icons/Sent";
import useActiveSection from "../../data/hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();

  return (
    <header className="fixed h-fit w-[93%] md:w-11/12 max-w-7xl top-5 inset-0 mx-auto z-50">
      <section className="flex justify-between items-center py-4 px-8 rounded-xl glassmorphism border-blue-bright">
        <Logo />
        <nav className="hidden lg:block">
          <ul className="flex gap-12">
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
        <button className="hidden lg:flex items-center gap-2 border border-blue-bright px-4 py-2 rounded-card cursor-pointer">
          <Sent className="text-blue-neon" />
          <span>Hire Me</span>
        </button>
      </section>
    </header>
  );
}
