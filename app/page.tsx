"use client"

import type React from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero/hero-section"
import { ParallaxCoins } from "@/components/hero/parallax-coins"
import { FeaturesSection } from "@/components/sections/features-section"
import { AnimationSection } from "@/components/sections/animation-section"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
import { useResponsiveConfig } from "@/hooks/use-responsive-config"
import { useEffect, useState } from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import { SkipLink } from "@/components/skip-link"
import { ResponsiveSvg } from "@/components/responsive-svg"
import { Button } from "@/components/ui/button"
import { EXTERNAL_LINKS, COLORS } from "@/lib/constants"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const { isMobile, duration, threshold } = useResponsiveConfig()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll-based fade effects with responsive config
  const incomeSection = useScrollFadeIn({
    threshold: 0.5,
    duration: duration + 200,
    direction: isMobile ? "none" : "scale",
    scale: 0.9,
  })

  const reviewsSection = useScrollFadeIn({
    threshold,
    duration,
    direction: isMobile ? "none" : "up",
    distance: isMobile ? 20 : 40,
  })

  const unlimitedTitle = useScrollFadeIn({
    threshold: 0.6,
    duration: 800,
    direction: isMobile ? "none" : "up",
  })

  const unlimitedDescription = useScrollFadeIn({
    threshold: 0.6,
    duration: 800,
    delay: isMobile ? 100 : 200,
    direction: isMobile ? "none" : "up",
  })

  const scrollableContent = useScrollFadeIn({
    threshold: 0.3,
    duration,
    direction: isMobile ? "none" : "up",
  })

  const additionalGraphic = useScrollFadeIn({
    threshold,
    duration,
    direction: isMobile ? "none" : "scale",
  })

  const shareWorkText = useScrollFadeIn({
    threshold: 0.5,
    duration,
    direction: isMobile ? "none" : "left",
  })

  const shareWorkButton = useScrollFadeIn({
    threshold: 0.5,
    duration,
    delay: isMobile ? 150 : 300,
    direction: isMobile ? "none" : "right",
  })

  const newSaleIllustration = useScrollFadeIn({
    threshold: 0.2,
    duration: duration + 200,
    direction: isMobile ? "none" : "up",
  })

  const footerFade = useScrollFadeIn({
    threshold: 0.1,
    duration: 800,
    direction: isMobile ? "none" : "up",
  })

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.background.secondary }}>
      <SkipLink />
      <SiteHeader />

      <main id="main-content" role="main">
        {/* Hero Section */}
        <ErrorBoundary>
          <section
            className="relative px-4 py-12 min-h-[500px] md:px-6 md:py-20 md:min-h-[700px] overflow-hidden"
            aria-labelledby="hero-heading"
          >
            <ParallaxCoins />
            <HeroSection />
          </section>
        </ErrorBoundary>

        {/* Features Grid */}
        <ErrorBoundary>
          <FeaturesSection />
        </ErrorBoundary>

        {/* Animation Section */}
        <ErrorBoundary>
          <AnimationSection />

          {/* Income Section */}
          <div className="pt-[80px] md:pt-[126px] pb-[60px] md:pb-[95px]">
            <div
              ref={incomeSection.ref as React.RefObject<HTMLDivElement>}
              style={incomeSection.style}
              className="flex justify-center my-6 md:my-9"
            >
              <ResponsiveSvg src="/income-svg.svg" alt="$3,129,297" desktopWidth={600} desktopHeight={120} priority />
            </div>
          </div>

          {/* Reviews Section */}
          <div ref={reviewsSection.ref as React.RefObject<HTMLDivElement>} style={reviewsSection.style}>
            <ResponsiveSvg
              src="/reviewsgroup.svg"
              alt="Customer testimonials from Gumroad sellers"
              desktopWidth={1000}
              desktopHeight={600}
              className="mx-auto mt-[40px] md:mt-[65px] mb-[80px] md:mb-[114px]"
              priority
            />
          </div>

          {/* Unlimited Possibilities Section */}
          <div className="text-center my-[150px] md:my-[275px] px-4">
            <div className="text-center mb-6 md:mb-8">
              <h2
                ref={unlimitedTitle.ref as React.RefObject<HTMLHeadingElement>}
                style={unlimitedTitle.style}
                className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-black font-sans"
              >
                Unlimited possibilities
              </h2>
              <p
                ref={unlimitedDescription.ref as React.RefObject<HTMLParagraphElement>}
                style={unlimitedDescription.style}
                className="text-base md:text-lg text-gray-600 text-center font-sans"
              >
                Discover the best-selling products and creators on Gumroad.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div
                ref={scrollableContent.ref as React.RefObject<HTMLDivElement>}
                style={scrollableContent.style}
                className="flex justify-start my-[80px] md:my-[140px]"
              >
                <Image
                  src="/scrollablesvg.svg"
                  alt="Unlimited possibilities - scrollable category selections"
                  width={mounted && isMobile ? 2000 : 3000}
                  height={mounted && isMobile ? 300 : 500}
                  className="max-w-none"
                  priority
                />
              </div>
            </div>

            {/* Add spacing and new graphic */}
            <div className="mt-12 md:mt-16">
              <div
                ref={additionalGraphic.ref as React.RefObject<HTMLDivElement>}
                style={additionalGraphic.style}
                className="text-center my-[80px] md:my-[114px]"
              >
                <ResponsiveSvg
                  src="/graphic-1.svg"
                  alt="Additional graphic"
                  desktopWidth={1200}
                  desktopHeight={400}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Share Your Work Section */}
          <section
            className="px-4 md:px-6 py-0 my-[150px] md:my-[246px]"
            style={{ backgroundColor: COLORS.background.secondary }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                {/* Text Content */}
                <div
                  ref={shareWorkText.ref as React.RefObject<HTMLDivElement>}
                  style={shareWorkText.style}
                  className="flex-1 text-center lg:text-left"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Share%20your%20work.%20Someone%20out%20there%20needs%20it.%20%282%29-RqLaizarQUnVM4Jv8YJAeyi73yDkdR.png"
                    alt="Share your work. Someone out there needs it."
                    className="mx-auto max-w-full h-auto mb-4"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Call to Action Button */}
                <div
                  ref={shareWorkButton.ref as React.RefObject<HTMLDivElement>}
                  style={shareWorkButton.style}
                  className="flex items-center"
                >
                  <Button
                    size={mounted && isMobile ? "default" : "lg"}
                    className="bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded font-sans"
                  >
                    Start selling
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        {/* New Sale Illustration Section */}
        <section className="px-0 py-0" style={{ backgroundColor: COLORS.background.secondary }}>
          <div
            ref={newSaleIllustration.ref as React.RefObject<HTMLDivElement>}
            style={newSaleIllustration.style}
            className="w-full"
          >
            <Image
              src={EXTERNAL_LINKS.saleIllustration || "/placeholder.svg"}
              alt="Illustration showing people celebrating sales and earnings"
              width={1200}
              height={400}
              className="w-full h-[300px] md:h-[400px] lg:h-[544px] object-cover"
              priority
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <ErrorBoundary>
        <div ref={footerFade.ref as React.RefObject<HTMLDivElement>} style={footerFade.style}>
          <SiteFooter />
        </div>
      </ErrorBoundary>
    </div>
  )
}
