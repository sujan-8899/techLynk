# Deployment

## Environment variables

Copy `.env.example` to `.env.local` and set values. For production (e.g. Vercel), configure these in your project settings.

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (for forms) | Resend API key for contact and journey email |
| `RESEND_FROM_EMAIL` | No | Sender address (default: Resend test domain) |
| `RESEND_TO_EMAIL` | No | Inbox for form submissions |
| `CONTACT_PHONE` | No | Shown by `/api/mail-info` |
| `CONTACT_LOCATION` | No | Shown by `/api/mail-info` |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for SEO (e.g. `https://your-domain.com`) |

## Build and run

Ensure network access when building (Next.js fetches Google Fonts at build time).

```bash
pnpm install
pnpm build
pnpm start
```

## Rate limiting

Contact and journey APIs are limited to 10 requests per minute per IP (in-memory). For multi-instance or high traffic, use a Redis-based limiter (e.g. `@upstash/ratelimit`).
