export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
  /** When true, included in the dynamically generated /resume page. */
  showOnResume?: boolean;
  /** City/region shown on the resume (e.g. "Dallas, TX"). */
  location?: string;
  /** Period label override for resume (e.g. "2011 - PRESENT"). */
  resumePeriod?: string;
  /** Optional intro paragraph before resume bullets. */
  resumeIntro?: string;
  /** HTML allowed for emphasis (<strong>, etc.). */
  resumeBullets?: string[];
}

export const experiences: Experience[] = [
  {
    company: "FedEx",
    role: "Engineering Consultant",
    period: "2026",
    description:
      "Designed computer vision system to help FedEx package handlers, using YOLO model training to identify objects in real-time video streams. <a href=\"https://github.com/BrandoCommando/rustpackagesim\">Built simulation model</a> to visualize potential productivity improvements.",
    tech: ["Rust", "AI", "Machine Learning", "Python", "YOLO", "SimPy", "PyTorch", "OpenCV"],
    showOnResume: true,
    resumePeriod: "2026",
    location: "Ventura, CA",
    resumeBullets: [
      "Designed computer vision system to help package handlers, using <strong>YOLO</strong> model training to identify objects in real-time video streams.",
      "<a href=\"https://github.com/BrandoCommando/rustpackagesim\">Built simulation model</a> using <strong>Rust</strong> to visualize potential productivity improvements.",
    ],
  },
  {
    company: "ReadingGlasses.com",
    role: "Head of E-commerce Engineering",
    period: "2011 — 2026",
    resumePeriod: "2011 - 2026",
    location: "Dallas, TX",
    description:
      "Sole developer responsible for full client support. Led a long-term re-platform to Shopify Plus and Node.js microservices, boosting page speed by 150% and reducing annual maintenance costs by over $500k.",
    tech: ["Shopify Plus", "Node.js", "React", "Liquid", "GraphQL", "LAMP", "Angular", "PHP", "MySQL"],
    showOnResume: true,
    resumeBullets: [
      "Replaced overseas development team as <strong>sole developer</strong>, providing 100% support to client",
      "Led agile development on multi-year re-platform onto <strong>Shopify Plus</strong>/microservice backend, resulting in a page <strong>speed boost</strong> of 150% (all green) and an anual maintenance <strong>savings</strong> of over $500k.",
      "Shopify <strong>custom app</strong> development (with Node.js microservices and React admin).",
      "GraphQL based data feed generation, advanced liquid theming.",
      "<strong>Modernized</strong> UX (Social Login, hashed password authentication, Bootstrap).",
      "Supporting legacy backend based on <strong>LAMP</strong> stack.",
      "Used Atlassian Pipelines to implement <strong>automation</strong> of common tasks to reduce time-consuming repetition.",
      "Publish automation based on SCM (Bitbucket/git).",
    ],
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
    company: "Phillips",
    role: "Website Developer (Contract)",
    period: "2010",
    description:
      "Developed and maintained website for new concept of hand dryers.",
    tech: ["Angular", "PHP", "JavaScript", "CSS", "HTML"],
    showOnResume: false,
  },
  {
    company: "Conglomerate Marketing LLC",
    role: "Software Engineer",
    period: "2009",
    description: "Developed streaming video authentication system using Flash and HTML5.",
    tech: ["Flash", "HTML5", "JavaScript", "PHP", "MySQL"],
    showOnResume: false,
  },
  {
    company: "Celebros",
    role: ".NET Programmer / DBA",
    period: "2006 — 2011",
    resumePeriod: "2006 - 2011",
    location: "Santa Barbara, CA",
    description:
      "Integrated diverse product data feeds into proprietary search systems, reverse-engineered frontends for seamless migration, and built enterprise internal tools for analytics and machine-learning initiatives.",
    tech: [".NET", "MS SQL", "Windows Server", "Data Integration", "Enterprise Apps", "Analytics", "Machine Learning"],
    showOnResume: true,
    resumeBullets: [
      "Integration of many different client product data feeds into proprietary search software",
      "<strong>Reverse engineered</strong> frontends to enable seemless transition onto search results.",
      "Created several <strong>enterprise applications</strong> which enabled many new tools, including <strong>machine learning</strong> and advanced analytics gathering.",
    ],
  },
  {
    company: "Chaparral Motorsports",
    role: "Web Assistant",
    period: "2005 — 2006",
    resumePeriod: "2005 - 2006",
    location: "San Bernardino, CA",
    description:
      "Started in data-entry and quickly built automation tooling that significantly increased team productivity for the web department.",
    tech: ["Web Operations", "Opera JS"],
    showOnResume: true,
    resumeIntro: "Began work on data-entry for web team, but soon grew bored.",
    resumeBullets: [
      "Built automation tool to greatly improve web team&rsquo;s productivity.",
    ],
  },
  {
    company: "Camp Oakhurst",
    role: "Information Systems Coordinator",
    period: "2004 - 2005",
    description: "Managed the information systems for the camp, including the website, calendar planning, and other systems.",
    tech: ["Windows Server", "Active Directory", "Group Policy", "DHCP", "DNS", "VPN", "Flash", "HTML"],
    showOnResume: false,
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
  },
];
