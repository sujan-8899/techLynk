"use client"

import { ArrowRight, CheckCircle2, Users, Clock, Award, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    title: "Oracle Fusion Staff Augmentation",
    description: "Expert Oracle Fusion Resources When You Need Them - Finance, SCM, HCM, EPM, CX, WMS & Technical Services",
    cta: "Find Your Expert",
    image: "/oracle-solutions-enterprise.jpg",
    stats: [
      { icon: Users, value: "500+", label: "Certified Specialists" },
      { icon: Clock, value: "24-48hrs", label: "Deployment Time" },
      { icon: Award, value: "98%", label: "Success Rate" },
    ],
  },
  {
    title: "Pre-Vetted Oracle Fusion Specialists",
    description: "Access certified professionals across all Oracle Fusion modules - Deployed in 24-48 hours",
    cta: "Get Started",
    image: "/finance-treasury-operations.jpg",
    stats: [
      { icon: Users, value: "100+", label: "Placements" },
      { icon: Clock, value: "15+", label: "Years Experience" },
      { icon: TrendingUp, value: "Global", label: "Reach" },
    ],
  },
  {
    title: "Technical Excellence Delivered",
    description: "Oracle Fusion Reports, OIC Integrations, VBCS-PAAS Customizations & AI Agents",
    cta: "Explore Services",
    image: "/ai-machine-learning-forecasting.jpg",
    stats: [
      { icon: Award, value: "Certified", label: "Professionals" },
      { icon: CheckCircle2, value: "Pre-Vetted", label: "Resources" },
      { icon: TrendingUp, value: "24/7", label: "Support" },
    ],
  },
  {
    title: "Flexible Engagement Models",
    description: "Full-time, part-time, project-based, or hourly consulting - Choose what works for you",
    cta: "Learn More",
    image: "/asset-tracking-iot.jpg",
    stats: [
      { icon: Users, value: "Flexible", label: "Models" },
      { icon: Clock, value: "Quick", label: "Onboarding" },
      { icon: Award, value: "Scalable", label: "Solutions" },
    ],
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section className="relative min-h-screen pt-24 flex items-start md:items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover scale-105 transition-transform duration-700 opacity-30" priority />
        {/* Light theme overlay - solid wash so text is readable */}
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Animated background elements - subtle for light theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animation: "float 6s ease-in-out infinite" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s", animation: "float 8s ease-in-out infinite" }}></div>
      </div>

      {/* Grid pattern overlay - light theme (logo blue) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-7xl py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start md:items-center">
            {/* Left Column - Main Content */}
            <div className="text-center md:text-left space-y-8 animate-slide-up">
              {/* Company Badge */}
              <div className="inline-block animate-scale-in">
                <div className="glass-primary px-6 py-3 rounded-lg border border-primary/50 shadow-lg shadow-primary/20 backdrop-blur-xl inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <h2 className="section-eyebrow">
                    Techlynk Enterprise Solutions
                  </h2>
                </div>
              </div>

              {/* Main Title - Professional Typography */}
              <h1 className="section-title leading-tight !mb-6 sm:!mb-8">
                <span className="gradient-text-glow">
                  {slide.title}
                </span>
              </h1>

              {/* Description */}
              <p className="section-intro text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto md:mx-0">
                {slide.description}
              </p>

              {/* Stats Grid - Professional Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
                {slide.stats.map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={idx}
                      className="glass-primary p-4 sm:p-6 rounded-xl border border-primary/30 text-center group hover:border-primary/50 hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex justify-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-foreground mb-1 gradient-text-glow">
                        {stat.value}
                      </div>
                      <div className="card-desc font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex justify-center md:justify-start">
                {/* <button className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground text-base sm:text-lg rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-primary/40">
                  <span className="relative z-10">{slide.cta}</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button> */}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative hidden lg:block animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Professional Card Design */}
                <div className="absolute inset-0 glass-primary rounded-3xl border border-primary/30 p-8 backdrop-blur-xl shadow-2xl shadow-primary/15">
                  <div className="h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                          <Users className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="label-small">Oracle Fusion</div>
                          <div className="card-desc">Enterprise Solutions</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {["Finance", "SCM", "HCM", "EPM", "CX"].map((module, idx) => (
                          <div key={idx} className="flex items-center gap-3 glass-dark px-4 py-2 rounded-lg border border-primary/20">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground font-medium">{module} Specialists</span>
                          </div>
                        ))}
                        <div className="flex items-center gap-3 glass-dark px-4 py-2 rounded-lg border border-primary/20">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium">Fusion Technical - Paas extension</span>
                        </div>
                        {/* </div> */}
                        <div className="flex items-center gap-3 glass-dark px-4 py-2 rounded-lg border border-primary/20">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium">OIC Integration</span>
                        </div>
                        {/* </div> */}
                        <div className="flex items-center gap-3 glass-dark px-4 py-2 rounded-lg border border-primary/20">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium">OTBI/BI Publisher</span>
                        </div>
                        {/* </div> */}
                      </div>
                      {/* Bottom Section */}
                      <div className="pt-6 border-t border-primary/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-foreground">500+</div>
                            <div className="label-small">Resources Available</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold gradient-text-glow">24-48hrs</div>
                            <div className="label-small">Deployment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Navigation Indicators - sibling to max-w-7xl, inside Content Container */}
          <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex items-center justify-center z-20 px-4">
            <div className="glass-primary px-6 py-3 rounded-full border border-primary/30 backdrop-blur-xl flex gap-3 sm:gap-4 items-center">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`rounded-full transition-all duration-500 ${idx === currentSlide
                      ? "w-12 sm:w-14 h-2.5 sm:h-3 bg-primary shadow-lg shadow-primary/30 border border-primary/50"
                      : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary/40 hover:bg-primary/60 hover:scale-125 border border-primary/30"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <div className="ml-2 card-desc font-medium">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
