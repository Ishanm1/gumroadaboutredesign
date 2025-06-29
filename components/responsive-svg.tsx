"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useState, useEffect } from "react"

interface ResponsiveSvgProps {
  src: string
  alt: string
  desktopWidth: number
  desktopHeight: number
  className?: string
  priority?: boolean
}

export function ResponsiveSvg({
  src,
  alt,
  desktopWidth,
  desktopHeight,
  className = "",
  priority = false,
}: ResponsiveSvgProps) {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery("(max-width: 767px)")
  const isTablet = useMediaQuery("(max-width: 1023px)")
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!src) return

    setIsLoading(true)
    setHasError(false)

    const img = new window.Image()

    img.onload = () => {
      setIsLoading(false)
      setHasError(false)
    }

    img.onerror = () => {
      setIsLoading(false)
      if (retryCount < 2) {
        // Retry loading up to 2 times
        setTimeout(
          () => {
            setRetryCount((prev) => prev + 1)
          },
          1000 * (retryCount + 1),
        )
      } else {
        setHasError(true)
      }
    }

    // Add cache busting for problematic images
    const cacheBustedSrc = retryCount > 0 ? `${src}?v=${Date.now()}` : src
    img.src = cacheBustedSrc
  }, [src, retryCount])

  const getResponsiveDimensions = () => {
    // Always return valid dimensions, defaulting to mobile-friendly sizes during SSR
    const defaultWidth = Math.min(desktopWidth, 400)
    const defaultHeight = Math.round(defaultWidth * (desktopHeight / desktopWidth))

    if (!mounted) {
      return {
        width: defaultWidth,
        height: defaultHeight,
      }
    }

    if (isMobile) {
      const mobileScale = 0.7
      const maxMobileWidth = Math.min(
        desktopWidth * mobileScale,
        (typeof window !== "undefined" ? window.innerWidth : 375) * 0.9,
      )
      const aspectRatio = desktopHeight / desktopWidth
      return {
        width: Math.round(maxMobileWidth),
        height: Math.round(maxMobileWidth * aspectRatio),
      }
    } else if (isTablet) {
      const tabletScale = 0.8
      return {
        width: Math.round(desktopWidth * tabletScale),
        height: Math.round(desktopHeight * tabletScale),
      }
    } else {
      return {
        width: desktopWidth,
        height: desktopHeight,
      }
    }
  }

  const { width, height } = getResponsiveDimensions()

  if (hasError) {
    return (
      <div
        className={`mx-auto flex items-center justify-center bg-gray-100 border border-gray-200 rounded ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <svg
            className="w-8 h-8 text-gray-400 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="text-xs text-gray-500">Image unavailable</span>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div
        className={`mx-auto animate-pulse bg-gray-200 rounded ${className}`}
        style={{ width, height }}
        aria-label="Loading image"
      />
    )
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={`mx-auto ${className}`}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => {
        setIsLoading(false)
        setHasError(false)
      }}
      onError={() => {
        if (retryCount < 2) {
          setRetryCount((prev) => prev + 1)
        } else {
          setHasError(true)
          setIsLoading(false)
        }
      }}
    />
  )
}
