import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary/20 selection:text-primary-foreground dark:bg-input/30 border-border/50 flex h-12 w-full min-w-0 rounded-xl border-2 bg-background/50 backdrop-blur-sm px-5 py-3 text-base font-medium shadow-sm transition-all duration-300 outline-none file:inline-flex file:h-9 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:shadow-lg",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 aria-invalid:ring-offset-2",
        "hover:border-border hover:shadow-md",
        className
      )}
      {...props}
    />
  )
}

export { Input }
