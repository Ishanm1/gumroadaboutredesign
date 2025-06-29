// Shared type definitions for better type safety

export interface MediaQueryBreakpoints {
  mobile: string
  tablet: string
  desktop: string
}

export interface AnimationConfig {
  duration: number
  threshold: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "none"
  distance?: number
  scale?: number
}

export interface ResponsiveDimensions {
  width: number
  height: number
}

export interface ScrollFadeInOptions {
  threshold?: number
  duration?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "none"
  distance?: number
  scale?: number
}

export interface ParallaxCoinProps {
  src: string
  alt: string
  className?: string
  speed?: number
  width?: number
  height?: number
  fadeStartOffset?: number
}

export interface ResponsiveSvgProps {
  src: string
  alt: string
  desktopWidth: number
  desktopHeight: number
  className?: string
  priority?: boolean
}

export interface LottieAnimationProps {
  src: string
  className?: string
  speed?: number
  loop?: boolean
  autoplay?: boolean
}

// Error handling types
export interface ErrorFallbackProps {
  error?: Error
  resetError?: () => void
}

// Performance monitoring types
export interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  interactionTime: number
}
