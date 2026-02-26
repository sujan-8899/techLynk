export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"
          aria-hidden
        />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  )
}
