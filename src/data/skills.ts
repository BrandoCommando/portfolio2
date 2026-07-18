export interface Skill {
  name: string;
  /** e.g. "2010-26" — shown on the resume */
  years?: string;
  /** Self-rated depth out of 10 (portfolio bar = rating * 10) */
  rating: number;
  showOnPortfolio?: boolean;
  showOnResume?: boolean;
}

export interface SkillCategory {
  title: string;
  /** Card title on the portfolio (defaults to title) */
  portfolioTitle?: string;
  /** Lucide icon name for the portfolio skills section */
  icon?: string;
  showOnPortfolio?: boolean;
  showOnResume?: boolean;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Brain",
    skills: [
      { name: "PHP", years: "2010-26", rating: 10 },
      { name: "JavaScript", years: "2003-26", rating: 10 },
      { name: "C++ (embedded)", years: "2010-26", rating: 8 },
      { name: "C#", years: "2009-12", rating: 7 },
      { name: "Java", years: "2003-15", rating: 7 },
      { name: "Python", years: "2015-26", rating: 5 },
      { name: "Rust", years: "2026", rating: 4 },
    ],
  },
  {
    title: "Frameworks",
    icon: "Globe",
    skills: [
      { name: "Node/Express.js / React", years: "2022-26", rating: 9 },
      { name: ".NET Framework", years: "2006-11", rating: 8 },
      { name: "JDK", years: "2003-05", rating: 5, showOnPortfolio: false },
      { name: "Gradle / Kotlin", years: "2012-14", rating: 7, showOnPortfolio: false },
      { name: "Liquid", years: "2022-26", rating: 10 },
      { name: "Angular", years: "2026", rating: 5 },
    ],
  },
  {
    title: "Platforms",
    icon: "Store",
    skills: [
      { name: "Shopify", years: "2022-26", rating: 10 },
      { name: "Magento", years: "2004-08", rating: 5 },
      { name: "Wordpress", years: "2002-10", rating: 5 },
      { name: "RPro", years: "2011-26", rating: 8 },
      { name: "X-Cart", years: "2008-26", rating: 10 },
    ],
  },
  {
    title: "DB/Storage",
    portfolioTitle: "Data & Storage",
    icon: "Server",
    skills: [
      { name: "MySQL", years: "2011-26", rating: 10 },
      { name: "MS SQL", years: "2006-11", rating: 8, showOnPortfolio: false },
      { name: "Oracle", years: "2011-26", rating: 8 },
      { name: "Redis", years: "2023-26", rating: 8 },
      { name: "GraphQL", years: "2023-26", rating: 9 },
    ],
  },
  {
    title: "Operating Systems",
    icon: "Monitor",
    showOnPortfolio: true,
    skills: [
      { name: "Linux Debian", years: "2010-26", rating: 8 },
      { name: "RHEL", years: "2012-15", rating: 6 },
      { name: "MacOS", years: "2013-26", rating: 8 },
      { name: "Windows / Server", years: "2007-10", rating: 6 },
    ],
  },
  {
    title: "Scripting/Automation/AI",
    portfolioTitle: "Automation & AI",
    icon: "Terminal",
    skills: [
      { name: "Unix Bash", years: "2010-26", rating: 10 },
      {
        name: "Windows Powershell",
        years: "2008-12",
        rating: 5,
        showOnPortfolio: false,
      },
      { name: "GPT/Claude", years: "2024-26", rating: 5 },
      { name: "Cursor / OpenClaw", years: "2026", rating: 4 },
    ],
  },
];

function isVisible(
  flag: boolean | undefined,
  defaultVisible = true,
): boolean {
  return flag ?? defaultVisible;
}

/** Categories/skills for the portfolio Tech Stack section. */
export function getPortfolioSkillCategories() {
  return skillCategories
    .filter((cat) => isVisible(cat.showOnPortfolio))
    .map((cat) => ({
      category: cat.portfolioTitle ?? cat.title,
      icon: cat.icon ?? "Brain",
      skills: cat.skills
        .filter((skill) => isVisible(skill.showOnPortfolio))
        .map((skill) => ({
          name: skill.name,
          level: skill.rating * 10,
        })),
    }))
    .filter((cat) => cat.skills.length > 0);
}

/** Categories/skills for the printable /resume page. */
export function getResumeSkillCategories() {
  return skillCategories
    .filter((cat) => isVisible(cat.showOnResume))
    .map((cat) => ({
      title: cat.title,
      skills: cat.skills.filter((skill) => isVisible(skill.showOnResume)),
    }))
    .filter((cat) => cat.skills.length > 0);
}
