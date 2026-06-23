import { Code } from "../components/icons/Code";
import { CodeDots } from "../components/icons/CodeDots";
import { Css3 } from "../components/icons/Css3";
import { Email } from "../components/icons/Email";
import { ExpressjsDark } from "../components/icons/ExpressjsDark";
import { Figma } from "../components/icons/Figma";
import { FigmaColor } from "../components/icons/FigmaColor";
import { Firebase } from "../components/icons/Firebase";
import Fiverr from "../components/icons/Fiverr";
import { FramerMotion } from "../components/icons/Framermotion";
import { Git } from "../components/icons/Git";
import Github from "../components/icons/Github";
import { Html5 } from "../components/icons/Html5";
import { Javascript } from "../components/icons/Javascript";
import Linkedin from "../components/icons/Linkedin";
import { Location } from "../components/icons/Location";
import Mobile from "../components/icons/Mobile";
import { Mongodb } from "../components/icons/Mongodb";
import { Nextjs } from "../components/icons/Nextjs";
import { Nodejs } from "../components/icons/Nodejs";
import { PhoneRinging } from "../components/icons/PhoneRinging";
import { Postman } from "../components/icons/Postman";
import { Prisma } from "../components/icons/Prisma";
import { ReactIcon } from "../components/icons/ReactIcon";
import { Redux } from "../components/icons/Redux";
import { Rocket } from "../components/icons/Rocket";
import { Server } from "../components/icons/Server";
import { SqlDatabase } from "../components/icons/SqlDatabase";
import { Tailwindcss } from "../components/icons/Tailwindcss";
import { Tools } from "../components/icons/Tools";
import { Typescript } from "../components/icons/Typescript";
import { Vitejs } from "../components/icons/Vitejs";
import { Vscode } from "../components/icons/Vscode";
import WebSite from "../components/icons/WebSite";
// projects images
import { p1, p10, p2, p3, p4, p5, p6, p7, p8, p9 } from "../assets/projects";
import BrowserCode from "../components/icons/BrowserCode";
// components

export const Navlinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Services", href: "#services" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Skills", href: "#skills" },
  { id: 6, name: "Contact", href: "#contact" },
];

export const SocialLinks = [
  { id: 1, IconComponent: Github, href: "https://github.com/CristianG07" },
  {
    id: 2,
    IconComponent: Linkedin,
    href: "https://www.linkedin.com/in/cristian-gonzalez-3072b1172",
  },
  {
    id: 3,
    IconComponent: Fiverr,
    href: "https://www.fiverr.com/s/42E0aqy",
  },
];

export const AboutSkills = [
  { id: 1, text: "Clean Code", IconComponent: Code },
  {
    id: 2,
    text: "Responsive Design",
    IconComponent: Mobile,
  },
  {
    id: 3,
    text: "Performance",
    IconComponent: Rocket,
  },
  {
    id: 4,
    text: "Problem solver",
    IconComponent: Tools,
  },
  {
    id: 5,
    text: "UI/UX Focus",
    IconComponent: WebSite,
  },
];

export const ServicesInfo = [
  {
    id: 1,
    name: "Frontend Development",
    IconComponent: BrowserCode,
    description:
      "Building modern, responsive, and high-performance web interfaces using React and Tailwind CSS.",
  },
  {
    id: 2,
    name: "Responsive Design",
    IconComponent: Mobile,
    description:
      "Creating websites optimized for desktop, tablet, and mobile for the best user experience.",
  },
  {
    id: 3,
    name: "Landing Page",
    IconComponent: WebSite,
    description:
      "Developing fast, engaging, and conversion-focused landing pages for brands and businesses.",
  },
  {
    id: 4,
    name: "React Web Apps",
    IconComponent: ReactIcon,
    description:
      "Building scalable and interactive web applications with reusable components and efficient architecture.",
  },
  {
    id: 5,
    name: "Figma to Code",
    IconComponent: Figma,
    description:
      "Transforming Figma designs into clean, pixel-perfect, and fully responsive websites.",
  },
  {
    id: 6,
    name: "UI Implementation",
    IconComponent: Tools,
    description:
      "Bringing user interface designs to life with clean code, smooth interactions, and modern layouts.",
  },
];

