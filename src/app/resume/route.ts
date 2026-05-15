import resumeHtml from "./resume.html";

export function GET() {
  return new Response(resumeHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
