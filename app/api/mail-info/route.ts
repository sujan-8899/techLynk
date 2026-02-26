import { NextResponse } from "next/server"
import { env } from "@/lib/env"

export async function GET() {
  try {
    const mailInfo = {
      email: env.RESEND_TO_EMAIL(),
      phone: env.CONTACT_PHONE(),
      location: env.CONTACT_LOCATION(),
    }
    return NextResponse.json(mailInfo)
  } catch (error) {
    console.error("Mail info API error:", error)
    return NextResponse.json(
      { error: "Failed to get contact info" },
      { status: 500 }
    )
  }
}
