/**
 * !Hero section main picture import
 */
import Hero_person from "./assets/images/Hero/emile-suit-1.png";

/**
 * !Skills section pictures import
 */
import my3ddesign from "./assets/images/Skills/3ddesign.png";
import my3dprinting from "./assets/images/Skills/3dprinting.png";
import cimema4d from "./assets/images/Skills/cinema4d.png";
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import illustrator from "./assets/images/Skills/illustrator.png";
import indesign from "./assets/images/Skills/indesign.png";
import office from "./assets/images/Skills/office.png";
import penrose from "./assets/images/Skills/penrose.png";
import solidworks from "./assets/images/Skills/solidworks.png";
import stratasys from "./assets/images/Skills/stratasys.png";

/**
 * ! Services section pictures import
 */
import printing_service from "./assets/images/Services/3dprint-1.png";
import suit_design_service from "./assets/images/Services/suit-1.png";
import footwear_service from "./assets/images/Services/boots.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Industrial Designer",
    firstName: "ÉMILE",
    LastName: "RACINE",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experience in Industry",
      },
      {
        count: "30+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY BEST SKILLS",
    skills_content: [
      {
        name: "Office Suite",
        para: "Lorem ipsum text  dummy",
        logo: office,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "Adobe Illustrator",
        para: "Lorem ipsum text  dummy",
        logo: illustrator,
      },
      {
        name: "Adobe InDesign",
        para: "Lorem ipsum text  dummy",
        logo: indesign,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "3D Design",
        para: "Lorem ipsum text  dummy",
        logo: my3ddesign,
      },
      {
        name: "3D Printing",
        para: "Lorem ipsum text  dummy",
        logo: my3dprinting,
      },
      {
        name: "Cinema 4D",
        para: "Lorem ipsum text  dummy",
        logo: cimema4d,
      },
      {
        name: "Penrose",
        para: "Lorem ipsum text  dummy",
        logo: penrose,
      },
      {
        name: "Solidworks",
        para: "Lorem ipsum text  dummy",
        logo: solidworks,
      },
      {
        name: "Stratasys",
        para: "Lorem ipsum text  dummy",
        logo: stratasys,
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "SPECIALIZED IN",
    service_content: [
      {
        title: "3D Printing",
        para: "In 3D printing, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: printing_service,
      },
      {
        title: "Custom Suit Production",
        para: "In designing and custom suit production, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: suit_design_service,
      },
      {
        title: "Custom Footwear Production",
        para: "In designing and custom footwear production, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: footwear_service,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY FINNEST CREATIONS",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
