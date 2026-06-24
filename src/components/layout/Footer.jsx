// data
import { FooterContact, Navlinks, ServicesInfo, SocialLinks } from "../../data";
// components
import Logo from "../ui/Logo";
import BubbleSocial from "../ui/BubbleSocial";
import FooterLink from "../ui/FooterLink";
import { Icon } from "@iconify-icon/react";
import DotPing from "../ui/DotPing";

export default function Footer() {
  return (
    <footer className="w-5/6 content_section">
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="lg:flex-2 space-y-5">
          <div>
            <Logo />
            <span className="block text-xl md:text-2xl">
              Frontend Developer
            </span>
          </div>
          <div className="max-w-96 text-balance text-gray-500">
            <p>
              Building modern and responsive websites with clean code and great
              experience.
            </p>
          </div>
          <div className="flex gap-5 w-fit">
            {SocialLinks.map(({ id, IconComponent, href }) => (
              <a href={href} key={id} target="_blank">
                <BubbleSocial IconComponent={IconComponent} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-4 justify-between gap-3 text-gray-500">
          <FooterLink title="Quick Links" className="" data={Navlinks} />
          <FooterLink title="Services" data={ServicesInfo} />
          <nav className="space-y-5">
            <h6 className="text-blue-bright text-xl font-bold">Contact Info</h6>
            <ul className="space-y-2">
              {FooterContact.map(({ id, text, IconComponent }) => (
                <li key={id} className="flex items-center gap-2">
                  <IconComponent className="text-xl text-blue-bright" />
                  {text}
                </li>
              ))}
              <li className="flex items-center gap-3">
                <DotPing className="ml-1" />
                Available for work
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="h-px bg-linear-to-r from-transparent via-blue-bright/70 to-transparent mt-8" />
      <div className="flex flex-col gap-3 md:flex-row justify-between py-5 text-gray-500">
        <span>© 2026 Cristian G. All rights reserved</span>
        <span>Built with React & Tailwind CSS 🩵</span>
      </div>
    </footer>
  );
}
