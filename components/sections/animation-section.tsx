"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LottieAnimation } from "@/components/lottie-animation"
import { useResponsiveConfig } from "@/hooks/use-responsive-config"
import { EXTERNAL_LINKS, COLORS } from "@/lib/constants"

export function AnimationSection() {
  const [fadeOpacity, setFadeOpacity] = useState(0)
  const { isMobile } = useResponsiveConfig()

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return

      const scrollY = window.pageYOffset
      const windowHeight = window.innerHeight

      const animationSectionOffset = 1200
      const fadeStart = animationSectionOffset - windowHeight * 0.8
      const fadeEnd = animationSectionOffset - windowHeight * 0.2

      if (scrollY >= fadeStart && scrollY <= fadeEnd) {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart)
        setFadeOpacity(Math.min(progress, 1))
      } else if (scrollY > fadeEnd) {
        setFadeOpacity(1)
      } else {
        setFadeOpacity(0)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true })
      handleScroll()
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <section className="relative py-8 md:py-16 lg:py-0" style={{ backgroundColor: COLORS.background.secondary }}>
      {/* Top Heading */}
      <div
        className="mb-8 md:mb-12 lg:mb-[53px] mt-20 md:mt-36 text-center transition-opacity duration-1000 ease-out"
        style={{ opacity: fadeOpacity }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/You%20know%20all%20those%20great%20ideas%20you%20have_%20%284%29-OQAs2qbAi2xJi6nlFJlhfTQNidDcTf.png"
          alt="You know all those great ideas you have?"
          className="mx-auto max-w-full h-auto"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Animation Container */}
      <div
        className="relative mx-auto mb-8 md:mb-12 lg:mb-16 h-80 md:h-80 lg:h-96 w-full md:max-w-8xl transition-opacity duration-1000 ease-out"
        style={{ opacity: fadeOpacity }}
      >
        {/* Background Image - Use native img for better compatibility */}
        <img
          src={EXTERNAL_LINKS.backgroundImage || "/placeholder.svg"}
          alt="Gumroad Way Background"
          className="w-full h-full object-cover md:object-contain"
          loading="eager"
          decoding="async"
        />
        {/* Lottie Animation Overlay */}
        <div className="absolute left-1/2 top-1/2 z-20 h-32 w-32 md:h-56 md:w-56 lg:h-80 lg:w-80 -translate-x-1/2 -translate-y-1/2">
          <LottieAnimation
            src={EXTERNAL_LINKS.lottieAnimation}
            className="w-full h-full"
            speed={1}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="pt-4 md:pt-8 transition-opacity duration-1000 ease-out" style={{ opacity: fadeOpacity }}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottomtext%20%283%29-DoMwZb9hGns1Gdw2LMOU0fpFgqil6m.png"
          alt="We want you to try them, lots of them, and find out what works. You don't have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it."
          className="mx-auto max-w-full h-auto mb-6 md:mb-8"
          loading="eager"
          decoding="async"
        />
        <div className="flex justify-center items-center w-full">
          <div className="text-center">
            <Button
              size={isMobile ? "default" : "lg"}
              className="bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-sans text-center flex items-center justify-center"
            >
              Find out how
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
