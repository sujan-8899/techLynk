"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Users, Search, MessageSquare, Rocket } from "lucide-react"
import JourneyFormModal from "./journey-form-modal"

const steps = [
  {
    step: 1,
    title: "Share Your Requirements",
    description: "Tell us about your Oracle Fusion resource needs - module, skills, experience level, and engagement model.",
    icon: MessageSquare,
    color: "bg-primary",
  },
  {
    step: 2,
    title: "We Match You with Experts",
    description: "Our team identifies and screens pre-vetted Oracle Fusion specialists from our network that match your exact requirements.",
    icon: Search,
    color: "bg-primary",
  },
  {
    step: 3,
    title: "Interview & Select",
    description: "Review candidate profiles, conduct interviews, and select the perfect Oracle Fusion expert for your team.",
    icon: Users,
    color: "bg-primary",
  },
  {
    step: 4,
    title: "Onboard & Start",
    description: "Complete onboarding and your Oracle Fusion specialist starts working on your project within 24-48 hours.",
    icon: Rocket,
    color: "bg-primary",
  },
]

export default function HowItWorks() {
  const [journeyModalOpen, setJourneyModalOpen] = useState(false)

  return (
    <section id="how-it-works" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="section-eyebrow">Process</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-glow">How It Works</span>
          </h2>
          <p className="section-intro">
            Get your Oracle Fusion specialist deployed in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="card-premium text-center animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl ${step.color} shadow-lg`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="label-small">Step {step.step}</span>
                </div>
                <h3 className="card-title text-xl sm:text-2xl !mb-4">{step.title}</h3>
                <p className="section-body text-base sm:text-lg">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Connection Line (Visual Flow) - pointer-events-none so it doesn't block button clicks */}
        {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 opacity-30 -translate-y-1/2 z-0 pointer-events-none" style={{ marginTop: "120px" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-gradient"></div>
        </div> */}

        {/* CTA Section - relative z-20 ensures it's above connection line */}
        {/* <div className="text-center animate-slide-up relative z-20">
          <div className="card-premium p-10 sm:p-12 md:p-14 bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-cyan-500/10 inline-block border-cyan-500/30">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
              <span className="gradient-text-glow">Ready to Get Started?</span>
            </h3>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Share your Oracle Fusion resource requirements and we'll match you with the perfect specialist within 24-48 hours.
            </p>
            <button
              type="button"
              onClick={() => setJourneyModalOpen(true)}
              className="btn-premium px-12 sm:px-14 py-5 sm:py-6 text-lg sm:text-xl inline-block bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 hover:shadow-cyan-500/50 cursor-pointer"
            >
              Request a Resource
            </button>
          </div>
        </div> */}
      </div>

      <JourneyFormModal
        isOpen={journeyModalOpen}
        onClose={() => setJourneyModalOpen(false)}
        onSubmit={(data) => {
          console.log("Journey form submitted:", data)
        }}
      />
    </section>
  )
}
