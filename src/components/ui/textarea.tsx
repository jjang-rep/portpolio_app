import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border/50 placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-24 w-full rounded-xl border-2 bg-background/50 backdrop-blur-sm px-5 py-4 text-base font-medium shadow-sm transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        "hover:border-border hover:shadow-md",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
