import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techlynk.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Techlynk | Enterprise Software Solutions",
    template: "%s | Techlynk",
  },
  description:
    "Transform your business with Techlynk's cutting-edge software solutions and expert consulting services.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Techlynk",
    title: "Techlynk | Enterprise Software Solutions",
    description:
      "Transform your business with Techlynk's cutting-edge software solutions and expert consulting services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techlynk | Enterprise Software Solutions",
    description:
      "Transform your business with Techlynk's cutting-edge software solutions and expert consulting services.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
