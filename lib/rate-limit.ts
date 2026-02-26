/**
 * In-memory rate limiter for API routes. For multi-instance production, use Redis (e.g. @upstash/ratelimit).
 */
const windowMs = 60 * 1000 // 1 minute
const maxRequests = 10
const store = new Map<string, { count: number; resetAt: number }>()

function getClientId(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  )
}

export function isRateLimited(request: Request): boolean {
  const id = getClientId(request)
  const now = Date.now()
  const entry = store.get(id)

  if (!entry) {
    store.set(id, { count: 1, resetAt: now + windowMs })
    return false
  }

  if (now > entry.resetAt) {
    store.set(id, { count: 1, resetAt: now + windowMs })
    return false
  }

  entry.count += 1
  if (entry.count > maxRequests) return true
  return false
}

// Clean old entries periodically
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now()
    for (const [key, v] of store.entries()) {
      if (now > v.resetAt) store.delete(key)
    }
  }, 60 * 1000)
}
