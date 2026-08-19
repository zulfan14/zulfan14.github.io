export interface Experience {
  date: string;
  role: string;
  company: string;
  descriptions: string[];
}

export const experiences: Experience[] = [
  {
    date: "Feb 2026 — Present",
    role: "Operational Manager",
    company: "PT Klik Data Indonesia",
    descriptions: [
      "Leading operational processes to ensure efficient delivery and project execution across teams.",
      "Streamlining workflows and managing resources to optimize productivity and client satisfaction.",
    ],
  },
  {
    date: "Sep 2025 — Feb 2026",
    role: "Project Manager",
    company: "PT Klik Data Indonesia",
    descriptions: [
      "Managed multiple client projects end-to-end, ensuring timely delivery and quality standards.",
      "Coordinated between development teams and stakeholders to align technical solutions with business requirements.",
    ],
  },
  {
    date: "Aug 2024 — Sep 2025",
    role: "Backend Developer",
    company: "PT Klik Data Indonesia",
    descriptions: [
      "Designed, developed, and optimized backend systems for web applications.",
      "Executed API integrations, managed databases, and ensured seamless frontend-backend synchronization.",
    ],
  },
  {
    date: "May 2023 — Aug 2024",
    role: "Backend Developer",
    company: "PT Pma Madeindonesia",
    descriptions: [
      "Responsible for designing, developing, and optimizing backend systems that underpin applications or platforms.",
      "Managed databases efficiently, including schema design, query optimization, and data security maintenance.",
      "Collaborated with development teams and stakeholders to identify potential areas for performance improvement.",
    ],
  },
  {
    date: "Sep 2022 — Apr 2023",
    role: "Fullstack Developer",
    company: "PT Klik Data Indonesia",
    descriptions: [
      "Collaborated with a team to fulfill client needs in designing and developing applications.",
    ],
  },
  {
    date: "Aug 2021 — Aug 2022",
    role: "Programmer Staff",
    company: "PT Ubudiyah Indonesia",
    descriptions: [
      "Built and maintained Ubudiyah University Website.",
      "Created ICT-related reports for Ubudiyah University Indonesia.",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  date: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Technology Information",
    school: "Lhokseumawe State Polytechnic",
    date: "August 2016 — August 2020",
    description:
      "Graduated with a GPA of 3.48, majoring in Computer Engineering with a focus on programming. Possessing practical skills in software development with a deep understanding of algorithms and programming.",
  },
];