export const ProjectsInfo = [
  {
    id: 1,
    img: p9,
    title: "Tech-Cloud",
    description: "A reluitment platform that connects companies and candidates",
    tech: ["React", "Tailwind CSS", "Redux"],
    demo_link: "/",
    github_link: "/",
  },
  {
    id: 2,
    img: p10,
    title: "Tech-Cloud",
    description: "A reluitment platform that connects companies and candidates",
    tech: ["React", "Tailwind CSS", "Redux"],
    demo_link: "/",
    github_link: "/",
  },
  {
    id: 3,
    img: p8,
    title: "Tech-Cloud",
    description: "A reluitment platform that connects companies and candidates",
    tech: ["React", "Tailwind CSS", "Redux"],
    demo_link: "/",
    github_link: "/",
  },
  {
    id: 4,
    img: p2,
    title: "Tech-Cloud",
    description: "A reluitment platform that connects companies and candidates",
    tech: ["React", "Tailwind CSS", "Redux"],
    demo_link: "/",
    github_link: "/",
  },
  {
    id: 5,
    img: p4,
    title: "Tech-Cloud",
    description: "A reluitment platform that connects companies and candidates",
    tech: ["React", "Tailwind CSS", "Redux"],
    demo_link: "/",
    github_link: "/",
  },
];

export const SkillsInfo = [
  {
    id: 1,
    title: "Frontend Development",
    IconComponent: BrowserCode,
    description:
      "Building responsive and interactive user interfaces with modern technologies.",
    skills: [
      { id: 1, IconComponent: ReactIcon, name: "React" },
      { id: 2, IconComponent: Javascript, name: "JavaScript" },
      { id: 3, IconComponent: Tailwindcss, name: "Tailwind CSS" },
      { id: 4, IconComponent: Html5, name: "HTML5" },
      { id: 5, IconComponent: Css3, name: "CSS3" },
      { id: 6, IconComponent: Redux, name: "Redux" },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    IconComponent: Server,
    description:
      "Creating robust and scalable server-side applications and APIs.",
    skills: [
      { id: 1, IconComponent: Nodejs, name: "Node.js" },
      {
        id: 2,
        IconComponent: ExpressjsDark,
        name: "Express.js",
      },
      { id: 3, IconComponent: Mongodb, name: "MongoDB" },
      { id: 4, IconComponent: CodeDots, name: "REST APIs" },
      { id: 5, IconComponent: Firebase, name: "Firebase" },
    ],
  },
  {
    id: 3,
    title: "Tools & Workflow",
    IconComponent: Tools,
    description:
      "Tools and platforms I use to develop, design, and collaborate efficiently.",
    skills: [
      { id: 1, IconComponent: Git, name: "Git" },
      { id: 2, IconComponent: Github, name: "GitHub" },
      {
        id: 3,
        IconComponent: Vscode,
        name: "VS Code",
      },
      { id: 4, IconComponent: FigmaColor, name: "Figma" },
      { id: 5, IconComponent: Vitejs, name: "Vite" },
      { id: 6, IconComponent: Postman, name: "Postman" },
    ],
  },
  {
    id: 4,
    title: "Currently Learning",
    IconComponent: Rocket,
    description:
      "Technologies I'm currently exploring and improving my skills in.",
    skills: [
      { id: 1, IconComponent: Typescript, name: "TypeScript" },
      { id: 2, IconComponent: Nextjs, name: "Next.js" },
      { id: 3, IconComponent: FramerMotion, name: "Framer Motion" },
      { id: 4, IconComponent: SqlDatabase, name: "SQL" },
      { id: 5, IconComponent: Prisma, name: "Prisma" },
    ],
  },
];

export const FooterContact = [
  { id: 1, text: "Buenaventura, Colombia", IconComponent: Location },
  {
    id: 2,
    text: "crisdev0723@gmail.com",
    IconComponent: Email,
  },
  { id: 3, text: "+57 3186806722", IconComponent: PhoneRinging },
];
