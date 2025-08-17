// Enhanced by AI on 2025-08-17T11:39:04.815Z
// Section: about
// Category: about

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Industry Expertise",
      description: "Our team has deep experience in manufacturing and supply chain optimization, helping clients maximize the value of their SAP investments."
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description: "We leverage the latest SAP technologies and best practices to deliver tailored solutions that drive measurable business impact."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our top priority. We work closely with you to understand your unique challenges and goals, and deliver solutions that exceed your expectations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With a presence in multiple countries, we support clients worldwide in transforming their manufacturing and logistics operations through SAP implementation and optimization."
    }
  ]

  const stats = [
    { value: "2010", label: "Founded", icon: Award },
    { value: "250+", label: "Clients Served", icon: Users },
    { value: "99.9%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "15+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      image: "JD",
      bio: "Seasoned executive with 20+ years of experience in manufacturing and supply chain consulting."
    },
    {
      name: "Jane Smith",
      role: "CTO & Co-Founder", 
      image: "JS",
      bio: "Former SAP consultant with expertise in complex system integration and optimization."
    },
    {
      name: "Michael Johnson",
      role: "Head of Delivery",
      image: "MJ",
      bio: "Proven track record of successful SAP implementation and project management."
    },
    {
      name: "Emily Chen",
      role: "Director of Client Success",
      image: "EC",
      bio: "Passionate about driving client satisfaction and delivering tangible business results."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Acme SAP Consulting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Manufacturing and Supply Chain
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              with SAP Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a team of seasoned SAP consultants dedicated to helping manufacturing and logistics companies optimize their operations and drive business growth.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Acme SAP Consulting was founded in 2010 by a group of experienced SAP consultants who saw an opportunity to help manufacturing and supply chain companies unlock the full potential of their SAP investments.
              </p>
              <p>
                Over the years, we have built a reputation for delivering innovative, tailored solutions that drive measurable business impact for our clients. From streamlining warehouse operations to optimizing global supply chains, we've helped organizations of all sizes transform their processes and gain a competitive edge.
              </p>
              <p>
                Today, we're proud to serve over 250 clients worldwide, partnering with them to navigate the ever-evolving landscape of manufacturing and logistics technology.
              </p>
            </div>
            <Button className="group">
              Learn More About Our History
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Acme SAP Consulting has been a true partner in our journey to optimize our manufacturing and supply chain operations. Their expertise and innovative approach have been invaluable."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- John Doe, CEO, Manufacturing Inc.</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our work and shape our relationships with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Experienced Team</h3>
            <p className="text-muted-foreground">
              The talented professionals who drive our success and deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Acme SAP Consulting has been a true partner in our journey to optimize our manufacturing and supply chain operations. Their expertise and innovative approach have been invaluable in helping us streamline our processes and drive measurable business impact."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">CEO, Manufacturing Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}