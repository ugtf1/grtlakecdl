// generate-sitemap.js
import { writeFileSync } from "fs";

const hostname = "https://gl-cdl.com";
const routes = [
  "/", 
  "/about", 
  "/contact", 
  "/dashboard"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${hostname}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("")}
</urlset>`;

writeFileSync("dist/sitemap.xml", sitemap);
console.log(" Sitemap generated at dist/sitemap.xml");
