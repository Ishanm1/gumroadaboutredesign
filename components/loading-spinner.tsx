"use client"

import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
  text?: string
}

export function LoadingSpinner({ size = "md", className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      <div
        className={cn("animate-spin rounded-full border-2 border-gray-300 border-t-black", sizeClasses[size])}
        role="status"
        aria-label="Loading"
      />
      {text && <span className="text-sm text-gray-600 font-abc-whyte">{text}</span>}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
