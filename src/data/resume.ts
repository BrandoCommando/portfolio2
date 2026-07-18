export interface ResumeContact {
  name: string;
  title: string;
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  linkedin: { label: string; url: string; printLabel: string };
  github: { label: string; url: string; printLabel: string };
  portfolio: { label: string; url: string; printLabel: string };
}

export interface ResumeEducation {
  period: string;
  title: string;
}

export const resumeContact: ResumeContact = {
  name: "Brandon Bowles",
  title: "Senior Programmer",
  location: "Ventura, CA, USA",
  phone: "(805) 232-1612",
  phoneHref: "tel:805-232-1612",
  email: "BrandonBowles@gmail.com",
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/brandon-bowles-78a513266",
    printLabel: "linkedin.com/in/brandon-bowles-78a513266",
  },
  github: {
    label: "Github",
    url: "https://github.com/brandocommando",
    printLabel: "github.com/brandocommando",
  },
  portfolio: {
    label: "Portfolio",
    url: "/",
    printLabel: "portfolio.brandonbowles.com",
  },
};

/** HTML allowed for emphasis (<strong>, etc.) */
export const resumeSummary: string[] = [
  "<strong>Authentic</strong>. Human. Fiercely <strong>loyal</strong>. Veteran Full-Stack Architect who can get things <strong>done</strong>. AI <strong>empowered</strong> (Cursor, GPT, LLM), but not controlled.",
  "Dynamic Computer Programmer with over 15 years experience in full-stack development, specializing in <strong>Node.js</strong> and <strong>PHP</strong>. Hands-on experience in <strong>Shopify</strong> dev scene, covering all aspects including Shopify <strong>apps</strong>, themes, and custom Liquid / <strong>Headless</strong> storefronts. Proven ability to <strong>debug</strong> issues and <strong>deliver</strong> solutions with a tendency to replace entire teams of developers. Optimizing and modernizing tech for <strong>speed</strong>, <strong>security</strong>, modularity, accessibility.",
  "Never-ending search for knowledge, working on a Mathematics degree, and <strong>embedded</strong> software development (IoT, robotics, automation) as a passion.",
];

export const resumeEducation: ResumeEducation[] = [
  { period: "2024 - PRESENT", title: "Mathematics" },
  { period: "2004", title: "Java Certification" },
];

export const gaTrackingId = "UA-20719255-1";
