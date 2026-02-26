import Link from "next/link"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted text-muted-foreground mb-6">
          <FileQuestion className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">404</h1>
        <p className="text-muted-foreground mb-8">This page could not be found.</p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
