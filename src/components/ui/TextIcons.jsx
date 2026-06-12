import { Icon } from "@iconify-icon/react";
import ShinyText from "../reactbits/ShinyText";

export default function TextIcons({ text, icon, classNameContent, classNameIcon }) {
   return (
      <span className={`flex gap-1.5 font-medium ${classNameContent}`}>
         <div>
            <Icon icon={icon} className={`text-blue-bright ${classNameIcon}`} width={16} />
         </div>
         <ShinyText text={text} color="#b5b5b5" />
      </span>
   )
}