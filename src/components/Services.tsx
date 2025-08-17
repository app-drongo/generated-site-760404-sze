// Enhanced by AI on 2025-08-17T11:39:04.714Z
// Section: services
// Category: services

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  ArrowRight
} from "lucide-react"

export default function ServicesCardGrid() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP Implementation",
      description: "Seamless SAP implementation and optimization services for manufacturing and supply chain operations.",
      icon: Rocket,
      badge: "Expertise",
      features: ["Industry Best Practices", "Rapid Deployment", "Continuous Support"],
      link: "/services/sap-implementation"
    },
    {
      id: "warehouse-management",
      title: "Warehouse Management",
      description: "Streamline your warehouse operations with advanced SAP-powered solutions.",
      icon: Smartphone,
      features: ["Inventory Optimization", "Process Automation", "Real-time Visibility"],
      link: "/services/warehouse-management"
    },
    {
      id: "supply-chain-optimization",
      title: "Supply Chain Optimization",
      description: "Leverage SAP technology to enhance your supply chain efficiency and resilience.",
      icon: Globe,
      badge: "New",
      features: ["Demand Forecasting", "Logistics Planning", "Supplier Collaboration"],
      link: "/services/supply-chain-optimization"
    },
    {
      id: "manufacturing-consulting",
      title: "Manufacturing Consulting",
      description: "Improve your manufacturing operations with expert SAP consulting services.",
      icon: Palette,
      features: ["Process Improvement", "Production Planning", "Quality Management"],
      link: "/services/manufacturing-consulting"
    },
    {
      id: "sap-support-services",
      title: "SAP Support Services",
      description: "Comprehensive SAP support and maintenance services to ensure your systems run smoothly.",
      icon: BarChart3,
      features: ["Helpdesk Support", "System Monitoring", "Upgrades & Migrations"],
      link: "/services/sap-support"
    },
    {
      id: "sap-security-compliance",
      title: "SAP Security & Compliance",
      description: "Safeguard your SAP environment and ensure regulatory compliance.",
      icon: Shield,
      features: ["Access Management", "Threat Detection", "Audit Readiness"],
      link: "/services/sap-security"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Manufacturing and
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Supply Chain with SAP Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP solutions designed to help your manufacturing and logistics business thrive
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Learn More</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your manufacturing and supply chain operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}