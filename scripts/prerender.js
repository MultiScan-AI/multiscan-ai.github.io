// After the build: writes the rendered page into dist/index.html, fills in the site address,
// and writes robots.txt and sitemap.xml. Run by `npm run build`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// The public address of the site. Change it here (or set SITE_URL) when the site moves to its own domain.
const SITE_URL = (process.env.SITE_URL || "https://multiscan-ai.github.io").replace(/\/$/, "");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
// The server build is normally dist-ssr/entry-server.js, but some build plugins nest it and add a hash.
const ssrDir = path.join(root, "dist-ssr");
const entry = fs.readdirSync(ssrDir, { recursive: true })
  .map((f) => path.join(ssrDir, f))
  .find((f) => /entry-server(-[\w-]+)?\.m?js$/.test(path.basename(f)));
if (!entry) throw new Error(`No entry-server file found in ${ssrDir}`);
const { render } = await import(pathToFileURL(entry).href);

const htmlPath = path.join(dist, "index.html");
const html = fs.readFileSync(htmlPath, "utf8")
  .replaceAll("__SITE_URL__", SITE_URL)
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
fs.writeFileSync(htmlPath, html);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
fs.writeFileSync(path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `  <url><loc>${SITE_URL}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered for ${SITE_URL}`);
