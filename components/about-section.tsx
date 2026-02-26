"use client"

const aboutPoints = [
  {
    title: "Oracle Fusion Specialists",
    value: "500+",
    description: "Pre-vetted certified professionals in our network",
    icon: "👥",
  },
  {
    title: "Years of Expertise",
    value: "15+",
    description: "Serving Oracle Fusion customers globally",
    icon: "📅",
  },
  {
    title: "Successful Placements",
    value: "100+",
    description: "Oracle Fusion resources deployed successfully",
    icon: "✅",
  },
  {
    title: "Client Satisfaction",
    value: "98%",
    description: "Client satisfaction and retention rate",
    icon: "⭐",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="section-eyebrow">About Us</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-glow">About Techlynk</span>
          </h2>
          <p className="section-intro px-2">
            We are your trusted Oracle Fusion staff augmentation partner, connecting you with pre-vetted, certified specialists across all Oracle Fusion modules and technical services. Our rigorous screening process ensures you get the right talent, deployed quickly, to accelerate your Oracle Fusion projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {aboutPoints.map((point, index) => (
            <div
              key={index}
              className="card-premium text-center animate-slide-up group hover:scale-110 transition-all duration-700 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-6xl sm:text-7xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]">{point.icon}</div>
                <h3 className="text-4xl sm:text-5xl font-extrabold gradient-text-glow mb-4">{point.value}</h3>
                <h4 className="card-title">{point.title}</h4>
                <p className="card-desc">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card-premium p-10 sm:p-12 md:p-16 animate-slide-up">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <div>
              <h3 className="section-heading">
                <span className="gradient-text-glow">Our Mission</span>
              </h3>
              <p className="section-body mb-6">
                To connect Oracle Fusion customers with the best-in-class specialists, enabling them to scale their teams quickly and efficiently. We bridge the talent gap by providing pre-vetted, certified Oracle Fusion professionals across all functional modules and technical services.
              </p>
              <p className="section-body">
                Our rigorous screening and validation process ensures that every resource we provide meets the highest standards of expertise and professionalism, delivering immediate value to your Oracle Fusion initiatives.
              </p>
            </div>
            <div>
              <h3 className="section-heading">
                <span className="gradient-text-glow">Our Vision</span>
              </h3>
              <p className="section-body mb-6">
                To become the most trusted Oracle Fusion staff augmentation partner globally, recognized for our ability to quickly match clients with the perfect Oracle Fusion specialists. We envision a world where Oracle Fusion customers can scale their teams effortlessly, accessing top talent within 48 hours.
              </p>
              <p className="section-body mb-10">
                We strive to build the largest network of certified Oracle Fusion professionals, making expert talent accessible to organizations of all sizes, from startups to Fortune 500 enterprises.
              </p>
              <div className="glass-primary border border-primary/30 rounded-2xl p-8 bg-primary/5 shadow-xl shadow-primary/10">
                <p className="label-small mb-3">Headquarters</p>
                <p className="text-2xl sm:text-3xl font-extrabold gradient-text-glow mb-3">📍 Hyderabad, India</p>
                <p className="text-lg sm:text-xl text-foreground font-bold">+91 95737 87824</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
