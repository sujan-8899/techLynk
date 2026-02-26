"use client"

import { ArrowRight, TrendingUp, Users, Award, Building2, CheckCircle2 } from "lucide-react"

const caseStudies = [
  {
    title: "Global Manufacturing Firm Accelerates Oracle Fusion Implementation",
    category: "Success Story",
    description: "Deployed 15 Oracle Fusion specialists across Finance, SCM, and HCM modules, reducing implementation time by 40% and achieving go-live within 6 months.",
    cta: "Read Case Study",
    icon: Building2,
    metrics: { specialists: "15", timeline: "6 months", reduction: "40%" },
  },
  {
    title: "Fortune 500 Company Scales Oracle Fusion Team",
    category: "Success Story",
    description: "Provided 25+ certified Oracle Fusion experts for enterprise-wide deployment, enabling seamless integration across 12 business units and achieving 98% user adoption.",
    cta: "Read Case Study",
    icon: Users,
    metrics: { specialists: "25+", units: "12", adoption: "98%" },
  },
  {
    title: "Financial Services Leader Enhances Oracle EPM Capabilities",
    category: "Success Story",
    description: "Delivered specialized Oracle EPM consultants for advanced financial planning and analytics, resulting in 50% faster reporting cycles and improved decision-making.",
    cta: "Read Case Study",
    icon: TrendingUp,
    metrics: { improvement: "50%", focus: "EPM", result: "Enhanced" },
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8">
            <span className="gradient-text-glow">Success Stories & Client Wins</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real-world results from Oracle Fusion implementations powered by our certified specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <div
                key={index}
                className="group card-premium overflow-hidden animate-slide-up border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Header */}
                <div className="h-48 sm:h-56 bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden border border-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-teal-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-6 bg-cyan-500/10 rounded-2xl border border-cyan-500/30 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all duration-500">
                    <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
                  </div>
                </div>

                <div className="px-2">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      <Award className="w-3 h-3" />
                      {study.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:gradient-text-glow transition-all duration-500">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-base sm:text-lg mb-6 line-clamp-3 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {Object.entries(study.metrics).map(([key, value], idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 glass-dark rounded-lg border border-cyan-500/10"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span className="text-xs text-slate-300 font-medium">
                          <span className="text-cyan-400 font-bold">{value}</span> {key}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-semibold text-sm hover:from-cyan-500/20 hover:to-teal-500/20 hover:border-cyan-400/50 transition-all duration-300">
                    {study.cta}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/5 via-transparent to-teal-500/5 blur-xl pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="glass-primary p-8 sm:p-10 rounded-3xl border border-cyan-500/30 inline-block">
            <p className="text-slate-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Want to see how we can accelerate your Oracle Fusion implementation?
            </p>
            <button className="btn-premium px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 hover:shadow-cyan-500/50">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
