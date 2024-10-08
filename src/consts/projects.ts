import {
  FirebaseIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  MaterialIcon,
  NextJSIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../icons";
import Project1 from "../images/project1.png";
import CRM from "../images/CRM.png";
import Project1Description from "../components/descriptions/Project1.astro";
import Project2Description from "../components/descriptions/Project2.astro";
import Project3Description from "../components/descriptions/Project3.astro";
import Project4Description from "../components/descriptions/Project4.astro";
import Project5Description from "../components/descriptions/Project5.astro";
import Legno from "../images/Legno.png";
import Altar from "../images/Altar.png";
import Dividamos from "../images/Dividamos.png";

export const PROJECTS = [
  {
    title: "Dividamos.com",
    subtitle: "Real-time expense division app",
    availablePage: "https://www.dividamos.com",
    technologies: [NextJSIcon, TailwindIcon, TypeScriptIcon, HTMLIcon],
    image: Dividamos.src,
    Description: Project5Description,
  },

  {
    title: "Legno Laccato | E-commerce",
    subtitle: "For a furniture store located in Argentina",
    availablePage: "https://www.legnolaccato.com.ar",
    technologies: [
      NextJSIcon,
      TypeScriptIcon,
      ReactIcon,
      TailwindIcon,
      HTMLIcon,
    ],
    image: Legno.src,
    Description: Project1Description,
  },
  {
    title: "CRM System",
    subtitle: "For a cell phone repair company",
    availablePage: "",
    technologies: [ReactIcon, HTMLIcon, JavascriptIcon, MaterialIcon],
    image: CRM.src,
    Description: Project2Description,
  },
  {
    title: "Reusable Admin Panel for E-commerce",
    subtitle: "For my own agency",
    availablePage: "",
    technologies: [
      NextJSIcon,
      TypeScriptIcon,
      ReactIcon,
      TailwindIcon,
      HTMLIcon,
    ],
    image: Project1.src,
    Description: Project3Description,
  },
  {
    title: "Ticket sales system",
    subtitle: "For a musical event",
    availablePage: "",
    technologies: [ReactIcon, JavascriptIcon, HTMLIcon, FirebaseIcon],
    image: Altar.src,
    Description: Project4Description,
  },
];
