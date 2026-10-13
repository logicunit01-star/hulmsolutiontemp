import * as cheerio from "cheerio";

async function checkNav() {
  const res = await fetch("https://hulmsolutiontemp.vercel.app/");
  const html = await res.text();
  const $ = cheerio.load(html);
  const links = new Set();
  $("header a[href], footer a[href]").each((_, el) => {
    const h = $(el).attr("href");
    if (h && h.startsWith("/") && !h.startsWith("#")) links.add(h);
  });

  console.log(`Checking ${links.size} navigation links on staging...`);
  const errors = [];
  for (const l of links) {
    const r = await fetch("https://hulmsolutiontemp.vercel.app" + l, { redirect: "manual" });
    if (r.status !== 200) {
      errors.push({ link: l, status: r.status, location: r.headers.get("location") });
    }
  }
  console.log("Nav check done. Errors/Redirects:", errors);
}

checkNav();
