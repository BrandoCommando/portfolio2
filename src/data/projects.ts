export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  /** External link (e.g. store listing, demo). */
  href?: string;
  /** When true, included in the dynamically generated /resume page. */
  showOnResume?: boolean;
  /** Short link label in the resume time column. */
  resumeLabel?: string;
  /** HTML description for the resume (falls back to description). */
  resumeDescription?: string;
}

export const projects: Project[] = [
  {
    title: "Book Quest",
    description:
      "App designed to inspire/reward young students to read more. Gamify reading. Built on Lovable.",
    tech: ["Lovable", "Typescript", "AI"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Code",
    href: "https://wordsonpaper.lovable.app",
    showOnResume: true,
    resumeLabel: "Book Quest",
    resumeDescription:
      '<a href="https://wordsonpaper.lovable.app">Book Quest</a> <span class="noscreen">(https://wordsonpaper.lovable.app)</span> is a app which teachers (or parents) of young students can inspire their students to read more. Teachers enter a roster of students, a list of books, quizzes and rewards. Students can read books and claim rewards by answering the quizzes correctly. All free. Built on Lovable.',
  },
  {
    title: "Digital Whiteboard",
    description:
      "Realtime collaborative drawing canvas built for low-latency updates and a smooth user experience across devices.",
    tech: ["Cloudflare D1", "Cloudflare Workers", "Canvas", "Next.js"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "Image",
    href: "https://board.brandonbowles.com",
    showOnResume: true,
    resumeLabel: "Board",
    resumeDescription:
      '<a href="https://board.brandonbowles.com">Digital Whiteboard</a><span class="noscreen"> (https://board.brandonbowles.com)</span> provides realtime canvas drawing. Share your drawings with others, and watch them respond in drawing in real time. Built by Cursor.',
  },
  {
    title: "Open Explorer",
    description:
      "Open-source Android file manager built with a small team. Integrates multiple Google and Android APIs, surpassed 100k downloads, and used Jenkins for CI/CD and testing.",
    tech: ["Android", "Java", "Google APIs", "Jenkins", "Open Source"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Workflow",
    href: "https://play.google.com/store/apps/details?id=org.brandroid.openmanager",
    showOnResume: true,
    resumeLabel: "Open Explorer",
    resumeDescription:
      "Open Explorer is the world&rsquo;s most compatible open-source file manager for Android. Worked with 2 other coders, and one designer. Implements many Google Web APIs as well as Android APIs. Over 100k downloads. <strong>CI/CD / Testing</strong> via <strong>Jenkins</strong>.",
  },
];
