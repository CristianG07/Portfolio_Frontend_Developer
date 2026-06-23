import { Icon } from "@iconify-icon/react";
import { ArrowRightForward } from "../icons/ArrowRightForward";

export default function FooterLink({ title, data }) {
  return (
    <div className="space-y-5">
      <h6 className="text-blue-bright text-xl font-bold">{title}</h6>
      <nav>
        <ul className="space-y-2">
          {data.map(({ id, href, name }) => (
            <li key={id} className="flex items-center gap-2">
              <ArrowRightForward className="text-blue-bright" />
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
