import { Icon } from "@iconify-icon/react";

export default function BubbleSocial({ icon, className }) {
   return (
      <div className={`flex text-3xl p-3 rounded-full bg-linear-30 from-transparent via-blue-neon/10 to-blue-electric/10 shadow shadow-blue-electric ${className}`}>
         <Icon icon={icon} />
      </div>
   )
}
