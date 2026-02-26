function getOptional(key: string, fallback: string): string {
  return process.env[key]?.trim() || fallback
}

/** Returns API key or empty string if unset (callers should return 503 in production when empty). */
function getResendApiKey(): string {
  return process.env.RESEND_API_KEY?.trim() ?? ""
}

export const env = {
  RESEND_API_KEY: getResendApiKey,
  RESEND_FROM_EMAIL: () => getOptional("RESEND_FROM_EMAIL", "Tech Lynk <techlynk@resend.dev>"),
  RESEND_TO_EMAIL: () => getOptional("RESEND_TO_EMAIL", "team.techlynk@gmail.com"),
  CONTACT_PHONE: () => getOptional("CONTACT_PHONE", "+91 95737 87824"),
  CONTACT_LOCATION: () => getOptional("CONTACT_LOCATION", "Hyderabad, India"),
  NODE_ENV: process.env.NODE_ENV ?? "development",
}
