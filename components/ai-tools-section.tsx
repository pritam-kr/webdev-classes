import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Bot, Code2, Zap, ArrowRight, Star } from "lucide-react"

export default function AIToolsSection() {
  const aiTools = [
    {
      name: "ChatGPT",
      description: "Generate code, debug errors, and get instant programming help",
      icon: Bot,
      color: "bg-green-100 text-green-600",
      features: ["Code Generation", "Bug Fixing", "Code Explanation"],
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that suggests code as you type",
      icon: Code2,
      color: "bg-blue-100 text-blue-600",
      features: ["Auto-completion", "Function Generation", "Code Suggestions"],
    },
    {
      name: "Claude AI",
      description: "Advanced AI for code review, optimization, and documentation",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600",
      features: ["Code Review", "Optimization", "Documentation"],
    },
    {
      name: "AI CSS Tools",
      description: "Generate responsive layouts and animations with AI assistance",
      icon: Zap,
      color: "bg-orange-100 text-orange-600",
      features: ["Layout Generation", "CSS Animations", "Responsive Design"],
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-600 text-white px-4 py-2 text-sm">
                <Star className="w-4 h-4 mr-1" />
                EXCLUSIVE FEATURE
              </Badge>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Learn Web Development with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                AI Tools
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be ahead of the curve! Learn how to use cutting-edge AI tools to write better code faster, debug
              efficiently, and accelerate your development workflow. This is the future of programming!
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">🚀 Why Learn AI Tools?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-purple-700">
                <div>✨ Write code 10x faster</div>
                <div>🐛 Debug errors instantly</div>
                <div>💡 Get intelligent suggestions</div>
                <div>📚 Generate documentation</div>
                <div>🎨 Create stunning designs</div>
                <div>🔧 Optimize performance</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {aiTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-200 border-2 hover:border-purple-200"
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${tool.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                    <div className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
              <CardContent className="p-8">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-200" />
                <h3 className="text-2xl font-bold mb-4">🤖 Master AI-Powered Development</h3>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                  Join our exclusive program and learn how to leverage AI tools in every aspect of web development. From
                  writing HTML/CSS to building React applications - AI will be your coding superpower!
                </p>
                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-100">
                    <div>🎯 AI-assisted coding in every module</div>
                    <div>💰 Only ₹8,000 for complete AI training</div>
                    <div>🏆 Industry-first AI integration course</div>
                    <div>🚀 Future-proof your development skills</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://forms.gle/w7gp9m3h1vMNinfy5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    Start Learning with AI
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/roadmap"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View AI Curriculum
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
