"use client"

import { useState } from "react"
import { Star, Zap, CheckCircle2 } from "lucide-react"
import JourneyFormModal from "./journey-form-modal"

const updates = [
  {
    version: "Model 1",
    date: "Full-Time",
    title: "Full-Time Dedicated Resources",
    description: "Dedicated Oracle Fusion specialists working exclusively on your projects. Ideal for long-term initiatives, implementations, and ongoing support requirements.",
    badge: "Popular",
    features: ["40+ hours/week", "Dedicated to your projects", "Long-term engagement", "Deep domain knowledge"],
  },
  {
    version: "Model 2",
    date: "Part-Time",
    title: "Part-Time / Part-Time Dedicated",
    description: "Flexible part-time engagement for Oracle Fusion specialists. Perfect for specific projects, support tasks, or when you need expertise on-demand.",
    badge: "Flexible",
    features: ["20-30 hours/week", "Cost-effective", "Project-based", "Scalable resources"],
  },
  {
    version: "Model 3",
    date: "Project-Based",
    title: "Project-Based Engagement",
    description: "Oracle Fusion experts assigned to specific projects with defined timelines and deliverables. Ideal for implementations, migrations, and customizations.",
    badge: "Focused",
    features: ["Fixed scope & timeline", "Milestone-based", "Project deliverables", "Clear outcomes"],
  },
  {
    version: "Model 4",
    date: "Hourly",
    title: "Hourly Consulting",
    description: "Pay-as-you-go model for Oracle Fusion consulting services. Perfect for ad-hoc support, troubleshooting, and short-term technical assistance.",
    badge: "On-Demand",
    features: ["Pay per hour", "Flexible scheduling", "Quick support", "As-needed basis"],
  },
]

export default function FeaturesUpdate() {
  const [journeyModalOpen, setJourneyModalOpen] = useState(false)

  return (
    <section id="updates" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="section-eyebrow">Updates</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-glow">Flexible Engagement Models</span>
          </h2>
          <p className="section-intro">Choose the engagement model that best fits your Oracle Fusion resource needs and project requirements</p>
        </div>

        <div className="space-y-8 sm:space-y-10 mb-16 sm:mb-20">
          {updates.map((update, index) => (
            <div
              key={index}
              className="card-premium animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 sm:p-10 md:p-12">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <span className="text-sm font-bold text-primary px-4 py-2 bg-primary/10 rounded-xl border border-primary/20">{update.version}</span>
                      <span className="text-xs px-5 py-2 bg-primary text-primary-foreground rounded-full font-bold border border-primary/40">
                        {update.badge}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">{update.date}</span>
                    </div>
                    <h3 className="section-heading !mb-0 text-3xl sm:text-4xl">{update.title}</h3>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <Star className="w-7 h-7 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                </div>

                <p className="section-body mb-8">{update.description}</p>

                <div className="flex flex-wrap gap-4">
                  {update.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 glass-primary px-5 py-3 rounded-xl border border-primary/25 group-hover:border-primary/40 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="card-desc font-bold text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="card-premium p-12 sm:p-14 md:p-16 bg-primary/5 relative overflow-hidden border-primary/30">
            <div className="relative z-10">
              <Zap className="w-16 h-16 sm:w-20 sm:h-20 text-primary mx-auto mb-8 animate-float" />
            <h3 className="section-heading mb-6 sm:mb-8">
              <span className="gradient-text-glow">Ready to Find Your Oracle Fusion Expert?</span>
            </h3>
            <p className="section-body mb-10 max-w-3xl mx-auto">
              Connect with us today to discuss your Oracle Fusion staffing needs. We'll match you with the perfect specialist within 24-48 hours.
            </p>
            <button
              type="button"
              onClick={() => setJourneyModalOpen(true)}
              className="btn-premium px-12 sm:px-14 py-5 sm:py-6 text-lg sm:text-xl inline-block bg-primary hover:shadow-primary/30 cursor-pointer"
            >
              Request a Resource
            </button>
            </div>
          </div>
        </div>
      </div>

      <JourneyFormModal
        isOpen={journeyModalOpen}
        onClose={() => setJourneyModalOpen(false)}
        onSubmit={(data) => console.log("Journey form submitted:", data)}
      />
    </section>
  )
}
