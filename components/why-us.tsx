"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import JourneyFormModal from "./journey-form-modal"

const features = [
  "Pre-vetted Oracle Fusion certified specialists",
  "24-48 hour resource deployment",
  "98% client satisfaction & placement success rate",
  "Flexible engagement models (FTE, Part-time, Project-based)",
  "Domain expertise across all Oracle Fusion modules",
  "Competitive pricing with transparent costs",
  "Dedicated account management & support",
  "Rigorous screening & skills validation process",
]

export default function WhyUs() {
  const [journeyModalOpen, setJourneyModalOpen] = useState(false)

  return (
    <section id="why" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 items-center mb-20">
          <div className="animate-slide-up">
            <div className="inline-block mb-4">
              <span className="section-eyebrow">Why Choose Us</span>
            </div>
            <h2 className="section-title leading-tight">
              Why{" "}
              <span className="gradient-text-glow">
                Choose Us
              </span>
            </h2>
            <p className="section-intro mb-10">
              We go beyond staffing to become your trusted Oracle Fusion partner, delivering specialized talent that
              drives your business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-premium flex items-start gap-4 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                </div>
                <span className="card-title !mb-0 pt-1 group-hover:text-primary transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Card */}
        <div className="card-premium p-12 sm:p-14 md:p-16 text-center animate-slide-up relative overflow-hidden border-primary/30 bg-primary/5">
          <div className="relative z-10">
            <h3 className="section-heading mb-6">
              <span className="gradient-text-glow">Ready to Transform Your Team?</span>
            </h3>
            <p className="section-body mb-10 max-w-3xl mx-auto">
              Connect with our specialists today and unlock the full potential of your Oracle Fusion environment.
            </p>
            <button
              type="button"
              onClick={() => setJourneyModalOpen(true)}
              className="btn-premium px-10 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl bg-primary hover:shadow-primary/30"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      <JourneyFormModal
        isOpen={journeyModalOpen}
        onClose={() => setJourneyModalOpen(false)}
        onSubmit={(data) => {
          console.log("Journey form submitted:", data)
          // Optional: send to API or analytics
        }}
      />
    </section>
  )
}
