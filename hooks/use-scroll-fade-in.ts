"use client"

import type React from "react"
import { useEffect, useState, useRef, useCallback } from "react"
import { useIntersectionObserver } from "./use-intersection-observer"

interface ScrollFadeInOptions {
  threshold?: number
  duration?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "none"
  distance?: number
  scale?: number
  triggerOnce?: boolean
}

interface ScrollFadeInReturn {
  ref: React.RefObject<HTMLElement>
  isVisible: boolean
  style: React.CSSProperties
}

export function useScrollFadeIn(options: ScrollFadeInOptions = {}): ScrollFadeInReturn {
  const {
    threshold = 0.3,
    duration = 1000,
    delay = 0,
    direction = "up",
    distance = 30,
    scale = 0.95,
    triggerOnce = true,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce,
  })

  const handleVisibilityChange = useCallback(() => {
    if (isIntersecting && !isVisible) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true)
        }, delay)
      } else {
        setIsVisible(true)
      }
    }
  }, [isIntersecting, isVisible, delay])

  useEffect(() => {
    handleVisibilityChange()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [handleVisibilityChange])

  // Generate initial transform based on direction
  const getInitialTransform = useCallback(() => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "left":
        return `translateX(${distance}px)`
      case "right":
        return `translateX(-${distance}px)`
      case "scale":
        return `scale(${scale})`
      default:
        return "none"
    }
  }, [direction, distance, scale])

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0) translateX(0) scale(1)" : getInitialTransform(),
    transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    willChange: isVisible ? "auto" : "opacity, transform",
  }

  return { ref, isVisible, style }
}
