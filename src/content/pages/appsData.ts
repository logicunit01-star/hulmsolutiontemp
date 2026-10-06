export type AppData = {
  title: string;
  href: string;
  description: string;
  iconName: string; // We'll map this to a Lucide icon in the component
};

export const appsData: AppData[] = [
  {
    title: "Purchase Management",
    href: "/purchase-orders",
    description: "Streamline your procurement process, manage purchase orders, and track vendor deliveries from a central dashboard.",
    iconName: "ShoppingCart"
  },
  {
    title: "Customer Management",
    href: "/customer-management",
    description: "Build stronger relationships with unified customer profiles, purchase histories, and targeted promotional tools.",
    iconName: "Users"
  },
  {
    title: "Logistics Management",
    href: "/logistics-management-software",
    description: "Complete operational control for fleets, warehouses, and delivery tracking without the complexity.",
    iconName: "Truck"
  },
  {
    title: "Vendors Management",
    href: "/vendors-management",
    description: "Easily handle complex multi-party transactions, manage supplier credits, and streamline your B2B accounts.",
    iconName: "Building2"
  },
  {
    title: "Reporting & Analytics",
    href: "/reporting-module",
    description: "Stop guessing your margins. Get real-time Profit & Loss statements and deep insights into your business performance.",
    iconName: "LineChart"
  },
  {
    title: "Inventory Management",
    href: "/inventory-management",
    description: "Prevent stockouts and overstocking with automated tracking, low-stock alerts, and multi-branch syncing.",
    iconName: "Package"
  },
  {
    title: "Cattle Management",
    href: "/cattle-management-software",
    description: "Digital animal profiles, feed inventory, and FBR-compliant billing explicitly engineered for dairy farmers and livestock traders.",
    iconName: "Tractor"
  },
  {
    title: "Order Management",
    href: "/order-management",
    description: "Process offline and online orders flawlessly. Manage the entire lifecycle from cart to final delivery.",
    iconName: "ClipboardList"
  },
  {
    title: "Ecommerce Store",
    href: "/website",
    description: "Sync your physical retail inventory seamlessly with a powerful, fast online storefront.",
    iconName: "Store"
  },
  {
    title: "Mobile POS",
    href: "/mobile-pos/",
    description: "Take your checkout anywhere. Lightning-fast mobile billing that works on any smart device.",
    iconName: "Smartphone"
  }
];
