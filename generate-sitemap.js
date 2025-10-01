import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your domain
const siteUrl = "https://brittlebones-sa.org.za";

// List of routes
const routes = [
  "/",
  "/about",
  "/contact",
  "/get-involved",
  "/events",
  "/gallery",
  "/donate",
  "/volunteer",
  "/item-donation",
  "/admin-login",
  "/admin-dashboard",
];

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Write file to public/
const filePath = path.join(__dirname, "public", "sitemap.xml");
fs.writeFileSync(filePath, sitemap, "utf8");

console.log("✅ Sitemap generated at:", filePath);
