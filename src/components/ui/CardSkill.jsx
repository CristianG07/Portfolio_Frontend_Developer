import { Icon } from "@iconify-icon/react";
import BubbleIcon from "./BubbleIcon";

export default function CardSkill({
  IconComponent,
  title,
  description,
  skills,
}) {
  return (
    <div className="bg-card space-y-6 p-8 rounded-card border border-blue-bright shadow shadow-blue-bright select-none">
      <div className="flex flex-col md:flex-row items-center text-center md:text-start gap-5">
        <BubbleIcon IconComponent={IconComponent} />
        <div className="space-y-3">
          <div className="space-y-1.5">
            <h4 className="text-xl">{title}</h4>
            <div className="h-1.5 w-20 rounded-full bg-blue-bright mx-auto md:mx-0" />
          </div>
          <p className="text-gray-500 text-xs md:text-base text-balance">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {skills.map(({ id, IconComponent, name }) => (
          <div
            key={id}
            className="flex items-center gap-2 px-5 py-2 border border-blue-bright rounded-card"
          >
            <div className="flex md:text-3xl">
              <IconComponent />
            </div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
