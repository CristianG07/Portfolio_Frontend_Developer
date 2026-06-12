// data
import { ServicesInfo } from "../../data";
// components
import Title from "../ui/Title";
import CardService from "../ui/CardService";

export default function Services() {

   return (
      <section className="w-4/5 max-w-7xl mx-auto text-center py-24" id="services">
         <div className=" mb-20">
            <Title text="My Services" />
         </div>
         <div className="grid grid-cols-3 gap-10">
            {ServicesInfo.map((service) => (
               <CardService key={service.id} title={service.title} icon={service.icon} description={service.description} />
            ))}
         </div>
      </section>
   )
}
