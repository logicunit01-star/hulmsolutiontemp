"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { mainNav } from "@/lib/navigation"
import { NavItem } from "./nav-item"

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {mainNav.map((item) => {
        const isActive = pathname === item.href || (item.children?.some(c => c.href === pathname) ?? false);
        return <NavItem key={item.title} item={item} isActive={isActive} />;
      })}
    </nav>
  )
}
