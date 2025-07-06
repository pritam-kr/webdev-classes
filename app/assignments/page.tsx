import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Star, ArrowRight, Code, Palette, Zap, Globe, Sparkles } from "lucide-react"
import Link from "next/link"

const assignments = [
  {
    id: "html-portfolio",
    title: "Personal Portfolio Website",
    description: "Build a professional portfolio website using semantic HTML5 and modern CSS techniques",
    difficulty: "Beginner",
    estimatedTime: "3-4 hours",
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
    category: "HTML/CSS",
    icon: Code,
    featured: false,
  },
  {
    id: "css-landing-page",
    title: "Responsive Landing Page",
    description: "Create a modern, fully responsive landing page with animations and modern CSS features",
    difficulty: "Intermediate",
    estimatedTime: "4-5 hours",
    technologies: ["CSS3", "Flexbox", "Grid", "Animations", "Media Queries"],
    category: "CSS",
    icon: Palette,
    featured: false,
  },
  {
    id: "tailwind-ecommerce",
    title: "E-commerce Product Page",
    description: "Design a modern e-commerce product page using Tailwind CSS utility classes with AI assistance",
    difficulty: "Beginner",
    estimatedTime: "2-3 hours",
    technologies: ["Tailwind CSS", "HTML", "Responsive Design", "AI Tools"],
    category: "Tailwind CSS",
    icon: Palette,
    featured: false,
  },
  {
    id: "js-todo-app",
    title: "Interactive Todo Application",
    description: "Build a fully functional todo app with local storage using vanilla JavaScript",
    difficulty: "Intermediate",
    estimatedTime: "5-7 hours",
    technologies: ["JavaScript", "DOM", "Local Storage", "CSS"],
    category: "JavaScript",
    icon: Zap,
    featured: false,
  },
  {
    id: "js-weather-app",
    title: "Weather Application",
    description: "Build a weather app that fetches data from a real API with AI-powered development assistance",
    difficulty: "Advanced",
    estimatedTime: "6-8 hours",
    technologies: ["JavaScript", "API", "Fetch", "CSS", "AI Tools"],
    category: "JavaScript",
    icon: Zap,
    featured: false,
  },
  {
    id: "react-dashboard",
    title: "ReactJS User Dashboard",
    description:
      "Create a modern, responsive dashboard UI using ReactJS that displays user profile data from structured JSON",
    difficulty: "Intermediate",
    estimatedTime: "4-6 hours",
    technologies: ["ReactJS", "CSS", "JSON", "Responsive Design"],
    category: "ReactJS",
    icon: Globe,
    featured: true,
  },
  {
    id: "react-ecommerce",
    title: "React E-commerce Store",
    description: "Build a complete e-commerce store with product listing, cart, and checkout using React hooks",
    difficulty: "Advanced",
    estimatedTime: "8-10 hours",
    technologies: ["ReactJS", "Context API", "React Router", "Local Storage"],
    category: "ReactJS",
    icon: Globe,
    featured: false,
  },
  {
    id: "ai-code-generator",
    title: "AI-Powered Code Generator",
    description: "Create a tool that uses AI APIs to generate HTML/CSS code from natural language descriptions",
    difficulty: "Advanced",
    estimatedTime: "6-8 hours",
    technologies: ["JavaScript", "AI APIs", "OpenAI", "Claude API"],
    category: "AI Tools",
    icon: Sparkles,
    featured: true,
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800"
    case "Advanced":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "HTML/CSS":
      return "bg-orange-100 text-orange-800"
    case "CSS":
      return "bg-pink-100 text-pink-800"
    case "JavaScript":
      return "bg-yellow-100 text-yellow-800"
    case "ReactJS":
      return "bg-blue-100 text-blue-800"
    case "Tailwind CSS":
      return "bg-cyan-100 text-cyan-800"
    case "AI Tools":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function AssignmentsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Practice Assignments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Strengthen your skills with these hands-on assignments. Each assignment is designed to reinforce the
            concepts taught in our live classes and help you build a strong portfolio.
          </p>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
            <p className="text-purple-800 font-semibold flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Learn to use AI tools like ChatGPT, Claude, and GitHub Copilot to accelerate your development!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => {
            const IconComponent = assignment.icon
            return (
              <Card
                key={assignment.id}
                className={`hover:shadow-lg transition-all duration-200 ${assignment.featured ? "ring-2 ring-blue-200 bg-blue-50/30" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          assignment.category === "AI Tools" ? "bg-purple-100" : "bg-blue-100"
                        }`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${
                            assignment.category === "AI Tools" ? "text-purple-600" : "text-blue-600"
                          }`}
                        />
                      </div>
                      {assignment.featured && (
                        <Badge className="bg-blue-600 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2">{assignment.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4">{assignment.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {assignment.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {assignment.estimatedTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge className={getDifficultyColor(assignment.difficulty)}>{assignment.difficulty}</Badge>
                      <Badge className={getCategoryColor(assignment.category)}>{assignment.category}</Badge>
                    </div>
                    <Link href={`/assignments/${assignment.id}`}>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Start
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">🚀 Ready for Live Classes with AI Integration?</h2>
              <p className="text-blue-100 mb-6">
                These assignments are just a taste of what you'll learn in our comprehensive live program. Join us for
                interactive sessions, AI-powered development techniques, personalized feedback, and career guidance.
              </p>
              <div className="bg-white/10 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">What makes our course special:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-blue-100">
                  <div>✨ AI tools integration in every module</div>
                  <div>🎯 Only ₹6,000 for complete program</div>
                  <div>👨‍💻 Live coding with industry expert</div>
                  <div>🏗️ 10+ portfolio-ready projects</div>
                  <div>💼 Job placement assistance</div>
                  <div>🤖 ChatGPT & GitHub Copilot training</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.gle/w7gp9m3h1vMNinfy5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Enroll Now - Only ₹6,000!
                </a>
                <a
                  href="/roadmap"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Full Roadmap
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
