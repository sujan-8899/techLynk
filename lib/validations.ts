import { z } from "zod"

/** Escape for HTML to prevent XSS in email body */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200).trim(),
  email: z.string().email("Invalid email").max(320),
  message: z.string().min(1, "Message is required").max(10000).trim(),
})

export const journeySchema = z.object({
  teamCount: z.string().min(1, "Team size is required").max(50).trim(),
  email: z.string().email("Invalid email").max(320),
  jobDescriptions: z.string().min(1, "Job descriptions are required").max(20000).trim(),
})

export type ContactInput = z.infer<typeof contactSchema>
export type JourneyInput = z.infer<typeof journeySchema>
