"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { MEDIA_QUERIES, ANIMATION_CONFIG } from "@/lib/constants"
import { useMemo } from "react"

export function useResponsiveConfig() {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile)
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet)
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop)

  const config = useMemo(() => {
    if (isMobile) {
      return {
        ...ANIMATION_CONFIG.mobile,
        breakpoint: "mobile" as const,
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      }
    }

    return {
      ...ANIMATION_CONFIG.desktop,
      breakpoint: "desktop" as const,
      isMobile: false,
      isTablet: isTablet && !isMobile,
      isDesktop: isDesktop,
    }
  }, [isMobile, isTablet, isDesktop])

  return config
}
