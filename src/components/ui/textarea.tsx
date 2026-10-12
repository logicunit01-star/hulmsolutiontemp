import * as React from "react"
import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[96px] w-full rounded-xl border border-[#E4E2DA] bg-white px-4 py-3 text-sm text-[#0F2A26] ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167c70] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-xs",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
