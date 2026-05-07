export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  /** External link (e.g. store listing, demo). */
  href?: string;
}

export const projects: Project[] = [
  {
    title: "Open Explorer",
    description:
      "Open-source Android file manager built with a small team. Integrates multiple Google and Android APIs, surpassed 100k downloads, and used Jenkins for CI/CD and testing.",
    tech: ["Android", "Java", "Google APIs", "Jenkins", "Open Source"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Workflow",
    href: "https://play.google.com/store/apps/details?id=org.brandroid.openmanager",
  },
  {
    title: "Brandon's Store",
    description:
      "Headless Shopify storefront combining a Node.js backend and Next.js frontend. Focused on modern architecture and performance for flexible e-commerce experiences.",
    tech: ["Shopify", "Node.js", "Next.js", "Headless Commerce"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Code",
    href: "https://store.brandonbowles.com",
  },
  {
    title: "Digital Whiteboard",
    description:
      "Realtime collaborative drawing canvas built for low-latency updates and a smooth user experience across devices.",
    tech: ["Realtime Web", "Canvas", "Node.js", "Frontend Engineering"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "Image",
    href: "https://board.brandonbowles.com",
  },
];
