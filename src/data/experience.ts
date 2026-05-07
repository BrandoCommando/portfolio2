export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "ReadingGlasses.com",
    role: "Head of E-commerce Engineering",
    period: "2011 — Present",
    description:
      "Sole developer responsible for full client support. Led a long-term re-platform to Shopify Plus and Node.js microservices, boosting page speed by 150% and reducing annual maintenance costs by over $500k.",
    tech: ["Shopify Plus", "Node.js", "React", "Liquid", "GraphQL", "LAMP"],
  },
  {
    company: "Celebros",
    role: ".NET Programmer / DBA",
    period: "2006 — 2011",
    description:
      "Integrated diverse product data feeds into proprietary search systems, reverse-engineered frontends for seamless migration, and built enterprise internal tools for analytics and machine-learning initiatives.",
    tech: [".NET", "MS SQL", "Data Integration", "Enterprise Apps", "Analytics"],
  },
  {
    company: "Chaparral Motorsports",
    role: "Web Assistant",
    period: "2005 — 2006",
    description:
      "Started in data-entry and quickly built automation tooling that significantly increased team productivity for the web department.",
    tech: ["Automation", "Web Operations", "Process Improvement"],
  },
];
