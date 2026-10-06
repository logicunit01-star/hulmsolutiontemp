import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import snapshot from "../src/content/productionParityData.json" with { type: "json" };

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "public");
const REPORT = path.join(ROOT, "planning", "production-asset-inventory-2026-09-27.json");
const PROD = "https://hulmsolutions.com";
const MIRROR = process.env.MIRROR_PRODUCTION_ASSETS === "1";
const USER_AGENT = "Mozilla/5.0 (compatible; HulmMigrationAssetAudit/1.0)";

function internalAsset(value, base = PROD) {
  if (!value || value.startsWith("data:") || value.startsWith("blob:")) return null;
  try {
    const url = new URL(value.replaceAll("&amp;", "&"), base);
    if (url.hostname.replace(/^www\./, "") !== "hulmsolutions.com") return null;
    if (!url.pathname.startsWith("/wp-content/")) return null;
    url.hash = "";
    return url.href;
  } catch {
    return null;
  }
}

function collectAssets(html) {
  const found = new Set();
  for (const match of html.matchAll(/(?:src|href|poster)=["']([^"']+)["']/gi)) {
    const asset = internalAsset(match[1]);
    if (asset) found.add(asset);
  }
  for (const match of html.matchAll(/srcset=["']([^"']+)["']/gi)) {
    for (const candidate of match[1].split(",")) {
      const asset = internalAsset(candidate.trim().split(/\s+/)[0]);
      if (asset) found.add(asset);
    }
  }
  for (const match of html.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
    const asset = internalAsset(match[1]);
    if (asset) found.add(asset);
  }
  return found;
}

async function mapLimit(items, limit, worker) {
  const output = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      output[index] = await worker(items[index], index);
    }
  }));
  return output;
}

const usage = new Map();
for (const page of Object.values(snapshot.pages)) {
  for (const asset of collectAssets(page.mainHtml)) {
    const routes = usage.get(asset) || [];
    routes.push(page.path);
    usage.set(asset, routes);
  }
  const ogImage = internalAsset(page.openGraphImage);
  if (ogImage) {
    const routes = usage.get(ogImage) || [];
    routes.push(`${page.path} (og:image)`);
    usage.set(ogImage, routes);
  }
  for (const stylesheet of page.stylesheets || []) {
    const asset = internalAsset(stylesheet);
    if (!asset) continue;
    const routes = usage.get(asset) || [];
    routes.push(`${page.path} (stylesheet)`);
    usage.set(asset, routes);
  }
}

const cssQueue = [...usage.keys()].filter((url) => new URL(url).pathname.endsWith(".css"));
const scannedCss = new Set();
while (cssQueue.length) {
  const stylesheet = cssQueue.shift();
  if (scannedCss.has(stylesheet)) continue;
  scannedCss.add(stylesheet);
  try {
    const response = await fetch(stylesheet, { redirect: "follow", headers: { "user-agent": USER_AGENT } });
    if (!response.ok) continue;
    const css = await response.text();
    const references = [
      ...[...css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)].map((match) => match[1]),
      ...[...css.matchAll(/@import\s+(?:url\()?\s*["']([^"']+)["']/gi)].map((match) => match[1]),
    ];
    for (const reference of references) {
      const asset = internalAsset(reference, stylesheet);
      if (!asset) continue;
      const routes = usage.get(asset) || [];
      routes.push(`${new URL(stylesheet).pathname} (CSS dependency)`);
      usage.set(asset, routes);
      if (new URL(asset).pathname.endsWith(".css") && !scannedCss.has(asset)) cssQueue.push(asset);
    }
  } catch {
    // The final availability pass records any unreachable stylesheet.
  }
}

const assets = [...usage.keys()].sort();
const records = await mapLimit(assets, 8, async (url, index) => {
  const parsed = new URL(url);
  const relative = decodeURIComponent(parsed.pathname).replace(/^\/+/, "");
  const destination = path.join(PUBLIC, ...relative.split("/"));
  let response;
  let error = "";
  try {
    response = await fetch(url, { method: "HEAD", redirect: "follow", headers: { "user-agent": USER_AGENT } });
    if (!response.ok || !response.headers.get("content-length")) {
      response = await fetch(url, { redirect: "follow", headers: { "user-agent": USER_AGENT, range: "bytes=0-0" } });
    }
    if (MIRROR && response.ok) {
      const full = await fetch(url, { redirect: "follow", headers: { "user-agent": USER_AGENT } });
      if (!full.ok) throw new Error(`${full.status} ${full.statusText}`);
      await fs.mkdir(path.dirname(destination), { recursive: true });
      await fs.writeFile(destination, Buffer.from(await full.arrayBuffer()));
    }
  } catch (caught) {
    error = caught instanceof Error ? caught.message : String(caught);
  }
  console.log(`[${index + 1}/${assets.length}] ${response?.status || "ERR"} ${parsed.pathname}`);
  return {
    url,
    path: parsed.pathname,
    status: response?.status || 0,
    contentType: response?.headers.get("content-type") || "",
    bytes: Number(response?.headers.get("content-length") || 0),
    localPath: path.relative(ROOT, destination).replaceAll("\\", "/"),
    mirrored: MIRROR && Boolean(response?.ok),
    usedBy: [...new Set(usage.get(url))],
    error,
  };
});

const summary = {
  generatedAt: new Date().toISOString(),
  source: PROD,
  assetCount: records.length,
  available: records.filter((record) => record.status >= 200 && record.status < 400).length,
  unavailable: records.filter((record) => record.status < 200 || record.status >= 400).length,
  knownBytes: records.reduce((sum, record) => sum + record.bytes, 0),
  mirrored: MIRROR,
  records,
};

await fs.mkdir(path.dirname(REPORT), { recursive: true });
await fs.writeFile(REPORT, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ ...summary, records: undefined }, null, 2));
