import { Icon } from "@iconify-icon/react";

export default function CardService({ id, title, icon, description }) {
   return (
      <div className="bg-white/5  px-6 py-10 space-y-3 rounded-xl border border-blue-bright shadow shadow-blue-bright">
         <div className="flex items-center justify-center border border-blue-bright w-20 h-20 mx-auto p-5 rounded-full bg-white/2 bg-linear-30 from-blue-neon/0 via-blue-electric/5 to-blue-bright/10 shadow shadow-blue-bright mb-5">
            <Icon icon={icon} className="text-5xl text-blue-bright" />
         </div>
         <h4 className="text-xl">{title}</h4>
         <p className="text-gray-500">{description}</p>
      </div>
   )
}
