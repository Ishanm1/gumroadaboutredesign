"use client"

import type React from "react"
import { useState } from "react"

export function SearchInput() {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full md:w-64">
      <label htmlFor="marketplace-search" className="sr-only">
        Search marketplace
      </label>
      <input
        id="marketplace-search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search marketplace ..."
        className="w-full px-4 py-3 pr-12 border border-white rounded bg-transparent text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-sans"
        aria-label="Search marketplace"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-white rounded focus:outline-none focus:ring-2 focus:ring-black"
        aria-label="Submit search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 text-black"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  )
}
