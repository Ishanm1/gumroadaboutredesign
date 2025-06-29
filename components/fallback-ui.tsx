"use client"

import { Button } from "@/components/ui/button"
import type { ErrorFallbackProps } from "@/types"

export function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div
      className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border border-gray-200"
      role="alert"
      aria-live="assertive"
    >
      <div className="text-center max-w-md">
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2 font-abc-whyte">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6 font-abc-whyte">
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </p>
        {process.env.NODE_ENV === "development" && error && (
          <details className="mb-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto text-red-600">
              {error.message}
              {error.stack && `\n${error.stack}`}
            </pre>
          </details>
        )}
        <div className="flex gap-3 justify-center">
          <Button onClick={() => window.location.reload()} variant="outline" className="font-abc-whyte">
            Refresh Page
          </Button>
          {resetError && (
            <Button onClick={resetError} className="bg-black text-white hover:bg-gray-800 font-abc-whyte">
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
