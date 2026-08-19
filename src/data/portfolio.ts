export interface Project {
  title: string;
  category: string;
  image: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "SIMRS KLIKMEDIC",
    category: "Hospital Management System",
    image: "/img/portfolio/simrs.png",
    url: undefined,
  },
  {
    title: "Soya Prima Solusi",
    category: "Inventory & Sales Dashboard",
    image: "/img/portfolio/soya.png",
    url: undefined,
  },
  {
    title: "SILAPAN",
    category: "Web Development",
    image: "/img/portfolio/silapan.png",
    url: "https://silapanacehjaya.co.id/",
  },
  {
    title: "SIPENMASING",
    category: "Web Development",
    image: "/img/portfolio/sipenmasing.png",
    url: "https://sipenmasing.uui.ac.id/",
  },
  {
    title: "Lapor UUI",
    category: "Web Development",
    image: "/img/portfolio/lapor.png",
    url: "https://lapor.uui.ac.id/",
  },
];
