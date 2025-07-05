import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, Globe, CheckSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReactEcommerceAssignment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/assignments" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Assignments
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-red-100 text-red-800">Advanced</Badge>
            <Badge variant="secondary">ReactJS</Badge>
            <Badge className="bg-blue-100 text-blue-800">8-10 hours</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">React E-commerce Store</h1>
          <p className="text-xl text-gray-600">
            Build a complete e-commerce store with product listing, shopping cart, and checkout functionality using
            React hooks and modern patterns.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8-10 hours
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
              Create a fully functional e-commerce store that demonstrates advanced React concepts, state management,
              and real-world application architecture.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Assignment Requirements
          </h2>

          <h3 className="text-xl font-semibold mb-3">🛍️ Core Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Product Catalog:</strong> Display products with images, prices, and descriptions
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Product Categories:</strong> Filter products by categories and search functionality
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Product Details:</strong> Individual product pages with detailed information
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Shopping Cart:</strong> Add/remove items, update quantities, calculate totals
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Checkout Process:</strong> Multi-step checkout with form validation
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>User Authentication:</strong> Login/register functionality (mock or real)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Order History:</strong> View past orders and order details
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">⚛️ React Requirements</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use React Router for navigation between pages</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement Context API for global state management</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use custom hooks for reusable logic</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement useReducer for complex state management</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use useEffect for side effects and API calls</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement proper component composition</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🤖 AI Tools Integration</h3>
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-purple-800 mb-2">Use AI to Accelerate Development:</h4>
            <div className="space-y-2 text-purple-700">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Generate React components with ChatGPT</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Use GitHub Copilot for state management logic</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Generate product data and mock API responses</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Create CSS styles and responsive layouts with AI</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">ReactJS</Badge>
            <Badge variant="secondary">React Router</Badge>
            <Badge variant="secondary">Context API</Badge>
            <Badge variant="secondary">React Hooks</Badge>
            <Badge variant="secondary">Local Storage</Badge>
            <Badge variant="secondary">CSS3</Badge>
            <Badge variant="secondary">AI Tools</Badge>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Learning Objectives</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Master advanced React patterns and hooks</li>
              <li>• Implement complex state management</li>
              <li>• Build real-world e-commerce functionality</li>
              <li>• Practice component architecture and design</li>
              <li>• Use AI tools for rapid development</li>
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
