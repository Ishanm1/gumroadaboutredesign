"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ParallaxCoinProps {
  src: string
  alt: string
  className?: string
  speed?: number
  width?: number
  height?: number
  fadeStartOffset?: number
}

export function ParallaxCoin({
  src,
  alt,
  className = "",
  speed = 0.5,
  width = 120,
  height = 120,
  fadeStartOffset = 800,
}: ParallaxCoinProps) {
  const [offsetY, setOffsetY] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery("(max-width: 767px)")
  const isTablet = useMediaQuery("(max-width: 1023px)")
  const responsiveWidth = isTablet ? Math.round(width * 0.6) : width
  const responsiveHeight = isTablet ? Math.round(height * 0.6) : height
  const responsiveSpeed = isTablet ? speed * 0.3 : speed

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let rafId: number
    let lastScrollY = 0

    const handleScroll = () => {
      const scrollY = window.pageYOffset

      // Only update if scroll position changed significantly
      if (Math.abs(scrollY - lastScrollY) < 1) return

      lastScrollY = scrollY

      // Use RAF for smooth animations
      rafId = requestAnimationFrame(() => {
        setOffsetY(scrollY * responsiveSpeed)

        // Fade out when reaching the features section
        if (scrollY > fadeStartOffset) {
          const fadeProgress = Math.min((scrollY - fadeStartOffset) / 200, 1)
          setOpacity(1 - fadeProgress)
        } else {
          setOpacity(1)
        }
      })
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [responsiveSpeed, fadeStartOffset])

  // Don't render anything until mounted to prevent SSR issues
  if (!mounted) {
    return null
  }

  // Don't render coins on mobile
  if (isMobile) {
    return null
  }

  return (
    <div
      className={`absolute transition-opacity duration-300 ease-out ${className}`}
      style={{
        transform: `translateY(${offsetY}px)`,
        opacity: opacity,
        willChange: "transform, opacity",
      }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={responsiveWidth}
        height={responsiveHeight}
        className="object-contain"
        priority
      />
    </div>
  )
}
