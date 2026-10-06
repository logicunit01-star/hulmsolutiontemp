import { preload } from "react-dom";

/** Decorative POS line-art pattern used behind hero banners (8% opacity). */
export const HERO_PATTERN = "/images/home/cta-bg-pattern.webp";

/**
 * The pattern is a CSS background, so the browser only finds it after the stylesheet loads; on hero
 * banners it is the LCP element. Preloading lets it download alongside the HTML.
 */
export function preloadHeroPattern() {
  preload(HERO_PATTERN, { as: "image", fetchPriority: "high" });
}
