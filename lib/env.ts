// Hardcoded config (no env vars required for Resend/contact)
const RESEND_API_KEY = "re_QJz1MWz5_36xnhwUgnxW3PWfskHWnSzug"
const RESEND_FROM_EMAIL = "Tech Lynk <onboarding@resend.dev>"
const RESEND_TO_EMAIL = "team.techlynk@gmail.com"
const CONTACT_PHONE = "+91 95737 87824"
const CONTACT_LOCATION = "Hyderabad, India"

export const env = {
  RESEND_API_KEY: () => RESEND_API_KEY,
  RESEND_FROM_EMAIL: () => RESEND_FROM_EMAIL,
  RESEND_TO_EMAIL: () => RESEND_TO_EMAIL,
  CONTACT_PHONE: () => CONTACT_PHONE,
  CONTACT_LOCATION: () => CONTACT_LOCATION,
  NODE_ENV: process.env.NODE_ENV ?? "development",
}
