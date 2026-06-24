// data
import { ServicesInfo } from "../../data";
// components
import Title from "../ui/Title";
import CardService from "../ui/CardService";
import GlareHover from "../reactbits/GlareHover";

export default function Services() {
  return (
    <section className="content_section text-center" id="services">
      <div className="mb-20 ">
        <Title text="My Services" />
        <p className="subtitle">
          Providing high-quality frontend solutions tailored to create fast,
          scalable, and engaging digital experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ServicesInfo.map(({ id, name, description, IconComponent }) => (
          <GlareHover
            key={id}
            className="hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            <CardService
              title={name}
              IconComponent={IconComponent}
              description={description}
            />
          </GlareHover>
        ))}
      </div>
    </section>
  );
}
