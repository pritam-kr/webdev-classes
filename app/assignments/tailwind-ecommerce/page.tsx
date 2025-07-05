import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, Palette, CheckSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TailwindEcommerceAssignment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/assignments" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Assignments
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-green-100 text-green-800">Beginner</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge className="bg-cyan-100 text-cyan-800">2-3 hours</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">E-commerce Product Page</h1>
          <p className="text-xl text-gray-600">
            Design a modern e-commerce product page using Tailwind CSS utility classes and responsive design principles.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                2-3 hours
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Individual Project
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />1 week deadline
              </div>
            </div>
            <p className="text-gray-700 mb-0">
              Create a professional e-commerce product page with modern design, responsive layout, and interactive
              elements using Tailwind CSS.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Palette className="w-6 h-6" />
            Assignment Requirements
          </h2>

          <h3 className="text-xl font-semibold mb-3">🛍️ Required Sections</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Product Gallery:</strong> Image carousel with thumbnails and zoom functionality
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Product Info:</strong> Title, price, rating, description, and key features
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Product Options:</strong> Size selector, color picker, quantity selector
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Action Buttons:</strong> Add to cart, buy now, wishlist, share buttons
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Product Details:</strong> Specifications, shipping info, return policy
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Reviews Section:</strong> Customer reviews with ratings and photos
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Related Products:</strong> Recommended products carousel
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🎨 Tailwind CSS Requirements</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use Tailwind utility classes for all styling (no custom CSS)</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement responsive design with Tailwind breakpoints</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use Tailwind's color palette and spacing system</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Apply hover effects and transitions with Tailwind</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use Flexbox and Grid utilities for layout</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🤖 AI Tools Integration</h3>
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-purple-800 mb-2">Use AI to Accelerate Development:</h4>
            <div className="space-y-2 text-purple-700">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Use ChatGPT to generate Tailwind utility combinations</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Ask Claude to optimize your responsive design classes</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Generate product descriptions and reviews with AI</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">📱 Responsive Design</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Mobile (sm):</strong> Single column layout, stacked product info
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Tablet (md):</strong> Two-column layout with image and details side by side
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Desktop (lg+):</strong> Full layout with sidebar and expanded gallery
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">💡 Interactive Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Image gallery with thumbnail navigation</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Color and size selection with visual feedback</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Quantity increment/decrement buttons</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Tabs for product details, reviews, and shipping</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">HTML5</Badge>
            <Badge variant="secondary">Responsive Design</Badge>
            <Badge variant="secondary">JavaScript (minimal)</Badge>
            <Badge variant="secondary">AI Tools</Badge>
          </div>

          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
            <h4 className="font-semibold text-cyan-800 mb-2">💡 Learning Objectives</h4>
            <ul className="text-cyan-700 space-y-1">
              <li>• Master Tailwind CSS utility-first approach</li>
              <li>• Create professional e-commerce interfaces</li>
              <li>• Implement responsive design patterns</li>
              <li>• Use AI tools to accelerate development</li>
              <li>• Build interactive product showcases</li>
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
