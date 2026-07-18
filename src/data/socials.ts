export type SocialIconName = "Github" | "LinkedIn" | "Thingiverse";

export interface Social {
  id: "github" | "linkedin" | "thingiverse";
  name: string;
  url: string;
  icon: SocialIconName;
  /** Host/path shown on printed resume */
  printLabel: string;
}

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/brandocommando",
    icon: "Github",
    printLabel: "github.com/brandocommando",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brandon-bowles-78a513266",
    icon: "LinkedIn",
    printLabel: "linkedin.com/in/brandon-bowles-78a513266",
  },
  {
    id: "thingiverse",
    name: "Thingiverse",
    url: "https://www.thingiverse.com/brandocommando",
    icon: "Thingiverse",
    printLabel: "thingiverse.com/brandocommando",
  },
];

export function getSocial(id: Social["id"]): Social {
  const social = socials.find((s) => s.id === id);
  if (!social) throw new Error(`Unknown social: ${id}`);
  return social;
}
