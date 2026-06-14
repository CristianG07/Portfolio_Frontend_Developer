import { Icon } from "@iconify-icon/react";
import Title from "../ui/Title";

export default function Skills() {
   return (
      <section className="w-11/12 content_section" id="skills">
         <div className="text-center mb-20">
            <Title text="My Skills" />
         </div>
         {/* <div className="grid grid-cols-3 gap-10">
            <div className="space-y-2">
               <h6 className="text-2xl">Frontend</h6>
               <div className="grid grid-cols-5 gap-5 border p-6 transition-all duration-300 rounded-card">
                  <div className="flex flex-col items-center border p-6 hover:-translate-y-5 hover:px-6 transition-all duration-300 rounded-card">
                     <Icon icon="material-icon-theme:react-ts" width={50} />
                     <span>React</span>
                  </div>
               </div>

            </div>

         </div> */}
      </section>
   )
}
