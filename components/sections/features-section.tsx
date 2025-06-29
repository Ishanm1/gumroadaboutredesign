"use client"

import type React from "react"
import { ResponsiveSvg } from "@/components/responsive-svg"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
import { useResponsiveConfig } from "@/hooks/use-responsive-config"
import { COLORS } from "@/lib/constants"

export function FeaturesSection() {
  const { isMobile, duration, threshold } = useResponsiveConfig()

  const featuresGrid = useScrollFadeIn({
    threshold,
    duration,
    direction: isMobile ? "none" : "up",
  })

  return (
    <section
      className="relative z-10 px-4 mt-[-60px] md:px-6 md:mt-[-95px] py-0 mr-0"
      style={{ backgroundColor: COLORS.background.secondary }}
      aria-labelledby="features-heading"
    >
      <h2 className="sr-only" id="features-heading">
        Platform Features
      </h2>
      <div className="max-w-5xl mx-auto relative my-[-20px] md:my-[-35px]">
        <div className="absolute inset-x-0 top-0 h-full border-y z-0 w-screen left-1/2 -translate-x-1/2 border-transparent"></div>
        <div ref={featuresGrid.ref as React.RefObject<HTMLDivElement>} style={featuresGrid.style}>
          <ResponsiveSvg
            src="/features-group.svg"
            alt="Platform features: Sell anything, make your own road, sell to anyone, sell anywhere"
            desktopWidth={886}
            desktopHeight={590}
            className="w-full h-auto relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  )
}
