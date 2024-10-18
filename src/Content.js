/**
 * !Hero section main picture import
 */
import Hero_person from "./assets/images/Hero/emile-suit-1.png";

/**
 * !Skills section pictures import
 */
import my3ddesign from "./assets/images/Skills/3ddesign-modified.png";
import my3dprinting from "./assets/images/Skills/3dprinting-modified.png";
import cimema4d from "./assets/images/Skills/cinema4d-modified.png";
import figma from "./assets/images/Skills/figma-modified.png";
import sketch from "./assets/images/Skills/sketch-modified.png";
import ps from "./assets/images/Skills/ps-modified.png";
import illustrator from "./assets/images/Skills/illustrator-modified.png";
import indesign from "./assets/images/Skills/indesign-modified.png";
import office from "./assets/images/Skills/office-modified.png";
import penrose from "./assets/images/Skills/penrose-modified.png";
import solidworks from "./assets/images/Skills/solidworks-modified.png";
import stratasys from "./assets/images/Skills/stratasys-modified.png";

/**
 * ! Services section pictures import
 */
import printing_service from "./assets/images/Services/3dprint-1.png";
import suit_design_service from "./assets/images/Services/suit-1.png";
import footwear_service from "./assets/images/Services/boots.png";
import product_design_service from "./assets/images/Services/design-service.png";

/**
 * ! Projects section pictures and profile import
 */
import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import image_portrait from "./assets/images/projects/emile_portrait-1.png";

/**
 * ! Testimonials section pictures import
 */
import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// Import icons from react-icons
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
        data_aos_animation:"fade-up-right"
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
         data_aos_animation:"fade-up-left"
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
        data_aos_animation:"fade-up-right"
      },
      {
        name: "Adobe Illustrator",
        para: "Lorem ipsum text  dummy",
        logo: illustrator,
        data_aos_animation:"fade-up-left"
      },
      {
        name: "Adobe InDesign",
        para: "Lorem ipsum text  dummy",
        logo: indesign,
        data_aos_animation:"fade-up-right"
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
        data_aos_animation:"fade-up-left"
      },
      {
        name: "3D Design",
        para: "Lorem ipsum text  dummy",
        logo: my3ddesign,
        data_aos_animation:"fade-up-right"
      },
      {
        name: "3D Printing",
        para: "Lorem ipsum text  dummy",
        logo: my3dprinting,
        data_aos_animation:"fade-up-left"
      },
      {
        name: "Cinema 4D",
        para: "Lorem ipsum text  dummy",
        logo: cimema4d,
        data_aos_animation:"fade-up-right"
      },
      {
        name: "Penrose",
        para: "Lorem ipsum text  dummy",
        logo: penrose,
        data_aos_animation:"fade-up-left"
      },
      {
        name: "Solidworks",
        para: "Lorem ipsum text  dummy",
        logo: solidworks,
        data_aos_animation:"fade-up-right"
      },
      {
        name: "Stratasys",
        para: "Lorem ipsum text  dummy",
        logo: stratasys,
        data_aos_animation:"fade-up-left"
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "SPECIALIZED IN",
    service_content: [
      {
        title: "Product Designing",
        para: "In products design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: product_design_service,
      },
      {
        title: "3D Printing",
        para: "In 3D printing, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: printing_service,
      },
      {
        title: "Footwear Production",
        para: "In designing  custom footwear production, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: footwear_service,
      },
      {
        title: "Fashion Gear Production",
        para: "In designing  custom fashion gear production, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: suit_design_service,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY FINNEST WORK",
    image_portrait: image_portrait,
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
