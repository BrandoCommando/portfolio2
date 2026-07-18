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

export interface ResumeSkill {
  name: string;
  /** e.g. "2010-26" — omitted when not shown */
  years?: string;
  /** Self-rated depth out of 10 */
  rating?: number;
}

export interface ResumeSkillCategory {
  title: string;
  skills: ResumeSkill[];
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

export const resumeSkillCategories: ResumeSkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "PHP", years: "2010-26", rating: 10 },
      { name: "Javascript", years: "2003-26", rating: 10 },
      { name: "C++ (embedded)", years: "2010-26", rating: 8 },
      { name: "C#", years: "2009-12", rating: 7 },
      { name: "Java", years: "2003-15", rating: 7 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Node/Express.js / React", years: "2022-26", rating: 9 },
      { name: ".NET Framework", years: "2006-11", rating: 8 },
      { name: "JDK", years: "2003-05", rating: 5 },
      { name: "Gradle / Kotlin", years: "2012-14", rating: 7 },
      { name: "Liquid", years: "2022-26", rating: 10 },
      { name: "Angular", years: "2026", rating: 5 },
    ],
  },
  {
    title: "DB/Storage",
    skills: [
      { name: "MySQL", years: "2011-26", rating: 10 },
      { name: "MS SQL", years: "2006-11", rating: 8 },
      { name: "Oracle", years: "2011-26", rating: 8 },
      { name: "Redis", years: "2023-26", rating: 8 },
      { name: "GraphQL", years: "2023-26", rating: 9 },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux Debian", years: "2010-26", rating: 8 },
      { name: "RHEL", years: "2012-15", rating: 6 },
      { name: "MacOS", years: "2013-26", rating: 8 },
      { name: "Windows / Server", years: "2007-10", rating: 6 },
    ],
  },
  {
    title: "Scripting/Automation/AI",
    skills: [
      { name: "Unix Bash", years: "2010-26", rating: 10 },
      { name: "Windows Powershell", years: "2008-12", rating: 5 },
      { name: "GPT/Claude", years: "2024-26", rating: 5 },
      { name: "Cursor / OpenClaw", years: "2026", rating: 4 },
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  { period: "2024 - PRESENT", title: "Mathematics" },
  { period: "2004", title: "Java Certification" },
];

export const gaTrackingId = "UA-20719255-1";
