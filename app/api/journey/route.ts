import { Resend } from "resend"
import { NextResponse } from "next/server"
import { env } from "@/lib/env"
import { isRateLimited } from "@/lib/rate-limit"
import { journeySchema, escapeHtml } from "@/lib/validations"

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
    const parsed = journeySchema.safeParse(body)
    if (!parsed.success) {
      const msg = parsed.error.errors.map((e) => e.message).join("; ")
      return NextResponse.json({ error: msg }, { status: 400 })
    }

    const { teamCount, email, jobDescriptions } = parsed.data
    const safeJobDescriptions = escapeHtml(jobDescriptions).replace(/\n/g, "<br>")

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Start Your Journey – Team size: ${teamCount} | ${email}`,
      html: `
        <h2>Journey Form – Start Your Journey</h2>
        <p><strong>Team size / Number of members:</strong> ${escapeHtml(teamCount)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Job Descriptions:</strong></p>
        <p>${safeJobDescriptions}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Journey API error:", error)
    return NextResponse.json(
      { error: "Failed to submit journey form" },
      { status: 500 }
    )
  }
}
