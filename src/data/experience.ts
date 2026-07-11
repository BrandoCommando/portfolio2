export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  showOnResume?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "FedEx",
    role: "Engineering Consultant",
    period: "2026",
    description:
      "Designed computer vision system to help FedEx package handlers, using YOLO model training to identify objects in real-time video streams. Built simulation model to visualize potential productivity improvements.",
    tech: ["Python", "AI", "Machine Learning", "YOLO", "SimPy", "PyTorch", "OpenCV"],
    showOnResume: false,
  },
  {
    company: "ReadingGlasses.com",
    role: "Head of E-commerce Engineering",
    period: "2011 — 2026",
    description:
      "Sole developer responsible for full client support. Led a long-term re-platform to Shopify Plus and Node.js microservices, boosting page speed by 150% and reducing annual maintenance costs by over $500k.",
    tech: ["Shopify Plus", "Node.js", "React", "Liquid", "GraphQL", "LAMP"],
    showOnResume: true,
  },
  {
    company: "Bundil",
    role: "Software Engineer",
    period: "2018",
    description:
      "Developed iOS app for Bundil.com using Xcode and Swift. Also developed the website using Angular and Node.js.",
    tech: ["Xcode", "Swift", "JavaScript", "Angular", "Node.js"],
    showOnResume: false,
  },
  {
    company: "84 Permits",
    role: "Software Engineer",
    period: "2017 - 2018",
    description: "Engineered backend for construction permit plan check management system.",
    tech: ["Node.js", "Express", "MongoDB", "RESTful APIs", "FileMaker"],
    showOnResume: false,
  },
  {
    company: "Conglomerates Intl LLC",
    role: "Software Engineer",
    period: "2011",
    description: "Developed streaming video authentication system using Flash and HTML5.",
    tech: ["Flash", "HTML5", "JavaScript", "PHP", "MySQL"],
    showOnResume: false,
  },
  {
    company: "Phillips",
    role: "Website Developer (Contract)",
    period: "2010",
    description:
      "Developed and maintained website for new concept of hand dryers.",
    tech: ["Angular", "PHP", "JavaScript", "CSS", "HTML"],
    showOnResume: false,
  },
  {
    company: "Celebros",
    role: ".NET Programmer / DBA",
    period: "2006 — 2011",
    description:
      "Integrated diverse product data feeds into proprietary search systems, reverse-engineered frontends for seamless migration, and built enterprise internal tools for analytics and machine-learning initiatives.",
    tech: [".NET", "MS SQL", "Windows Server", "Data Integration", "Enterprise Apps", "Analytics", "Machine Learning"],
    showOnResume: true,
  },
  {
    company: "Chaparral Motorsports",
    role: "Web Assistant",
    period: "2005 — 2006",
    description:
      "Started in data-entry and quickly built automation tooling that significantly increased team productivity for the web department.",
    tech: ["Automation", "Web Operations", "Process Improvement"],
    showOnResume: true,
  },
  {
    company: "Target",
    role: "Sales Floor Associate",
    period: "2001",
    description: "Worked in multiple departments including electronics, sporting goods, and home goods. Assisted customers with finding products and answering questions.",
    tech: ["Customer Service", "Sales", "Merchandising"],
    showOnResume: false,
  },
  {
    company: "iCADesign",
    role: "Drafter / Programmer",
    period: "2000 - 2003",
    description:
      "Provider AutoCAD drafting services for Santa Margarita Water District. Built custom software to help automate redundancies inthe drafting process.",
    tech: ["AutoCAD", "AutoLISP"],
    showOnResume: false,
  }
];
