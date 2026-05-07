export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Brain",
    skills: [
      { name: "JavaScript", level: 100 },
      { name: "PHP", level: 100 },
      { name: "C++ (Embedded)", level: 80 },
      { name: "C#", level: 70 },
      { name: "Java", level: 70 },
    ],
  },
  {
    category: "Frameworks & Commerce",
    icon: "Globe",
    skills: [
      { name: "Node / Express / React", level: 90 },
      { name: "Liquid", level: 100 },
      { name: "Shopify Themes & Apps", level: 95 },
      { name: ".NET Framework", level: 80 },
      { name: "Angular", level: 50 },
    ],
  },
  {
    category: "Data, Infra & Automation",
    icon: "Server",
    skills: [
      { name: "MySQL", level: 100 },
      { name: "Oracle", level: 80 },
      { name: "Redis", level: 80 },
      { name: "GraphQL", level: 90 },
      { name: "Unix Bash", level: 100 },
    ],
  },
];
