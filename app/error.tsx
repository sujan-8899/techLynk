"use client"

import { useEffect } from "react"
import { AlertCircle, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Try again
        </button>
      </div>
    </div>
  )
}
