"use client"

import { useState } from "react"
import { roadmapData } from "@/data/content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle, Code, Palette, Zap, Globe, GitBranch, Briefcase, Eye } from "lucide-react"

const iconMap = {
  html: Code,
  css: Palette,
  javascript: Zap,
  react: Globe,
  projects: CheckCircle,
  presence: Globe,
  git: GitBranch,
  career: Briefcase,
}

export default function RoadmapPage() {
  const [selectedModule, setSelectedModule] = useState<any>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3">Complete Learning Roadmap</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive 4-5 month program (16-20 weeks) from beginner to job-ready developer. Each module includes
            pre-read materials, live assignments, projects, and PDF notes. Click on any module to see detailed
            information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData.modules.map((module, index) => {
            const IconComponent = iconMap[module.icon as keyof typeof iconMap] || Code
            return (
              <Dialog key={index}>
                <Card className="hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {module.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500">{module.topics.length} topics covered</span>
                    </div>
                    <div className="flex gap-2">
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <a href="https://forms.gle/w7gp9m3h1vMNinfy5" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Enroll Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      {module.title}
                      <Badge variant="secondary" className="text-xs">
                        {module.duration}
                      </Badge>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <p className="text-gray-600">{module.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3 text-base">What You'll Learn</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-base">Projects & Outcomes</h4>
                      <ul className="space-y-2">
                        {module.projects.map((project, projectIndex) => (
                          <li key={projectIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {module.assignments && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-base">Learning Materials & Assignments</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Pre-read Materials:</p>
                            <p className="text-xs text-gray-600">{module.assignments.preRead}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Post-read Materials:</p>
                            <p className="text-xs text-gray-600">{module.assignments.postRead}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Live Assignments:</p>
                            <ul className="space-y-1">
                              {module.assignments.liveAssignments.map((assignment, idx) => (
                                <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                  <span>•</span>
                                  <span>{assignment}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">PDF Notes Provided:</p>
                            <p className="text-xs text-gray-600">{module.assignments.pdfNotes}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 pt-4 border-t">
                      <a
                        href="https://forms.gle/w7gp9m3h1vMNinfy5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                      </a>
                      <a href="https://wa.me/917004905025" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">Contact Us</Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-3">Ready to Start Your Journey?</h2>
              <p className="text-blue-100 mb-4 text-sm">
                Join our live classes and transform your career in web development
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/pricing"
                  className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
                >
                  View Pricing
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
