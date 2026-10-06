/**
 * Real Hulm product screenshots (public/images/product/). Used by the "See it in Hulm" block on
 * module, industry, features and country pages. Alt text names the page topic via the caption.
 */
export type ProductScreen = { src: string; alt: string; caption: string; width: number; height: number };

export const productScreens = {
  "pos-checkout-screen": { src: "/images/product/pos-checkout-screen.webp", alt: "Hulm POS checkout screen with product catalogue and shopping cart", caption: "Checkout: pick products, see tax and totals, and complete the sale.", width: 1201, height: 692 },
  "pos-inventory-screen": { src: "/images/product/pos-inventory-screen.webp", alt: "Hulm POS inventory screen showing stock quantities with add and update actions", caption: "Stock: update quantities straight from the POS inventory screen.", width: 800, height: 462 },
  "inventory-stock-screen": { src: "/images/product/inventory-stock-screen.webp", alt: "Hulm inventory management screen with total items, low stock and out-of-stock counts", caption: "Inventory: total items, low-stock and out-of-stock counts at a glance.", width: 1201, height: 688 },
  "sales-orders-screen": { src: "/images/product/sales-orders-screen.webp", alt: "Hulm order management screen listing sales orders with paid and fulfilled status", caption: "Orders: every sales order with payment and fulfilment status.", width: 800, height: 459 },
  "hulm-apps-workspace": { src: "/images/product/hulm-apps-workspace.webp", alt: "Hulm workspace showing POS, customer, order, inventory, purchase order, reporting and vendor apps", caption: "One login: open POS, customers, orders, inventory, purchasing, reporting and vendors.", width: 1293, height: 698 },
  "restaurant-dashboard": { src: "/images/product/restaurant-dashboard.webp", alt: "Hulm restaurant POS dashboard with revenue, active tables, low-stock alerts and sales trend", caption: "Dashboard: today's revenue, active tables, low-stock alerts and sales trend.", width: 1203, height: 687 },
  "restaurant-table-management": { src: "/images/product/restaurant-table-management.webp", alt: "Hulm restaurant POS table management screen showing free, occupied and served tables", caption: "Tables: see which tables are free, occupied or served.", width: 1201, height: 691 },
  "restaurant-menu-order": { src: "/images/product/restaurant-menu-order.webp", alt: "Hulm restaurant POS menu and order screen with takeaway cart", caption: "Orders: build dine-in or takeaway orders from the menu.", width: 1199, height: 684 },
  "restaurant-inventory": { src: "/images/product/restaurant-inventory.webp", alt: "Hulm restaurant inventory screen with ingredient stock levels and low-stock status", caption: "Ingredients: stock levels with low-stock status.", width: 1200, height: 698 },
  "mobile-pos-phone": { src: "/images/product/mobile-pos-phone.webp", alt: "Hulm mobile POS running on a smartphone", caption: "Mobile POS: the same Hulm workspace on a phone.", width: 1080, height: 1350 },
} satisfies Record<string, ProductScreen>;

export type ProductScreenKey = keyof typeof productScreens;

const retailSet: ProductScreenKey[] = ["pos-checkout-screen", "inventory-stock-screen", "sales-orders-screen"];
const restaurantSet: ProductScreenKey[] = ["restaurant-dashboard", "restaurant-table-management", "restaurant-menu-order", "restaurant-inventory"];

/** Which screenshots each page shows (route -> screens, first one is the large image). */
export const screensByRoute: Record<string, ProductScreenKey[]> = {
  "/features/": ["pos-checkout-screen", "pos-inventory-screen", "hulm-apps-workspace"],
  "/inventory-management/": ["inventory-stock-screen", "pos-inventory-screen", "restaurant-inventory"],
  "/order-management/": ["sales-orders-screen", "restaurant-menu-order", "pos-checkout-screen"],
  "/purchase-orders/": ["hulm-apps-workspace", "inventory-stock-screen"],
  "/vendors-management/": ["hulm-apps-workspace", "inventory-stock-screen"],
  "/customer-management/": ["hulm-apps-workspace", "sales-orders-screen"],
  "/reporting-module/": ["restaurant-dashboard", "sales-orders-screen", "inventory-stock-screen"],
  "/mobile-pos/": ["mobile-pos-phone", "pos-checkout-screen"],
  "/industries/restaurant-pos/": restaurantSet,
  "/industries/cafe/": ["restaurant-menu-order", "restaurant-dashboard", "restaurant-inventory"],
  "/industries/bakery-pos-system/": ["pos-checkout-screen", "restaurant-inventory", "sales-orders-screen"],
  "/industries/retail-store/": retailSet,
  "/industries/clothing-store/": retailSet,
  "/industries/pharmacy-store/": ["pos-checkout-screen", "inventory-stock-screen", "pos-inventory-screen"],
  "/industries/salon-pos/": ["pos-checkout-screen", "sales-orders-screen", "hulm-apps-workspace"],
  "/industries/jewellery-shop/": retailSet,
  "/industries/electric-store/": retailSet,
  "/industries/furniture-store/": ["sales-orders-screen", "pos-checkout-screen", "inventory-stock-screen"],
  "/industries/toys-store/": retailSet,
  "/industries/manufacturing-industries/": ["inventory-stock-screen", "sales-orders-screen", "hulm-apps-workspace"],
  "/pos-software-usa/": ["pos-checkout-screen", "restaurant-dashboard", "inventory-stock-screen"],
  "/pos-software-ksa/": ["pos-checkout-screen", "restaurant-dashboard", "inventory-stock-screen"],
  "/pos-software-uae/": ["pos-checkout-screen", "restaurant-dashboard", "inventory-stock-screen"],
  "/pos-software-qatar/": ["pos-checkout-screen", "restaurant-dashboard", "inventory-stock-screen"],
};

export function screensFor(route: string) {
  return (screensByRoute[route] ?? []).map((key) => productScreens[key]);
}
