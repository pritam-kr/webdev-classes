import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, Sparkles, CheckSquare, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"

export default function AiCodeGeneratorAssignment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/assignments" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Assignments
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-purple-600 text-white">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
            <Badge className="bg-red-100 text-red-800">Advanced</Badge>
            <Badge variant="secondary">AI Tools</Badge>
            <Badge className="bg-purple-100 text-purple-800">6-8 hours</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI-Powered Code Generator</h1>
          <p className="text-xl text-gray-600">
            Create a tool that uses AI APIs to generate HTML/CSS code from natural language descriptions, showcasing the
            future of AI-assisted development.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6-8 hours
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Individual Project
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />2 weeks deadline
              </div>
            </div>
            <p className="text-gray-700 mb-0">
              Build a cutting-edge application that demonstrates how AI can revolutionize web development by generating
              code from natural language descriptions.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Assignment Requirements
          </h2>

          <h3 className="text-xl font-semibold mb-3">🤖 Core Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Natural Language Input:</strong> Text area for users to describe what they want to build
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>AI Integration:</strong> Connect to OpenAI API or Claude API for code generation
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Code Preview:</strong> Live preview of generated HTML/CSS code
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Code Editor:</strong> Syntax-highlighted editor to view and edit generated code
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Export Options:</strong> Download generated code as HTML/CSS files
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Template Gallery:</strong> Pre-built examples and templates
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>History:</strong> Save and manage previous generations
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🔧 Technical Implementation</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Integrate OpenAI GPT API or Anthropic Claude API</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement proper prompt engineering for code generation</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use iframe or sandboxed preview for generated code</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement syntax highlighting with Prism.js or similar</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Add error handling for API failures and rate limits</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement loading states and progress indicators</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">✨ AI Prompt Examples</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Example Prompts Users Can Try:</h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• "Create a modern landing page for a SaaS product with a hero section and pricing cards"</li>
              <li>• "Build a responsive navigation bar with dropdown menus"</li>
              <li>• "Design a contact form with validation styling"</li>
              <li>• "Create a product card grid for an e-commerce site"</li>
              <li>• "Build a dark mode toggle button with smooth animations"</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3">🎨 UI/UX Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Split-screen layout with input and preview</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Responsive design for mobile and desktop</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Dark/light theme toggle</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Loading animations and progress bars</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Copy-to-clipboard functionality</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">💡 Bonus Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Generate React components instead of just HTML/CSS</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Add Tailwind CSS generation option</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Implement code optimization suggestions</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Add accessibility improvements to generated code</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Create shareable links for generated code</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">📁 File Structure</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6">
            <pre className="text-sm">{`ai-code-generator/
├── index.html
├── css/
│   ├── style.css
│   └── prism.css
├── js/
│   ├── app.js
│   ├── api.js
│   ├── editor.js
│   └── preview.js
├── templates/
│   └── examples.json
├── assets/
│   └── icons/
└── README.md`}</pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">🔑 API Setup Guide</h3>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-yellow-800 mb-2">Getting Started with AI APIs:</h4>
            <ol className="text-yellow-700 space-y-1 list-decimal list-inside text-sm">
              <li>Sign up for OpenAI API key at platform.openai.com</li>
              <li>Or get Claude API access from Anthropic</li>
              <li>Set up environment variables for API keys</li>
              <li>Implement proper rate limiting and error handling</li>
              <li>Test with simple prompts before building full interface</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-3">✅ Submission Guidelines</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Deadline:</strong> 2 weeks from assignment date
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>GitHub Repository:</strong> Include setup instructions and API configuration guide
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Live Demo:</strong> Deploy with environment variables (hide API keys)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Documentation:</strong> Explain AI integration and prompt engineering approach
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">JavaScript ES6+</Badge>
            <Badge variant="secondary">OpenAI API</Badge>
            <Badge variant="secondary">Claude API</Badge>
            <Badge variant="secondary">Fetch API</Badge>
            <Badge variant="secondary">Prism.js</Badge>
            <Badge variant="secondary">CSS3</Badge>
            <Badge variant="secondary">HTML5</Badge>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h4 className="font-semibold text-purple-800 mb-2">💡 Learning Objectives</h4>
            <ul className="text-purple-700 space-y-1">
              <li>• Master AI API integration and prompt engineering</li>
              <li>• Build tools that showcase AI capabilities</li>
              <li>• Understand the future of AI-assisted development</li>
              <li>• Create practical applications with real-world value</li>
              <li>• Learn advanced JavaScript and API handling</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <a href="https://forms.gle/w7gp9m3h1vMNinfy5" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700">Need Help? Enroll in Live Classes</Button>
          </a>
          <a href="https://wa.me/917004905025" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Chat on WhatsApp</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
