import { Icon } from "@iconify-icon/react";

export default function BubbleSocial({ IconComponent, className }) {
  return (
    <div
      className={`flex text-3xl p-3 rounded-full bg-linear-30 from-transparent via-blue-neon/5 to-blue-electric/10 shadow shadow-blue-electric hover:scale-110 hover:text-blue-bright transition-all duration-300
         ${className}`}
    >
      <IconComponent />
    </div>
  );
}
