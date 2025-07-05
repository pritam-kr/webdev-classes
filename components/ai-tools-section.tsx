import { Zap, Brain, Code, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AIToolsSection() {
  const aiTools = [
    {
      name: "ChatGPT",
      description: "Generate code, debug errors, and get instant explanations",
      icon: Brain,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that suggests code as you type",
      icon: Code,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Claude",
      description: "Advanced AI for code review and documentation",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Zap className="w-4 h-4 mr-2" />
            Exclusive Feature
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">AI Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Be ahead of the curve! Learn to use cutting-edge AI tools that make you
            <span className="font-semibold text-purple-600"> 10x faster</span> at coding and debugging.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="outline" className="bg-white/50">
              Write Code Faster
            </Badge>
            <Badge variant="outline" className="bg-white/50">
              Debug Instantly
            </Badge>
            <Badge variant="outline" className="bg-white/50">
              Get Smart Suggestions
            </Badge>
            <Badge variant="outline" className="bg-white/50">
              Future-Proof Skills
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aiTools.map((tool, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/70 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${tool.color}`}>
                  <tool.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Industry-First:</span> We're the only course teaching AI tools integration
            with web development
          </p>
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2">
            Learn the Future of Programming
          </Badge>
        </div>
      </div>
    </section>
  )
}
