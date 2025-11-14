import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const BASE_URL = "https://incorporation.lk";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// List all routes here exactly as in your React Router setup
const routes = [
  "/",
  "/home",
  "/about",
  "/contact",
  "/services",
  "/privacy-policy",
  "/refund-policy",
  "/terms-and-conditions",
  "/incobot",
];

function generateSitemap() {
  const sitemapEntries = routes
    .map((route) => {
      return `
        <url>
          <loc>${BASE_URL}${route}</loc>
          <changefreq>monthly</changefreq>
          <priority>${route === "/" ? "1.0" : "0.8"}</priority>
        </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
  </urlset>`;

  const filePath = join(__dirname, "public", "sitemap.xml");
  writeFileSync(filePath, xml.trim());

  console.log("✅ Sitemap generated at /public/sitemap.xml");
}

generateSitemap();
