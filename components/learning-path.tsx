import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LearningPath() {
  const pathSteps = [
    {
      step: "01",
      title: "Foundation",
      description: "HTML & CSS Fundamentals",
      duration: "2-3 weeks",
      color: "bg-blue-500",
    },
    {
      step: "02",
      title: "Interactivity",
      description: "JavaScript & DOM Manipulation",
      duration: "3-4 weeks",
      color: "bg-green-500",
    },
    {
      step: "03",
      title: "Modern Development",
      description: "React & Component-based Architecture",
      duration: "4-5 weeks",
      color: "bg-purple-500",
    },
    {
      step: "04",
      title: "Professional Skills",
      description: "Git, GitHub & Industry Practices",
      duration: "2-3 weeks",
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-3">Your Learning Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A carefully crafted path from beginner to job-ready developer in 12-15 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pathSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${step.color} text-white rounded-lg flex items-center justify-center mb-4 font-bold`}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs mb-3">{step.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {step.duration}
                  </Badge>
                </CardContent>
                {index < pathSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to See the Complete Roadmap?</h3>
                <p className="text-blue-100 mb-6">
                  Explore detailed curriculum, projects, and learning outcomes for each module
                </p>
                <Link
                  href="/roadmap"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Detailed Roadmap <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}