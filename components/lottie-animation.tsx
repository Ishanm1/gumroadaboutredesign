"use client"

import { useEffect, useRef } from "react"

interface LottieAnimationProps {
  src: string
  className?: string
  speed?: number
  loop?: boolean
  autoplay?: boolean
}

export function LottieAnimation({
  src,
  className = "",
  speed = 1,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadLottie = async () => {
      // Dynamically import lottie-web
      const lottie = await import("lottie-web")

      if (containerRef.current) {
        // Clear any existing animation
        containerRef.current.innerHTML = ""

        lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: loop,
          autoplay: autoplay,
          path: src,
        })
      }
    }

    loadLottie()
  }, [src, loop, autoplay])

  return <div ref={containerRef} className={className} />
}
