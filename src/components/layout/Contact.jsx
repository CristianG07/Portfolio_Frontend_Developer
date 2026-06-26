import { nebulosa, nebulosaMobile } from "../../assets/image";
import { Email } from "../icons/Email";
import Sent from "../icons/Sent";
import { Whatsapp } from "../icons/Whatsapp";
import AnimatedContent from "../reactbits/AnimatedContent";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Title from "../ui/Title";

export default function Contact() {
  return (
    <section className="w-11/12 content_section" id="contact">
      <div className="text-center mb-20">
        <Title text="Contact" />
        <AnimatedContent delay={0.2}>
          <p className="subtitle">
            Let’s connect and bring your ideas to life through clean, modern,
            and impactful web solutions.
          </p>
        </AnimatedContent>
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden rounded-card p-5 md:p-10">
        <div className="absolute inset-0 -z-10">
          <img
            src={nebulosa}
            alt="Hero"
            className="w-full h-full object-fill hidden md:block"
          />
          <img
            src={nebulosaMobile}
            alt="Hero"
            className="w-full h-full object-fill md:hidden"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="space-y-4">
          <AnimatedContent delay={0.3}>
            <span className="inline-block font-medium text-blue-bright">
              LET’S WORK TOGETHER
            </span>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <h5 className="text-3xl md:text-4xl font-semibold md:text-balance">
              Have a project in mind? Let’s build something great.
            </h5>
          </AnimatedContent>
          <AnimatedContent delay={0.5}>
            <p className="text-gray-400">
              Available for freelance work and open to exciting opportunities.
              Let’s turn your ideas into modern and responsive web experiences.
            </p>
          </AnimatedContent>
          <div className="flex gap-5">
            <AnimatedContent delay={0.6}>
              <Button className="bg-green-600 hover:scale-105 border-none">
                <Whatsapp className="text-2xl" />
                WhatsApp
              </Button>
            </AnimatedContent>
            <AnimatedContent delay={0.7}>
              <Button className="relative text-xs overflow-hidden after:-translate-x-full md:text-base after:absolute after:inset-0 after:bg-white hover:after:translate-x-0 after:transition-all after:duration-300 hover:text-blue-bright after:-z-10">
                Email
                <Email className="text-2xl" />
              </Button>
            </AnimatedContent>
          </div>
        </div>
        <AnimatedContent>
          <form action="" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="inputContact"
              rows={5}
            />
            <div className="w-fit mx-auto">
              <button
                type="submit"
                className="flex items-center gap-2 px-14 py-4 rounded-xl bg-blue-bright font-semibold hover:bg-blue-bright/20 border border-blue-bright text-xs md:text-base transition-all duration-300 cursor-pointer group"
              >
                Send Message
                <Sent className="text-2xl" />
              </button>
            </div>
          </form>
        </AnimatedContent>
      </div>
    </section>
  );
}
