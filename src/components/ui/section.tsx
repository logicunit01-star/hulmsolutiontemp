import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  muted?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, muted = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-14 md:py-20 lg:py-24", // 56px, 80px, 96px vertical padding
          muted ? "bg-background-muted" : "bg-background",
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
