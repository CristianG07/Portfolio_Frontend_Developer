import { Icon } from "@iconify-icon/react";
// components
import ShinyText from "../reactbits/ShinyText";

export default function TextIcons({
  text,
  IconComponent,
  classNameContent,
  classNameIcon,
}) {
  return (
    <span
      className={`flex items-center gap-1.5 font-medium ${classNameContent}`}
    >
      <div>
        <IconComponent className={`text-blue-bright ${classNameIcon}`} />
      </div>
      <ShinyText text={text} color="#b5b5b5" />
    </span>
  );
}
