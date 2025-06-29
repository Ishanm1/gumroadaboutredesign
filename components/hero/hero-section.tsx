"use client"

import { useState, useEffect } from "react"
import { ResponsiveSvg } from "@/components/responsive-svg"
import { AccessibleButton } from "@/components/accessible-button"
import { SearchInput } from "./search-input"
import { useResponsiveConfig } from "@/hooks/use-responsive-config"

export function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false)
  const { isMobile } = useResponsiveConfig()

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-4xl mx-auto text-center relative z-10 my-[30px] md:my-[57px]">
      <div
        className="flex flex-col items-center justify-center"
        style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Hero Text SVG - Responsive */}
        <div className="mb-[-30px] md:mb-[-60px] leading-7 leading-3">
          <h1 className="sr-only" id="hero-heading">
            Go from 0 to $1 - Start selling on Gumroad
          </h1>
          <ResponsiveSvg
            src="/hero-text.svg"
            alt=""
            desktopWidth={800}
            desktopHeight={120}
            priority
            aria-hidden="true"
          />
        </div>

        {/* Buttons - Mobile Stack, Desktop Side-by-side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-3 w-full max-w-md md:max-w-none">
          <AccessibleButton variant="primary" size={isMobile ? "md" : "lg"} className="w-full md:w-auto">
            Start selling
          </AccessibleButton>
          <SearchInput />
        </div>
      </div>

      <p
        className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6 mb-[30px] md:mb-[55px] font-sans px-4"
        style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transitionDelay: "400ms",
        }}
      >
        Contribute or fork on{" "}
        <a
          href="https://github.com/antiwork/gumroad"
          className="underline font-sans focus:outline-none focus:ring-2 focus:ring-black rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <span className="sr-only"> (opens in new tab)</span>
          <span aria-hidden="true"> ↗</span>
        </a>
      </p>
    </div>
  )
}
