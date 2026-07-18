import { experiences, type Experience } from "@/data/experience";
import { projects } from "@/data/projects";
import {
  gaTrackingId,
  resumeContact,
  resumeEducation,
  resumeSkillCategories,
  resumeSummary,
  type ResumeSkill,
} from "@/data/resume";

const RESUME_CSS = `@media (min-width: 768px) {
  .fleft { float: left; max-width: 4.5in; }
  .fright { float: right; max-width: 3in; }
  .skills article { display: grid; grid-template-columns: 1fr 1fr 1fr; padding-right: 20px; }
  .skills ul { margin-bottom: 0px; }
  .contact a, .contact p > span { display: inline-flex; align-items: center; }
}
@media screen and (min-width: 768px) {
  .page { background-color: gray; text-align: center; }
  .page .content { background-color: white; margin: 0 auto; text-align: left; max-width: 7.5in; padding: 0.5in; padding-top: 0px; border: 1px solid black; border-top: 0px; border-bottom: 0px; }
  header { padding-top: 0.25in; }
}
@media screen {
  .noscreen { display: none; }
  header { position: -webkit-sticky; position: sticky; top: 0px; background-color: white; padding-bottom: 10px; }
  a { text-decoration: underline; }
}
@media screen and (max-width: 767px) {
  .address { display: none; }
  header .fleft { float: left; }
  header aside { float: left; }
}
@media print {
  .noprint { display: none; }
  .fleft { float: left; max-width: 4.5in; }
  .fright { float: right; max-width: 3in; }
  a { text-decoration: none; color: black; }
  .skills ul li, ul strong, p strong { margin-bottom: 0px; }
  .contact img { display: none; }
  .skills article { display: grid; grid-template-columns: 1fr 1fr 1fr; padding-right: 20px; }
}
html { font-size: 11pt; line-height: 1.4; color: #222; }
body { font-family: "Open Sans", sans-serif; margin: 0; }
section { margin-top: 0.5em; padding-top: 0.5em; border-top: 1px solid black; }
header section { margin: 0px; border: 0px; }
header p { margin: 0px; }
.page { margin: 0 auto; padding-left: 10px; padding-right: 10px; }
.rightbar { display: inline-block; padding-right: 5px; border-right: 1px solid black; }
h1, h2, h3, h4, h5 { margin: 0; }
h1 { font-size: 180%; }
h2 { font-size: 130%; }
h3 { font-size: 120%; font-weight: normal; }
h4 { font-size: 110%; }
h5 { font-size: 80%; }
ul { -webkit-padding-start: 20px; }
ul li { padding: 0px; }
.contact { text-align: center; }
.skills ul { list-style-type: none; font-size: 75%; }
.skills ul li { margin-right: 10px; }
.employers ul, .employers p { font-size: 90%; }
.employers h2, .education h2, .portfolio h2 { margin-bottom: 10px; }
ul strong, p strong { font-weight: 700; }
a { color: #006; }
.job + .job { margin-top: 10px; }
.job { display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-areas:
  "time location"
  "time details"; }
.job .time { grid-area: time; }
.job .location { grid-area: location; }
.job .details { grid-area: details; }`;

