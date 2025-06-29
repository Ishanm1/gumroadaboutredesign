// Centralized configuration and constants

export const BREAKPOINTS = {
  mobile: 767,
  tablet: 1023,
  desktop: 1024,
} as const

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
} as const

export const ANIMATION_CONFIG = {
  mobile: {
    duration: 600,
    threshold: 0.6,
    distance: 20,
  },
  desktop: {
    duration: 1000,
    threshold: 0.4,
    distance: 40,
  },
} as const

export const PARALLAX_SPEEDS = {
  slow: 0.5,
  medium: 0.8,
  fast: 1.2,
  veryFast: 1.5,
} as const

export const FADE_OFFSETS = {
  early: 432,
  medium: 468,
  late: 504,
  veryLate: 576,
} as const

export const COIN_POSITIONS = {
  topLeft: {
    mobile: { top: 60, left: 40 },
    desktop: { top: 100, left: 80 },
  },
  topRight: {
    mobile: { top: 80, right: 30 },
    desktop: { top: 120, right: 60 },
  },
  bottomLeft: {
    mobile: { top: 250, left: 20 },
    desktop: { top: 350, left: 40 },
  },
  rightMiddle: {
    mobile: { top: 250, right: 40 },
    desktop: { top: 350, right: 75 },
  },
  bottomRight: {
    mobile: { bottom: 30, right: 120 },
    desktop: { bottom: 60, right: 240 },
  },
} as const

export const COIN_SIZES = {
  small: { width: 120, height: 120 },
  medium: { width: 160, height: 160 },
  large: { width: 180, height: 180 },
  extraLarge: { width: 200, height: 200 },
} as const

export const EXTERNAL_LINKS = {
  github: "https://github.com/antiwork/gumroad",
  lottieAnimation:
    "https://assets.gumroad.com/assets/about/gumhead-f11adc65704bbfd51d7b57af5b375a0f2d7aa35a7bcb50ea5c9669814ba836ee.json",
  backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bgimage-rE8HX2eehLy9jC9cTmXcc7XXLD7Oqc.png",
  saleIllustration:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-sale-233a5432ab8c9c9a21e97027b67d4b84e09fc63fe7a4cc7fbec381c5a69b164d%201-EgKQBvpdpUOJ4UX9DwWCxhwJ79hAuA.svg",
} as const

export const COLORS = {
  primary: "#000000",
  secondary: "#F0F0F0",
  accent: "#FF90E8",
  text: {
    primary: "#000000",
    secondary: "#6B7280",
    muted: "#9CA3AF",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F0F0F0",
    muted: "#F9FAFB",
  },
} as const

export const SPACING = {
  hero: {
    mobile: { top: 30, bottom: 55 },
    desktop: { top: 57, bottom: 95 },
  },
  section: {
    mobile: { top: 80, bottom: 114 },
    desktop: { top: 126, bottom: 246 },
  },
} as const
