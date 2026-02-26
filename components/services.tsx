"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"

const serviceCategories = [
  {
    id: "erp",
    name: "ERP and Business Applications",
    title: "ERP and Business Applications",
    description:
      "Comprehensive Oracle ERP and Business Application implementation services. Our certified specialists deliver end-to-end implementation, configuration, and support across all Oracle ERP modules.",
    services: [
      {
        name: "Oracle EBS Implementation Services",
        details: [
          {
            title: "Strategic Planning and Assessment",
            desc: "Perform comprehensive needs analysis and gap assessments. Align EBS implementation with business objectives and craft a tailored roadmap for success.",
          },
          {
            title: "Implementation and Configuration",
            desc: "Oversee the complete implementation process, tailor EBS modules to align with your workflows, and integrate EBS with other business systems.",
          },
          {
            title: "Data Migration and Conversion",
            desc: "Ensure precise and seamless migration of data from legacy systems, maintaining data integrity and security.",
          },
          {
            title: "Customization and Development",
            desc: "Create custom extensions and integrations to fulfil unique requirements. Improve EBS functionality with personalized solutions.",
          },
          {
            title: "Training and Support",
            desc: "Deliver thorough user training and adoption programs. Provide continuous support and maintenance services. Assist in maximizing the value of your EBS investment.",
          },
        ],
      },
      {
        name: "Oracle Fusion Implementation Services",
        details: [
          {
            title: "Visionary Planning and Assessment",
            desc: "Integrate Fusion with strategic goals, analyze gaps comprehensively, enhance business processes, and craft a tailored roadmap for effortless cloud integration.",
          },
          {
            title: "Expert Deployment and Configuration",
            desc: "Masterfully configure modules for productivity. Integrate seamlessly, and maintain data integrity. Foster user adoption with intuitive interfaces and comprehensive training.",
          },
          {
            title: "Empowering Change Management and Training",
            desc: "Empower teams with deep training, and foster engaging user culture for maximum ROI. Develop robust, ongoing support for continuous success.",
          },
          {
            title: "Customization and Automation Unleashed",
            desc: "Boost Fusion with custom solutions, automate tasks for agile decisions. Create personalized workflows, dashboards for an enriched user experience.",
          },
          {
            title: "Seamless Data Migration and Integration",
            desc: "Securely migrate data from legacy systems, ensuring accuracy and regulatory compliance. Integrate with other cloud apps for a unified, data-driven ecosystem.",
          },
        ],
      },
      {
        name: "Oracle EPM Implementation Services",
        details: [
          {
            title: "Unified Platform",
            desc: "Seamlessly integrate financial planning, budgeting, forecasting, consolidation, and reporting.",
          },
          {
            title: "Real-Time Insights",
            desc: "Gain immediate insight into financial health, track metrics, and make data-driven decisions.",
          },
          {
            title: "Reduced Costs and Risks",
            desc: "Automate tasks, minimize errors and ensure compliance with Oracle EPM Cloud.",
          },
          {
            title: "Improved Agility and Scalability",
            desc: "Adapt swiftly to market shifts, scale effortlessly, and optimize resource allocation.",
          },
          {
            title: "Enhanced Collaboration",
            desc: "Enhance efficiency, reduce errors, and ensure compliance with EPM Cloud.",
          },
        ],
      },
      {
        name: "Oracle HCM Implementation Services",
        details: [
          {
            title: "Unified Platform",
            desc: "Handle talent acquisition, payroll, performance, learning, and more from one platform.",
          },
          {
            title: "Automated Workflows",
            desc: "Eliminate manual tasks, simplify processes, and boost HR efficiency.",
          },
          {
            title: "Self-Service Portals",
            desc: "Empower employees with convenient access to HR information and services.",
          },
          {
            title: "Enhanced Employee Engagement",
            desc: "Motivate and retain top talent with a personalized and engaging HR experience.",
          },
          {
            title: "Real-Time Analytics",
            desc: "Gain instant insights into workforce performance, talent trends, and HR effectiveness.",
          },
        ],
      },
      {
        name: "Oracle SCM Implementation Services",
        details: [
          {
            title: "Unified Platform",
            desc: "Handle procurement, planning, inventory, warehousing, logistics, and manufacturing efficiently from one centralized platform.",
          },
          {
            title: "Real-Time Insights",
            desc: "Gain instant insights into your entire supply chain, track performance metrics, and make data-driven decisions.",
          },
          {
            title: "Automated Workflows",
            desc: "Automate tasks, streamline processes and enhance efficiency to boost operational productivity and effectiveness.",
          },
          {
            title: "Enhanced Planning and Forecasting",
            desc: "Achieve accurate forecasting through AI and machine learning, optimize inventory levels, and avoid stockouts.",
          },
          {
            title: "Improved Collaboration and Communication",
            desc: "Connect seamlessly with suppliers, partners, and customers for agile and flexible operations.",
          },
        ],
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud and Infrastructure",
    title: "Cloud and Infrastructure Services",
    description:
      "Transform your IT landscape with our scalable Cloud and Infrastructure services. We offer seamless cloud migration, management, and optimization solutions that ensure high performance, security, and reliability.",
    services: [
      {
        name: "Oracle Cloud Services",
        details: [
          {
            title: "High Availability and Fault Tolerance",
            desc: "Design and implement high availability architectures to ensure continuous database uptime, even in the face of unexpected events.",
          },
          {
            title: "Security and Compliance",
            desc: "Enhance data security and meet regulatory compliance requirements with comprehensive security assessments and audits.",
          },
          {
            title: "Data Migration and Consolidation",
            desc: "Streamline data migration, consolidation, and archiving processes for improved efficiency and data management.",
          },
          {
            title: "Application and Database Integration",
            desc: "Ensure seamless integration between your databases and applications for optimal performance and data consistency.",
          },
        ],
      },
      {
        name: "Oracle Cloud Integration Services",
        details: [
          {
            title: "Frictionless Connectivity",
            desc: "Seamlessly integrate your on-premises applications, cloud services, and APIs with Oracle Cloud Integration (OIC).",
          },
          {
            title: "Automated Workflows",
            desc: "Design and implement intelligent workflows to eliminate manual tasks and boost efficiency.",
          },
          {
            title: "Real-Time Data Insights",
            desc: "Gain actionable insights from your data through robust integrations and real-time analytics.",
          },
          {
            title: "Reduced Costs and Complexity",
            desc: "Simplify your IT landscape, streamline operations, and optimize resource allocation.",
          },
          {
            title: "Unmatched Security and Scalability",
            desc: "OIC delivers secure, scalable solutions to handle diverse data volumes and protect sensitive information.",
          },
        ],
      },
      {
        name: "Oracle Cloud Accelerators",
        details: [
          {
            title: "Ready-Made Infrastructure Blueprints",
            desc: "Jumpstart your deployment with ready-made infrastructure blueprints, eliminating the need for costly manual setups.",
          },
          {
            title: "Industry Best Practices",
            desc: "Leverage pre-configured architectures built on industry best practices for optimal performance.",
          },
          {
            title: "Accelerated Time to Value",
            desc: "Reduce implementation time and costs with pre-designed infrastructure patterns.",
          },
          {
            title: "Pre-Built Connectors",
            desc: "Connect your existing systems to Oracle Cloud with pre-built connectors, streamlining data flow and enhancing collaboration.",
          },
          {
            title: "Low-Code Platform",
            desc: "Customize and extend Accelerator functionality with a user-friendly, low-code platform, empowering both technical and non-technical users.",
          },
        ],
      },
      {
        name: "Oracle Database Services",
        details: [
          {
            title: "Remote Oracle DBA Support",
            desc: "Eliminate the need for in-house staff with our flexible remote DBA services. We'll handle your 24/7 monitoring, performance tuning, patch management, and emergency support, giving you peace of mind and freeing up resources.",
          },
          {
            title: "Converged Database Services",
            desc: "Experience the best of both worlds with our converged database solutions. Seamlessly integrate your on-premise and cloud databases into a single, unified platform, simplifying management and unlocking new levels of efficiency and accessibility.",
          },
          {
            title: "On-Premise Oracle Database Management",
            desc: "Maximize the effectiveness of your on-premise databases. We'll optimize performance, ensure security and compliance, and implement robust backup and recovery strategies.",
          },
          {
            title: "Cloud Oracle Database Solutions",
            desc: "Leverage the agility and scalability of the cloud without sacrificing security or control. We'll guide you through cloud migration, optimize configuration, and ensure seamless integration with your existing systems.",
          },
        ],
      },
    ],
  },
  {
    id: "data",
    name: "Data and Analytic",
    title: "Data and Analytics Services",
    description:
      "Unlock the full potential of your data with our Advanced Data and Analytics services. Our solutions encompass data warehousing, big data processing, predictive analytics, and AI-driven insights, helping you to make data-driven decisions and achieve strategic business objectives.",
    services: [
      {
        name: "Oracle Analytics",
        details: [
          {
            title: "Robust Enterprise Analytics",
            desc: "We excel in Oracle Analytics, providing robust solutions for complex data analysis and enterprise-wide reporting.",
          },
          {
            title: "Rapid Deployment and Scalability",
            desc: "Get up and running quickly in the cloud, scaling seamlessly to meet evolving needs.",
          },
          {
            title: "Global Accessibility and Collaboration",
            desc: "Empower collaboration across teams and locations with secure, cloud-based access.",
          },
          {
            title: "Automated Updates and Maintenance",
            desc: "Enjoy hassle-free operation with automatic updates and ongoing maintenance.",
          },
          {
            title: "Tailored Customization and Control",
            desc: "Customize and configure to precisely match your unique requirements and security needs.",
          },
          {
            title: "Offline Accessibility and Data Control",
            desc: "Maintain complete control over data and access, even in disconnected environments.",
          },
        ],
      },
      {
        name: "Business Intelligence",
        details: [
          {
            title: "Cutting-Edge Data Visualization",
            desc: "We are certified Business Intelligence experts, leveraging cutting-edge data visualization capabilities to create interactive dashboards and reports that bring your data to life.",
          },
          {
            title: "Rapid Deployment and Scalability",
            desc: "Get up and running quickly in the cloud, scaling seamlessly to meet evolving needs.",
          },
          {
            title: "Global Accessibility and Collaboration",
            desc: "Empower collaboration across teams and locations with secure, cloud-based access.",
          },
          {
            title: "Deep Business Understanding",
            desc: "Our expertise goes beyond mere tools. We possess a deep understanding of business processes and industry best practices, enabling us to translate data into actionable recommendations.",
          },
          {
            title: "Actionable Insights",
            desc: "Transform raw data into strategic recommendations that drive meaningful business outcomes.",
          },
        ],
      },
    ],
  },
]

const featuredSolutions = [
  {
    id: 1,
    title: "Finance Specialists",
    category: "Finance Module",
    cta: "Find Expert",
    icon: "💰",
  },
  { id: 2, title: "SCM & Supply Planning Experts", category: "Supply Chain", cta: "Find Expert", icon: "📦" },
  { id: 3, title: "Technical Resources", category: "Reports & Integrations", cta: "Find Expert", icon: "⚙️" },
  {
    id: 4,
    title: "AI Agents & Automation",
    category: "Intelligent Solutions",
    cta: "Find Expert",
    icon: "🤖",
  },
]

type ServiceDetail = {
  title: string
  desc: string
}

type Service = {
  name: string
  details: ServiceDetail[]
}

function ServiceModal({ service, onClose }: { service: Service | null; onClose: () => void }) {
  if (!service) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-slide-up" onClick={onClose}>
      <div
        className="glass-primary bg-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl shadow-primary/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between p-8 border-b border-border/50 bg-card/98 backdrop-blur-xl z-10">
          <h2 className="section-heading !mb-0 text-3xl sm:text-4xl gradient-text-glow">{service.name}</h2>
          <button
            onClick={onClose}
            className="p-3 hover:bg-primary/20 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-90 bg-primary/10"
            aria-label="Close modal"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        <div className="p-8 sm:p-10 space-y-6">
          {service.details && service.details.length > 0 ? (
            service.details.map((detail: ServiceDetail, idx: number) => (
              <div key={idx} className="card-premium border-l-4 border-l-primary pl-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                <h3 className="card-title text-xl sm:text-2xl !mb-4">{detail.title}</h3>
                <p className="section-body text-base sm:text-lg">{detail.desc}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="section-body text-xl opacity-80">Detailed information coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("erp")
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const activeCategory = serviceCategories.find((cat) => cat.id === activeTab)

  return (
    <>
      {/* Featured Solutions Section */}
      <section id="solutions" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 animate-slide-up">
            <div className="inline-block mb-4">
              <span className="section-eyebrow">Solutions</span>
            </div>
            <h2 className="section-title">
              <span className="gradient-text-glow">Featured Solutions</span>
            </h2>
            <p className="section-intro">Expert Oracle Fusion resources deployed in 24-48 hours</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {featuredSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group card-premium card-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 sm:h-56 bg-primary/10 rounded-2xl flex items-center justify-center text-6xl sm:text-7xl mb-6 relative overflow-hidden border border-primary/20">
                  <span className="relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{solution.icon}</span>
                </div>
                <div>
                  <p className="label-small mb-4">
                    {solution.category}
                  </p>
                  <h3 className="card-title text-xl sm:text-2xl !mb-5 line-clamp-2 group-hover:gradient-text-glow transition-all duration-500">
                    {solution.title}
                  </h3>
                  <button className="text-primary font-bold text-sm hover:text-accent flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    {solution.cta} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section id="services" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 animate-slide-up">
            <div className="inline-block mb-4">
              <span className="section-eyebrow">Services</span>
            </div>
            <h2 className="section-title">
              <span className="gradient-text-glow">Our Services</span>
            </h2>
            <p className="section-intro">Pre-vetted Oracle Fusion specialists across all modules and technical services</p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-16 sm:mb-20 p-3 glass-primary rounded-3xl border border-primary/25 backdrop-blur-xl shadow-xl shadow-primary/5">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 sm:px-8 py-3 sm:py-4 font-bold transition-all duration-500 text-sm sm:text-base whitespace-nowrap relative rounded-2xl ${
                  activeTab === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105 border border-primary/40"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105 border border-transparent"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeCategory && (
            <div className="fade-in animate-scale-in">
              <div className="mb-12 sm:mb-16">
                <h3 className="section-heading text-balance leading-tight">
                  <span className="gradient-text-glow">
                    {activeCategory.title}
                  </span>
                </h3>
                <p className="section-body mb-12 max-w-4xl">{activeCategory.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeCategory.services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedService(service)}
                      className="group text-left card-premium cursor-pointer border-primary/20"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl sm:text-2xl font-bold gradient-text-glow flex-1 pr-4">
                          {service.name}
                        </h4>
                        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/20">
                          <ArrowRight
                            className="text-primary group-hover:translate-x-2 transition-transform duration-300"
                            size={24}
                          />
                        </div>
                      </div>
                      <p className="card-desc mt-2 group-hover:text-primary transition-colors font-medium">Click to view details</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Details Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  )
}
