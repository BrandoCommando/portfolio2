import { buildResumeHtml } from "@/lib/build-resume-html";

export function GET() {
  return new Response(buildResumeHtml(), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
