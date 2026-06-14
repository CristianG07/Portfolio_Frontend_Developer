// data
import { ServicesInfo } from "../../data";
// components
import Title from "../ui/Title";
import CardService from "../ui/CardService";
import GlareHover from "../reactbits/GlareHover";

export default function Services() {

   return (
      <section className="w-11/12 content_section text-center" id="services">
         <div className="mb-20 ">
            <Title text="My Services" />
         </div>
         <div className="grid grid-cols-3 gap-10">
            {ServicesInfo.map((service) => (
               <GlareHover>
                  <CardService key={service.id} title={service.title} icon={service.icon} description={service.description} />
               </GlareHover>
            ))}
         </div>
      </section>
   )
}
