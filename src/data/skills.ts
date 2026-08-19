import {
  BiLogoPhp,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoJquery,
  BiLogoWordpress,
  BiLogoGit,
  BiSolidData,
  BiSolidLayer,
  BiSolidFlame,
  BiSolidServer,
} from "react-icons/bi";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "PHP", icon: BiLogoPhp },
  { name: "JavaScript", icon: BiLogoJavascript },
  { name: "Express.js", icon: BiLogoNodejs },
  { name: "MySQL", icon: BiSolidData },
  { name: "HTML & CSS", icon: BiLogoHtml5 },
  { name: "Laravel", icon: BiSolidLayer },
  { name: "CodeIgniter", icon: BiSolidFlame },
  { name: "jQuery", icon: BiLogoJquery },
  { name: "WordPress", icon: BiLogoWordpress },
  { name: "Git", icon: BiLogoGit },
  { name: "REST API", icon: BiSolidServer },
];
