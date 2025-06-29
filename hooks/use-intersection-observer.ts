"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  skip?: boolean
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>
  isIntersecting: boolean
  entry: IntersectionObserverEntry | null
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = false,
  skip = false,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const ref = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      setEntry(entry)

      if (entry.isIntersecting) {
        setIsIntersecting(true)

        // If triggerOnce is true, disconnect after first intersection
        if (triggerOnce && observerRef.current) {
          observerRef.current.disconnect()
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false)
      }
    },
    [triggerOnce],
  )

  useEffect(() => {
    if (skip || !ref.current) return

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    observerRef.current.observe(ref.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleIntersection, threshold, rootMargin, skip])

  return { ref, isIntersecting, entry }
}
