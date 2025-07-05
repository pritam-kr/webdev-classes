import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, Palette, CheckSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CssLandingPageAssignment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/assignments" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Assignments
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
            <Badge variant="secondary">CSS</Badge>
            <Badge className="bg-pink-100 text-pink-800">4-5 hours</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">Responsive Landing Page</h1>
          <p className="text-xl text-gray-600">
            Create a modern, fully responsive landing page with animations and advanced CSS features.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                4-5 hours
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
              Build a stunning landing page for a fictional product or service using advanced CSS techniques,
              animations, and responsive design.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Palette className="w-6 h-6" />
            Assignment Requirements
          </h2>

          <h3 className="text-xl font-semibold mb-3">📋 Required Sections</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Navigation Bar:</strong> Fixed/sticky navigation with smooth scrolling and mobile hamburger menu
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Hero Section:</strong> Eye-catching headline, subtext, call-to-action button, and background
                image/gradient
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Features Section:</strong> 3-4 key features with icons, titles, and descriptions in a grid
                layout
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>About Section:</strong> Information about the product/service with images and text
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Testimonials:</strong> Customer reviews in cards or carousel format
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Contact/CTA Section:</strong> Final call-to-action with contact form or signup
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Footer:</strong> Links, social media icons, and copyright information
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🎨 CSS Requirements</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use CSS Grid and Flexbox for complex layouts</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement CSS custom properties (variables) for consistent theming</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Add CSS animations and transitions for interactive elements</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use modern CSS functions (clamp, min, max) for responsive typography</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement hover effects and micro-interactions</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Create responsive design with mobile-first approach</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">📱 Responsive Design</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Mobile (320px - 768px):</strong> Single column layout, hamburger menu, stacked elements
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Tablet (768px - 1024px):</strong> Two-column layout where appropriate, adjusted spacing
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Desktop (1024px+):</strong> Multi-column layouts, full navigation, optimal spacing
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">✨ Animation Requirements</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Fade-in animations for sections on scroll (CSS only)</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Button hover effects with smooth transitions</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Loading animations or skeleton screens</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Parallax scrolling effect (optional)</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">💡 Bonus Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Dark mode toggle with CSS custom properties</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>CSS-only carousel for testimonials</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Advanced CSS shapes and clip-path effects</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>CSS Grid subgrid for complex layouts</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">📁 File Structure</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6">
            <pre className="text-sm">{`landing-page/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── images/
│   ├── hero-bg.jpg
│   ├── features/
│   └── testimonials/
├── js/
│   └── script.js (minimal JS for mobile menu)
└── README.md`}</pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">🎨 Design Inspiration</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700 mb-2">Choose one of these themes for your landing page:</p>
            <ul className="text-gray-600 space-y-1">
              <li>• SaaS Product (project management tool, design software, etc.)</li>
              <li>• Mobile App (fitness app, food delivery, social media)</li>
              <li>• E-learning Platform (online courses, tutorials)</li>
              <li>• Creative Agency (design studio, marketing agency)</li>
              <li>• Tech Startup (AI tool, blockchain service, IoT device)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3">✅ Submission Guidelines</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Deadline:</strong> 1 week from assignment date
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>GitHub Repository:</strong> Well-organized code with clear commit messages
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Live Demo:</strong> Deploy on GitHub Pages, Netlify, or Vercel
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Documentation:</strong> Include design decisions and challenges faced
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">CSS3</Badge>
            <Badge variant="secondary">Flexbox</Badge>
            <Badge variant="secondary">CSS Grid</Badge>
            <Badge variant="secondary">CSS Animations</Badge>
            <Badge variant="secondary">Media Queries</Badge>
            <Badge variant="secondary">CSS Custom Properties</Badge>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-6">
            <h4 className="font-semibold text-pink-800 mb-2">💡 Learning Objectives</h4>
            <ul className="text-pink-700 space-y-1">
              <li>• Master advanced CSS layout techniques</li>
              <li>• Create smooth animations and transitions</li>
              <li>• Implement responsive design patterns</li>
              <li>• Practice modern CSS features and functions</li>
              <li>• Build visually appealing user interfaces</li>
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
