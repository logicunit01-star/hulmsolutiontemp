import * as React from "react"
import NextLink from "next/link"
import { cn } from "@/lib/utils"

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  asChild?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        ref={ref}
        className={cn(
          "text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
          className
        )}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)
Link.displayName = "Link"

export { Link }
