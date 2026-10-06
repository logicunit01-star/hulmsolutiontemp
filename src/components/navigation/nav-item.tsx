import React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { type NavItem as NavItemType } from "@/lib/navigation"
import { cn } from "@/lib/utils"

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
}

export function NavItem({ item, isActive }: NavItemProps) {
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren && item.children) {
    const children = item.children;
    return (
      <div className="group relative">
        <button
          className={cn(
            "flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
            isActive ? "text-primary" : "text-text"
          )}
          aria-expanded="false"
          aria-haspopup="true"
        >
          {item.title}
          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
        </button>
        <div className="invisible absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 z-50">
          <div 
            className={cn(
              "rounded-xl border border-border bg-white p-4 shadow-xl",
              children.length > 12 ? "w-[800px]" : children.length > 5 ? "w-[600px]" : "w-64"
            )}
          >
            <div 
              className={cn(
                "grid gap-x-6 gap-y-2",
                children.length > 12 ? "grid-cols-3" : children.length > 5 ? "grid-cols-2" : "grid-cols-1"
              )}
            >
              {children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex flex-col rounded-md px-4 py-3 hover:bg-background-muted group/link focus-visible:bg-background-muted focus-visible:outline-none transition-colors"
                >
                  <span className="text-sm font-semibold text-text group-hover/link:text-primary transition-colors">
                    {child.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "text-[15px] font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
        isActive ? "text-primary" : "text-text"
      )}
    >
      {item.title}
    </Link>
  );
}
