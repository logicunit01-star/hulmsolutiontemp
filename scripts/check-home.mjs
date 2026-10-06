#!/usr/bin/env node
// Backward-compatible homepage check. The maintained specification lives in
// scripts/seo-page-configs/home.json and is evaluated by seo-page-check.mjs.
process.argv[2] = "home";
await import("./seo-page-check.mjs");
