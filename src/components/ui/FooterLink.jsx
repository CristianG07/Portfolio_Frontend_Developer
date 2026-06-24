import { Icon } from "@iconify-icon/react";
import { ArrowRightForward } from "../icons/ArrowRightForward";

export default function FooterLink({ title, data, className }) {
  return (
    <div className="space-y-5">
      <h6 className="text-blue-bright text-xl font-bold">{title}</h6>
      <nav>
        <ul className="space-y-2">
          {data.map(({ id, href, name }) => (
            <li
              key={id}
              className={`flex items-center gap-2 hover:text-blue-bright hover:scale-105 transition-all duration-300 ${className}`}
            >
              <ArrowRightForward className="text-blue-bright" />
              <a href={`#${href}`}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
