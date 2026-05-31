import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  SITE_URL,
  SITE_NAME,
  getCanonicalUrl,
  navLinks,
} from "../src/app/config/site.js";

const distDir = path.join(process.cwd(), "dist");
const templatePath = path.join(distDir, "index.html");
const template = readFileSync(templatePath, "utf8");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
}

function setMeta(html, attribute, key, content) {
  const escapedKey = escapeRegExp(key);
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${escapedKey}"[^>]*>`, "m");

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, href) {
  return html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeHtml(href)}" />`,
  );
}

function routeHtml(page) {
  const canonical = getCanonicalUrl(page.path);
  const image = page.ogImage;

  let html = template;
  html = setTitle(html, page.title);
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "name", "keywords", page.keywords);
  html = setMeta(html, "name", "author", SITE_NAME);
  html = setMeta(html, "name", "robots", "index, follow");
  html = setCanonical(html, canonical);

  html = setMeta(html, "property", "og:site_name", SITE_NAME);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:type", "website");
  html = setMeta(html, "property", "og:url", canonical);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:image:secure_url", image);
  html = setMeta(html, "property", "og:image:type", "image/jpeg");
  html = setMeta(html, "property", "og:image:width", "1200");
  html = setMeta(html, "property", "og:image:height", "630");

  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);
  html = setMeta(html, "name", "twitter:image", image);

  return html;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${navLinks
  .map(
    (page) => `  <url>
    <loc>${getCanonicalUrl(page.path)}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>${page.path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${page.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`, "utf8");
writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

for (const page of navLinks) {
  const html = routeHtml(page);

  if (page.path === "/") {
    writeFileSync(templatePath, html, "utf8");
    continue;
  }

  const routeDir = path.join(distDir, page.path.replace(/^\//, ""));
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(path.join(routeDir, "index.html"), html, "utf8");
}
