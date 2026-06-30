import { Navlinks } from "../../data";

export default function NavbarMobile({ activeSection, setIsMenuOpen }) {
  return (
    <nav className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 -z-10">
      <ul className="flex flex-col items-center justify-center gap-10 w-full h-full">
        {Navlinks.map((link) => (
          <li key={link.id}>
            <a
              onClick={() => setIsMenuOpen(false)}
              href={`#${link.href}`}
              className={`relative pb-1 after:absolute after:w-0 after:h-0.5 after:bg-blue-bright after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-300
               ${activeSection === link.href ? "after:w-full" : ""}
               `}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
