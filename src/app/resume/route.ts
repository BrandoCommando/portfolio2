import { readFileSync } from "node:fs";
import { join } from "node:path";

const resumePath = join(process.cwd(), "src/app/resume/resume.html");

let cachedHtml: string | undefined;

export function GET() {
  if (cachedHtml === undefined) {
    cachedHtml = readFileSync(resumePath, "utf8");
  }

  return new Response(cachedHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
