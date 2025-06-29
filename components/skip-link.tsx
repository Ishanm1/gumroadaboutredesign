"use client"

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50 font-abc-whyte"
      tabIndex={0}
    >
      Skip to main content
    </a>
  )
}
