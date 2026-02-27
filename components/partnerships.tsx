"use client"

import { Building2, Cloud, Database, Code, Users, Briefcase, Globe, Zap } from "lucide-react"

const partners = [
  { name: "Oracle", icon: Building2, category: "Enterprise Software" },
  // { name: "Microsoft", icon: Cloud, category: "Cloud Platform" },
  { name: "AWS", icon: Cloud, category: "Cloud Services" },
  // { name: "Google Cloud", icon: Cloud, category: "Cloud Platform" },
  // { name: "Salesforce", icon: Database, category: "CRM Platform" },
  // { name: "IBM", icon: Building2, category: "Technology Services" },
  // { name: "SAP", icon: Database, category: "ERP Solutions" },
  { name: "Deloitte", icon: Briefcase, category: "Consulting" },
  { name: "Accenture", icon: Users, category: "Professional Services" },
]

export default function Partnerships() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="section-eyebrow">Partnerships</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-glow">Strategic Partners</span>
          </h2>
          <p className="section-intro">
            Trusted partnerships with leading technology and consulting firms worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <div
                key={index}
                className="card-premium flex flex-col items-center justify-center p-6 sm:p-8 animate-slide-up group hover:scale-110 transition-all duration-500 relative overflow-hidden border-primary/20"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="text-center relative z-10 w-full">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    </div>
                  </div>
                  <h3 className="card-title !mb-2 group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="card-desc font-medium uppercase tracking-wide">
                    {partner.category}
                  </p>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5 blur-xl"></div>
              </div>
            )
          })}
        </div>

        {/* Additional Partnership Info */}
        <div className="mt-16 sm:mt-20 text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="glass-primary p-8 sm:p-10 rounded-3xl border border-primary/30 inline-block max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="card-title text-xl sm:text-2xl !mb-4">Certified Partner Network</h3>
            </div>
            <p className="section-body mb-6 text-base sm:text-lg">
              As certified partners with industry leaders, we deliver enterprise-grade Oracle Fusion solutions 
              backed by proven expertise and strategic alliances.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Certified Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Joint Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
