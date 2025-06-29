"use client"

import { ParallaxCoin } from "@/components/parallax-coin"
import { COIN_SIZES, PARALLAX_SPEEDS, FADE_OFFSETS } from "@/lib/constants"

export function ParallaxCoins() {
  return (
    <>
      <ParallaxCoin
        src="/coins/coin-top-left.png"
        alt=""
        className="absolute top-[60px] left-[40px] md:top-[100px] md:left-[80px] z-50 pointer-events-none"
        speed={PARALLAX_SPEEDS.fast}
        width={COIN_SIZES.large.width}
        height={COIN_SIZES.large.height}
        fadeStartOffset={FADE_OFFSETS.early}
        aria-hidden="true"
      />
      <ParallaxCoin
        src="/coins/coin-top-right.png"
        alt=""
        className="absolute top-[80px] right-[30px] md:top-[120px] md:right-[60px] z-50 pointer-events-none"
        speed={PARALLAX_SPEEDS.medium}
        width={COIN_SIZES.small.width}
        height={COIN_SIZES.small.height}
        fadeStartOffset={FADE_OFFSETS.medium}
        aria-hidden="true"
      />
      <ParallaxCoin
        src="/coins/coin-bottom-left-new.png"
        alt=""
        className="absolute top-[250px] left-[20px] md:top-[350px] md:left-[40px] z-50 pointer-events-none"
        speed={PARALLAX_SPEEDS.medium}
        width={185}
        height={185}
        fadeStartOffset={FADE_OFFSETS.late}
        aria-hidden="true"
      />
      <ParallaxCoin
        src="/coins/coin-right-middle.png"
        alt=""
        className="absolute top-[250px] right-[40px] md:top-[350px] md:right-[75px] z-50 pointer-events-none"
        speed={PARALLAX_SPEEDS.veryFast}
        width={COIN_SIZES.medium.width}
        height={COIN_SIZES.medium.height}
        fadeStartOffset={FADE_OFFSETS.late}
        aria-hidden="true"
      />
      <ParallaxCoin
        src="/coins/coin-bottom-right-new.png"
        alt=""
        className="absolute bottom-[30px] right-[120px] md:bottom-[60px] md:right-[240px] z-50 pointer-events-none"
        speed={1.1}
        width={COIN_SIZES.extraLarge.width}
        height={COIN_SIZES.extraLarge.height}
        fadeStartOffset={FADE_OFFSETS.veryLate}
        aria-hidden="true"
      />
    </>
  )
}