function escapeAttr(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeText(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatSkill(skill: ResumeSkill): string {
  if (skill.years == null || skill.rating == null) {
    return escapeText(skill.name);
  }
  return `${escapeText(skill.name)} <small>(${escapeText(skill.years)}, <sup>${skill.rating}</sup>/<sub>10</sub>)</small>`;
}

function renderJob(exp: Experience): string {
  const period = exp.resumePeriod ?? exp.period;
  const location = exp.location
    ? `<strong>${escapeText(exp.company)}</strong>, ${escapeText(exp.location)} &mdash; <i>${escapeText(exp.role)}</i>`
    : `<strong>${escapeText(exp.company)}</strong> &mdash; <i>${escapeText(exp.role)}</i>`;

  const bullets =
    exp.resumeBullets?.length
      ? exp.resumeBullets
      : [exp.description];

  const intro = exp.resumeIntro
    ? `<p>${exp.resumeIntro}</p>\n`
    : "";

  return `<div class="job">
<div class="time">${escapeText(period)}</div>
<div class="location">${location}</div>
<div class="details">
${intro}<ul>
${bullets.map((b) => `<li>${b}</li>`).join("\n")}
</ul>
</div>
</div>`;
}

export function buildResumeHtml(): string {
  const contact = resumeContact;
  const jobs = experiences.filter((e) => e.showOnResume);
  const resumeProjects = projects.filter((p) => p.showOnResume);

  const skillsHtml = resumeSkillCategories
    .map(
      (cat) => `<ul><li><strong>${escapeText(cat.title)}</strong></li>
${cat.skills.map((s) => `<li>${formatSkill(s)}</li>`).join("\n")}
</ul>`,
    )
    .join("\n");

  const educationHtml = resumeEducation
    .map(
      (ed) => `<div class="job">
<div class="time">${escapeText(ed.period)}</div>
<div class="location">${escapeText(ed.title)}</div>
</div>`,
    )
    .join("\n");

  const projectsHtml = resumeProjects
    .map((p) => {
      const label = p.resumeLabel ?? p.title;
      const desc = p.resumeDescription ?? escapeText(p.description);
      const time = p.href
        ? `<a href="${escapeAttr(p.href)}">${escapeText(label)}</a>`
        : escapeText(label);
      return `<div class="job">
<div class="time">${time}</div>
<div class="location">${desc}
</div>
</div>`;
    })
    .join("\n");

  return `<!doctype html>
<!--[if lte IE 10 ]>   <html class="skin3 no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 11)|!(IE)]><!--> <html class="skin3 no-js" lang="en"> <!--<![endif]-->
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaTrackingId}');
</script>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="theme-color" content="#134b91">
<meta name="viewport" content="width=device-width">
<title>${escapeText(contact.name)}, ${escapeText(contact.title)}</title>
<link href="https://fonts.gstatic.com/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4saVIUwaEQbjB_mQ.woff2" as="font" crossorigin="true" rel="preload">
<link href="https://fonts.gstatic.com/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVIUwaEQbjA.woff2" as="font" crossorigin="true" rel="preload">
<style type="text/css">
${RESUME_CSS}
</style>
</head>
<body>
<div class="page">
<article class="content">
<header>
<section class="contact">
<h1 class="byline-name">${escapeText(contact.name)}</h1>
<p><span class="address"><img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" width="16" height="16" style="padding-right:2px" />${escapeText(contact.location)}</span>
&nbsp;
<a href="${escapeAttr(contact.phoneHref)}"><img src="https://cdn-icons-png.flaticon.com/128/126/126509.png" width="16" height="16" style="padding-right:6px" />${escapeText(contact.phone)}</a>
&nbsp;
<a href="mailto:${escapeAttr(contact.email)}"><img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" width="16" height="16" style="padding-right:4px" />${escapeText(contact.email)}</a>
&nbsp;
<br class="noscreen" />
<small><a href="${escapeAttr(contact.linkedin.url)}" title="My LinkedIn profile"><img class="noprint" src="https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8" width="16" height="16" style="padding-right:4px" /><span class="noprint">${escapeText(contact.linkedin.label)}</span><span class="noscreen">${escapeText(contact.linkedin.printLabel)}</span></a>
&nbsp;
<a href="${escapeAttr(contact.github.url)}" title="My GitHub profile"><img class="noprint" src="https://github.githubassets.com/favicons/favicon.png" style="padding-right:4px" width="16" height="16" /><span class="noprint">${escapeText(contact.github.label)}</span><span class="noscreen">${escapeText(contact.github.printLabel)}</span></a>
&nbsp;
<a href="${escapeAttr(contact.portfolio.url)}"><img src="https://cdn-icons-png.flaticon.com/128/4365/4365933.png" width="16" height="16" style="padding-right:4px" /><span class="noprint">${escapeText(contact.portfolio.label)}</span><span class="noscreen">${escapeText(contact.portfolio.printLabel)}</span>
</a>
</small>
</p>
</section>
</header>
<div class="main">

<section class="summary">
<h2 id="summary">SUMMARY</h2>
<small>
${resumeSummary.map((p) => `<p>${p}</p>`).join("\n")}
</small>
</section>

<section class="skills">
<h2 id="skills">SKILLS <small style="font-weight:normal;font-size:14px;">(Years used, self-rated knowledge depth)</small></h2>
<article>
${skillsHtml}
</article>
</section>

<section class="employers">
<article>
<h2 id="experience">EMPLOYMENT HISTORY</h2>
${jobs.map(renderJob).join("\n\n")}
</article>
</section>

<section class="education">
<h2 id="education">EDUCATION</h2>
${educationHtml}
</section>

<section class="portfolio">
<h2 id="portfolio">Projects / Portfolio</h2>
${projectsHtml}
</section>


<div style="clear:both"></div>
</div>

</article> <!-- /.content -->
</div> <!-- /.page -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$("nav a").click(function(e){var href=$(this).attr("href");console.log(href);var anc=$(href);if(anc.length>0){
  var atop=anc.offset().top;
  atop -= $("header,.header").height() + 10;
  $(window).scrollTop(atop);
  e.preventDefault();return false;}else{console.warn("no anc?");return true;}});
</script>
</body>
</html>
`;
}
