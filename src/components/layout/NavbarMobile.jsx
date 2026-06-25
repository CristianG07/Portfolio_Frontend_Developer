import { div } from "motion/react-client";
import { Navlinks } from "../../data";

export default function NavbarMobile({ activeSection }) {
  return (
    <div className="lg:hidden absolute w-full h-screen -top-5 inset-0   transition-all duration-500">
      <ul className="flex flex-col items-center justify-center gap-10 backdrop-blur-sm w-full h-full">
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
    </div>
  );
}
