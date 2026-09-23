/* Screenshot live project sites into portfolio card images. Run: node scripts/screenshot_projects.mjs */
import { chromium } from "playwright-core";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images", "projects");

const CHROME_CANDIDATES = [
  String.raw`C:\Users\paul\AppData\Local\ms-playwright\chromium-1234\chrome-win64\chrome.exe`,
  String.raw`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`,
];
const executablePath = CHROME_CANDIDATES.find(existsSync);
if (!executablePath) {
  console.error("No chromium/edge executable found");
  process.exit(1);
}

const targets = process.argv.slice(2).length
  ? JSON.parse(process.argv.slice(2).join(" "))
  : [{ url: "https://ktrack.vercel.app", out: "ktrack.webp" }];

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({
  viewport: { width: 1280, height: 860 },
  deviceScaleFactor: 1.5,
});

for (const t of targets) {
  try {
    await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(6000);
    const out = path.join(OUT_DIR, t.out);
    await page.screenshot({ path: out, type: "webp", quality: 92 });
    console.log(`Captured ${t.url} -> ${out}`);
  } catch (err) {
    console.error(`FAILED ${t.url}: ${err.message}`);
    process.exitCode = 1;
  }
}

await browser.close();
