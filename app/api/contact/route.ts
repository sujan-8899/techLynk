import { Resend } from "resend"
import { NextResponse } from "next/server"
import { env } from "@/lib/env"
import { isRateLimited } from "@/lib/rate-limit"
import { contactSchema, escapeHtml } from "@/lib/validations"

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }

  try {
    const apiKey = env.RESEND_API_KEY()
    if (!apiKey && process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)
    const fromEmail = env.RESEND_FROM_EMAIL()
    const toEmail = env.RESEND_TO_EMAIL()

    const body = await request.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      const msg = parsed.error.errors.map((e) => e.message).join("; ")
      return NextResponse.json({ error: msg }, { status: 400 })
    }

    const { name, email, message } = parsed.data
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Resource Request from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Resource Requirements:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
