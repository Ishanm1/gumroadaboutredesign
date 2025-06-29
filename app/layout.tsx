import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gumroad - Go from 0 to $1",
  description: "The easiest way to sell digital products online. Start selling today and turn your ideas into income.",
  keywords: ["digital products", "online selling", "e-commerce", "creator economy"],
  authors: [{ name: "Gumroad" }],
  creator: "Gumroad",
  publisher: "Gumroad",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gumroad.com",
    title: "Gumroad - Go from 0 to $1",
    description:
      "The easiest way to sell digital products online. Start selling today and turn your ideas into income.",
    siteName: "Gumroad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumroad - Go from 0 to $1",
    description:
      "The easiest way to sell digital products online. Start selling today and turn your ideas into income.",
    creator: "@gumroad",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Whyte-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Whyte-Medium.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Whyte-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
