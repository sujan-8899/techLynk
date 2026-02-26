"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 500, label: "Oracle Fusion Specialists", suffix: "+" },
  { value: 98, label: "Placement Success Rate", suffix: "%" },
  { value: 48, label: "Average Deployment Time", suffix: "hrs" },
  { value: 15, label: "Years of Expertise", suffix: "+" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[150px] animate-pulse-glow"></div>
      </div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-premium text-center animate-slide-up group hover:scale-110 transition-all duration-700 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold gradient-text-glow mb-4">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="card-desc font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
